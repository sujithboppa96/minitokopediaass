import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../actions'
import { fetchAdmins } from '../actions'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import dispatch from 'redux'
import axios from 'axios'
import { Carousel } from 'react-responsive-carousel'
import { FaTwitter } from 'react-icons/fa'
import { CgMoreAlt } from 'react-icons/cg'
import { CgPushLeft } from 'react-icons/cg'
import { VscLoading } from 'react-icons/vsc'
import Slider from 'react-slick'
import { CgDollar } from 'react-icons/cg'

// import './HomePage.scss'

class HomePage extends Component {
  constructor() {
    super()
    this.state = {
      banners: []
    }
  }
  componentDidMount() {
    console.log('from component did mount of home page')
    // axios.get('https://node-sample-api.herokuapp.com/api/home').then((res) => {
    //   this.setState({banners: res.json()})
    // })
  }

  renderUsers() {
    return this.props.users.map((user) => {
      return (
        <div>
          <li key={user.id}>{user.name}</li>
          <Link to="/users">goTo</Link>
        </div>
      )
    })
  }

  head() {
    return (
      <Helmet>
        <title>{`${this.props.products.length} Products displayed`}</title>
        <meta property="og:title" content="Users App" />
      </Helmet>
    )
  }
  getNextPageData(users) {
    this.props.fetchAdmins()
  }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    }
    console.log(this.props, 'this.props')
    const { products } = this.props
    if (!products) {
      return (
        <div>
          <VscLoading />
        </div>
      )
    }
    return (
      <div className="home">
        {this.head()}
        <div className="container">
          <div className="slider small">
            <Slider {...settings}>
               <div>
                  <img src='https://ecs7.tokopedia.net/img/banner/2019/12/13/77927732/77927732_d75f8b70-9cba-4022-a45b-6df2ef6c2ec6.jpg' />
                </div>
                <div>
                  <img src='https://ecs7.tokopedia.net/img/banner/2019/12/18/77927732/77927732_344b9d74-50e5-4823-8fa1-2a5792af09c1.jpg' />
                </div>
                <div>
                  <img src="https://ecs7.tokopedia.net/img/banner/2019/12/18/77927732/77927732_1af4050a-a288-4a9c-8416-b8091be33377.jpg" />
                </div>
                <div>
                  <img src="https://ecs7.tokopedia.net/img/banner/2019/12/18/61130029/61130029_0b72b92b-9a57-4de9-b12a-1a785dcdc2b7.jpg" />
                </div>
                <div>
                  <img src='https://ecs7.tokopedia.net/img/banner/2019/12/18/77927732/77927732_a32d5467-a70e-499b-b636-7e2b8c74ef9a.jpg' />
                </div>
            </Slider>
            {/* <Carousel>
                <div>
                    <img src='https://ecs7.tokopedia.net/img/banner/2019/12/18/77927732/77927732_1af4050a-a288-4a9c-8416-b8091be33377.jpg'/>
                </div>
                <div>
                    <img src='https://ecs7.tokopedia.net/img/banner/2019/12/18/61130029/61130029_0b72b92b-9a57-4de9-b12a-1a785dcdc2b7.jpg' />
                </div>
                <div>
                    <img src='https://ecs7.tokopedia.net/img/banner/2019/12/13/77927732/77927732_d75f8b70-9cba-4022-a45b-6df2ef6c2ec6.jpg'/>
                </div>
         </Carousel> */}
          </div>
        </div>
        {/* <div className="row"> */}
        <div className="section">
          <div className="listItems row">
            {this.props.products.map((product) => (
              <div key={product.id} className="listItem col s12 m6 l6 xl2">
                {/* <Link to={`/pdp/${hero.id}`} >
                  <img src={hero.img} className="list-img-top" alt={hero.name} />
                </Link>
              <div className="list-body">
                <h5 className="list-title">{hero.name}</h5>
                <h6>{hero.price}</h6>
              </div> */}
                <div className="card small">
                  <div className="card-image">
                  <Link to={`/pdp/${product.id}`} >
                  <img src={product.img} className="list-img-top" alt={product.name} />
                </Link>
                  </div>
                  <div className="card-content">
                    <span className="card-title">{product.name}</span>
                    <span className="card-title">{`$${product.price}`}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* </div> */}
        </div>
        <div className="center" onClick={() => this.getNextPageData()}>
          <div>
            <CgMoreAlt />
          </div>
          <div>LoadMore</div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { products: state.products }
}

function loadData(store) {
  return store.dispatch(fetchUsers())
}

export default {
  loadData,
  component: connect(mapStateToProps, { fetchUsers, fetchAdmins })(HomePage)
}
