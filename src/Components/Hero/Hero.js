import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './Hero.css';
import HeroImage from '../../images/cityscape.png';

class Hero extends Component {

    constructor(props) {
        super(props);
      }

    render() {
        return(
            <div className="hero">
                <div className="container">
                    <div className="hero-value" >
                        <h1>Create UX Case Studies that Get You Hired</h1>
                        <h6>The all-in-one <span className="bold">design challenge kit</span> that makes it easy for you <br/> to create case studies employers are looking for.</h6>
                    </div>
                </div>
            </div>
        );
    }
}

export default Hero;