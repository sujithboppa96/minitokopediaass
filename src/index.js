import 'babel-polyfill';
import express from 'express';
import { matchRoutes } from 'react-router-config';
import proxy from 'express-http-proxy';
import Routes from './client/Routes';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';
import HomePage from './client/pages/HomePage'
import { renderToString } from 'react-dom/server';
import React from 'react'

const host = '0.0.0.0';
const port = process.env.PORT || 3000;
const app = express();

app.use(express.static('public'));
  app.get('*', (req, res) => {
    const store = createStore(req);

    const promises = matchRoutes(Routes, req.path)
      .map(({ route }) => {
        return route.loadData ? route.loadData(store) : null;
      })
      .map(promise => {
        if (promise) {
          return new Promise((resolve, reject) => {
            promise.then(resolve).catch(resolve);
          });
        }
      });

    Promise.all(promises).then(() => {
      const context = {};
      const content = renderer(req, store, context);

      if (context.url) {
        return res.redirect(301, context.url);
      }
      if (context.notFound) {
        res.status(404);
      }

      res.send(content);
    });
  });


app.listen(port, () => {
  console.log(`Listening on prot ${port}`);
});
