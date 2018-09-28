import React, { Component } from 'react';
import './SignUpThankYou.css';
import { Button, Form, Input } from 'reactstrap';
import ThankYouImage from '../../images/thank-you-animation.gif';

class SignUpThankYou extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return(
            <div className="container thank-you">
                <div className="row">
                    <div className="col-xl-3 col-lg-3 col-md-2 col-sm-12 col-12"></div>
                    <div className="col-xl-6 col-lg-6 col-md-8 col-sm-12 col-12">
                        <h2>You're in for early access</h2>
                            <h6>We can't wait to let you know when UX Supercharge is ready!</h6>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-2 col-sm-12 col-12"></div>
                </div>
                <div className="thank-you-image-container">
                    <img src={ThankYouImage} alt="we are hard at work to bring ux challenge to you!" />
                </div>
            </div>
        );
    }

}

export default SignUpThankYou;