import React, { Component } from 'react';
import './App.css';
import { ReactTitle } from 'react-meta-tags';
import { BrowserRouter, Route } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import Hero from './Components/Hero/Hero';
import SellSheet from './Components/SellSheet/SellSheet';
import Footer from './Components/Footer/Footer';
import ThankYou from './Components/SignUpThankYou/SignUpThankYou';
import ThankYou29 from './Components/SignUpThankYou/SignUpThankYou29';
import ThankYou9 from './Components/SignUpThankYou/SignUpThankYou9';
import AboutPage from './Components/About/About';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faStar } from '@fortawesome/free-solid-svg-icons';
library.add(faCheckCircle, faStar);

//Update Google analytics
// import ReactGA from 'react-ga';
// ReactGA.initialize('UA-648673-27');
// ReactGA.pageview(window.location.pathname + window.location.search);

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <ReactTitle title="Live Code Help" />
          <Route path="/" component={NavBar} />
          <Route path="/" exact component={Hero} />
          <Route path="/" exact component={SellSheet} />
          <Route path="/thankyou29" exact component={ThankYou29} />
          <Route path="/thankyou9" exact component={ThankYou9} />
          <Route path="/about" exact component={AboutPage} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
