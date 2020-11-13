import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { CgPushLeft } from 'react-icons/cg'

export class Header extends React.Component {


constructor() {
  super()
  this.state = {
    id: 0
  }
}
  componentDidMount() {
    let id = window.location.pathname.split('/')[2]
    console.log(window.location.pathname, 'id from header.js')
    this.setState({id: id})
  }
render() {
  return (
    <div className="navbar-fixed green">
          <nav class="green">
      <div className="nav-wrapper">
                  <div className="left">
                  <Link to={`/`} >
                            <CgPushLeft/>
                          </Link>        </div>
        <div className="center-align">
        <img
            src={'https://ecs7.tokopedia.net/assets-seru-frontend/master/img/logo-b0ceebca9543b2da51c42d65485c78f6.png'}
            className="center-align"
            alt={'name'}
          />
        </div>
      </div>
    </nav>
    </div>

  )
}
}




export default (Header)
