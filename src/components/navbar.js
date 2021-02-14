import React from 'react';
import Tag from 'antd/lib/tag';


const Navbar = (props) => {

	return(
    <nav className="navbar navbar-expand-lg navbar-light my_navbar">
      <div className="container">
        <a className="navbar-brand" href="/"><img id="navbar-logo" src="/images/logo.png" /><span id="navbar-name" className="navbar-link-text">LEVERAGE PLUS</span></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse tradable-navbar" id="navbarResponsive">
          <ul className="navbar-nav ml-auto mt-2 mt-lg-0" id="main_nav">
            <li className="nav-item">
              <a className="nav-link" href="/home"><span className="navbar-link-text">HOME</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/wallet"><span className="navbar-link-text">FAUCET</span></a>
            </li>
       
          </ul>
        </div>
      </div>
    </nav>
  );
  
}

export default Navbar;