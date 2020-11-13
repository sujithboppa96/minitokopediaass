import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';
import { Helmet } from 'react-helmet';
import StarRatings from 'react-star-ratings'
import axios from 'axios'

class ProductDetails extends Component {


  constructor() {
    super()
    this.state = {
      details: {}
    }
  }

  componentDidMount() {
    let id = window.location.pathname.split('/')[2]
    axios.get(`https://node-sample-api.herokuapp.com/api/products/${id}`).then((res) => {
      this.setState({ details: res.data })
      console.log(res.data, 'from details page')
    })
  }

  render() {
    const { details } = this.state
    return (
      <div className="row">
        <div className="col xl4 l4 m4">
          <img src={details.img} className="list-img-top" alt={'sujith'} />
        </div>
        <div className="col xl8 l8 m8">
          <div className="row">
            <div className="col xl2">Product Name</div>
            <div className="col xl4">{details.name}</div>
          </div>
          <div className="row">
            <div className="col xl2">Rating</div>
            <div className="col xl6">              <StarRatings
                rating={details.rating}
                starRatedColor="aquamarine"
                numberOfStars={5}
                name="rating"
              /></div>
          </div>
          <div className="row">
            <div className="col xl2">Price</div>
            <div className="col xl6">{details.price}</div>
          </div>
          <div className="row">
            <div className="col xl2">Desccription</div>
            <div className="col xl6">{details.description}</div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { users: state.users };
}


export default {
  component: connect(mapStateToProps, { fetchUsers })(ProductDetails)
};
