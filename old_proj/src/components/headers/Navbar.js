import React, { Component } from 'react'
import {Link} from 'react-router-dom'
// import logo from '../logo'

export default class Navbar extends Component {
  
  render() {
    return (
      <nav>
        <header className="top-area">
        <div className="header-area">
          <div className="container">
            <div className="row">
              <div className="col-sm-2">
                <div className="logo">
                  <Link to="/">
                    {/* <img src={logo} alt="Yellow Hat Travels" /> */}
                    Yellow <span>Hat</span> Travels
                  </Link>
                </div>
              </div>
              <div className="col-sm-10">
                <div className="main-menu">
                  <div className="navbar-header">
                    <button type="button"
                            className="navbar-toggle" 
                            data-toggle="collapse" 
                            data-target=".navbar-collapse"
                            // onClick={this.handleToggle}
                            >
                      <i className="fa fa-bars"></i>
                    </button>
                  </div>
                  <div className="collapse navbar-collapse">		  
                    <ul className="nav navbar-nav navbar-right">
                      <li >
                        <Link to="/">Home</Link>
                      </li>
                      <li >
                        <Link to="/about">About Us</Link>
                      </li>
                      <li >
                        <Link to="/lite">Yellow Lite </Link>
                      </li>
                      <li >
                        <Link to="/lux">Yellow Lux</Link>
                      </li>
                      <li >
                        <Link to="/group">Group Tour</Link>
                      </li>
                      {/* <li>
                        <button className="book-btn">log in
                        </button> 
                      </li> */}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="home-border"></div>
          </div>
        </div>
      </header>
    </nav>
    )
  }
    
}

// export default Navbar
