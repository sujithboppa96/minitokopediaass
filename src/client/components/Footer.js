import React from 'react';

import { CgTwitter } from "react-icons/cg";
import { CgFacebook } from "react-icons/cg"
import { CgInstagram } from "react-icons/cg"


export default () => {
  return (
    <footer className="page-footer green">
      <div className="footer-copyright">
        <div className="container">
          © 2020 Mini TokoPedia BY Sujith Boppa
          <div className="grey-text text-lighten-4 right">
            U can Follow me on these
          </div>
          <div className="grey-text text-lighten-4 right">
          <CgTwitter/>
          </div>
          <div className="grey-text text-lighten-4 right">
          <CgFacebook/>
          </div>
          <div className="grey-text text-lighten-4 right">
          <CgInstagram/>
          </div>
        </div>
      </div>
    </footer>
  );
};
