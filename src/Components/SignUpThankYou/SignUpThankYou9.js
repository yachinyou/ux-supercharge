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
                        <h2>Get early access today</h2>
                            <h6>Hello there! <span className="bold">We are still working hard on bringing UX Supercharge to you at this moment!</span></h6>
                            <h6>Sign up for early access and you'll be the first to know when it's ready.</h6>
                            <div className="form-container">
                                <form action="https://bonsterxbonster.us2.list-manage.com/subscribe/post" method="POST">
                                    <Input type="hidden" name="u" value="7cdd3e7148bfb13d3deb11a50" />
                                    <Input type="hidden" name="id" value="75e70fa2e8" />    
                                    <Input className="email-input float-left" type="email" autocapitalize="off" autocorrect="off" name="MERGE0" id="MERGE0" size="25" placeholder="Your Email"/>
                                    <Button type="submit" className="float-left">Get early access</Button>
                                </form>
                            </div>
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