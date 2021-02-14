import React from 'react';
import Button from 'antd/lib/button';

const Page = (props) => {

	return(
    <div>
      <nav className="navbar navbar-expand-lg navbar-light sticky-top my_navbar">
        <div className="container">
        <a className="navbar-brand"><img id="navbar-logo" src="/images/logo.png" /><span id="navbar-name" className="navbar-link-text">LEVERAGE PLUS</span></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ml-auto mt-2 mt-lg-0" id="main_nav">
                    <li className="nav-item" id="app-link">
                        <a className="nav-link" href="/home"><span style={{color: 'white'}}>DASHBOARD</span></a>
                    </li>
                </ul>
            </div>
        </div>
      </nav>
      <section className="container-fluid landing_page" id="main">
        <div id="background_images">
       
        </div>
        <div id="header">
          <img id="logo" src="/images/logo.png" />
          <h1 id="header_text">WELCOME TO LEVERAGE PLUS</h1>
          <h4>LEVERAGE ON Aave USING 1inch</h4>
          <div id="banner-container">
    
          </div>
        </div>
      </section>
    </div>
  );
  
}

export default Page;