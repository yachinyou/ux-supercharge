import React, { Component } from 'react';
import './SellSheet.css';

import placementImage from '../../images/placement_img.png';
import quoteProfile from '../../images/quote-profile.png';
import itTakesWeeks from '../../images/ux_case_studies_take_weeks.png';
import caseStudyEmployer from '../../images/ux_case_studies_employers.png';
import designChallengeKit from '../../images/ux_design_challenge_kit_illustration.png';
import designChallengeIllustration from '../../images/design_challenge_illustration.png';
import userResearchMarketData from '../../images/user_research_market_data.png';
import expertFeedback from '../../images/expert_feedback.png';
import itemDesignChallenge from '../../images/item_design_challenge.png';
import itemUXProcess from '../../images/item_step_by_step_ux_process.png';
import itemMarketData from '../../images/item_market_data.png';
import itemSurvey from '../../images/item_survey.png';
import itemFeedback from '../../images/item_feedback.png';
import itemInterviewVideo from '../../images/item_interview_video.png';
import itemDeviceMockup from '../../images/item_device_mockup.png';
import itemPersonaTemplate from '../../images/item_persona_template.png';
import itemJourneyMap from '../../images/item_journey_map.png';
import itemStoryboard from '../../images/item_storyboard.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'

class SellSheet extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="sell-sheet">
                <div className="container">
                    <div className="row quote">
                        <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12 col-12"></div>
                        <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">
                            <p className="quote-content">“When we hire, we want to see your thought process and how you tackle real world problems.”</p>
                            <div className="quote-author">
                                <img className="float-left" src={quoteProfile} alt="UX employer quote" />
                                <p>Yachin You, UX Designer,<br />formerly Levi's</p>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12 col-12"></div>
                    </div>
                    <hr />
                    <div className="row problem">
                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12"></div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                            <h4>A stellar design case study takes time and hard work to create</h4>
                            <p>From problem identification to final execution, the full design process can take weeks or even months to complete. </p>
                            <img src={itTakesWeeks} alt="UX case studies can take weeks to complete" />
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12"></div>
                    </div>
                    <div className="row problem">
                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12"></div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                            <h4>Are you showing the right case studies to the right employers?</h4>
                            <p>You'll have an easier time getting a job if the case studies in your portfolio are relevant to your employer's business.</p>
                            <img src={caseStudyEmployer} alt="UX case studies can take weeks to complete" />
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12"></div>
                    </div>
                    <hr />
                    <div className="row product-intro">
                        <div className="col-xl-3 col-lg-3 col-md-2 col-sm-12 col-12"></div>
                        <div className="col-xl-6 col-lg-6 col-md-8 col-sm-12 col-12">
                            <h3>Here's everything you need to create a winning case study — fast.</h3>
                            <p>Our design challenge kit features an <span className="bold">industry focused design challenge</span>, <span className="bold">user research</span>, <span className="bold">market data</span>, <span className="bold">constructive feedback</span> and much more.</p>
                            <img src={designChallengeKit} alt="UX case studies can take weeks to complete" />
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-2 col-sm-12 col-12"></div>
                    </div>
                    <h2 className="large-sell-header">Why it works</h2>
                </div>
                <div className="sell-section paper">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-12 col-12"></div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 sell1-image">
                                <img src={designChallengeIllustration} clat="solve ux challenges in the real world" />
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 sell-text">
                                <h2>Show employers how you solve customer problems in their industry.</h2>
                                <h6>All design challenges are based on real world problems in these trending product categories:</h6>
                            </div>
                            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-12 col-12"></div>
                        </div>
                    </div>
                </div>
                <div className="sell-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-12 col-12"></div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 sell1-image">
                                <img src={userResearchMarketData} clat="solve ux challenges in the real world" />
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 sell-text">
                                <h2>Jump start your design process with user research & market data</h2>
                                <h6>Not familiar with an industry? We got you covered. Gain fundamental knowledge and common customer problems with market data and user interview recordings.</h6>
                            </div>
                            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-12 col-12"></div>
                        </div>
                    </div>
                </div>
                <div className="sell-section paper">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-12 col-12"></div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 sell1-image">
                                <img src={expertFeedback} clat="solve ux challenges in the real world" />
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 sell-text">
                                <h2>Level up your case study with expert feedback</h2>
                                <h6>Turn your designs from good to great by requesting feedback from experienced UX designers. Receive constructive critiques within 24 hours. No more waiting around for responses from forums.</h6>
                            </div>
                            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-12 col-12"></div>
                        </div>
                    </div>
                </div>
                <h2 className="large-sell-header">What’s in a design challenge kit</h2>
                <div className="container">
                    <div className="row whats-inside">
                        <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12 col-12"></div>
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 product-item">
                            <h4>An Industry specific design challenge</h4>
                            <div className="blue-deco-line"></div>
                            <img className="width-50" src={itemDesignChallenge} alt="industry focused design challenge" />
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 product-item brick">
                            <h4>Step-by-step UX process guide</h4>
                            <div className="blue-deco-line"></div>
                            <img className="width-50" src={itemUXProcess} alt="Step-by-step UX process guide" />
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12 col-12"></div>
                    </div>
                    <div className="row whats-inside">
                        <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12 col-12"></div>
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 product-item">
                            <h4>Industry market data</h4>
                            <div className="blue-deco-line"></div>
                            <img className="width-50" src={itemMarketData} alt="industry focused design challenge" />
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 product-item brick">
                            <h4>Synthesized user survey from 50 responses</h4>
                            <div className="blue-deco-line"></div>
                            <img className="width-50" src={itemSurvey} alt="Step-by-step UX process guide" />
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12 col-12"></div>
                    </div>
                    <div className="row whats-inside">
                        <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12 col-12"></div>
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 product-item">
                            <h4>3 constructive feedback from experienced designers <span className="pro-kit-tag"><FontAwesomeIcon icon="star" color="#1147FF" size="lg" />Pro Kit</span></h4>
                            <div className="blue-deco-line"></div>
                            <img className="width-50" src={itemFeedback} alt="3 constructive feedback from experienced designers" />
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 product-item brick">
                            <h4>Synthesized user survey from 50 responses <span className="pro-kit-tag"><FontAwesomeIcon icon="star" color="#1147FF" size="lg" />Pro Kit</span></h4>
                            <div className="blue-deco-line"></div>
                            <img className="width-50" src={itemInterviewVideo} alt="synthesized user survey from 50 responses" />
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12 col-12"></div>
                    </div>
                    <div className="row whats-inside">
                        <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12 col-12"></div>
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 product-item">
                            <h4>High-res device mockup <span className="pro-kit-tag"><FontAwesomeIcon icon="star" color="#1147FF" size="lg" />Pro Kit</span></h4>
                            <div className="blue-deco-line"></div>
                            <img className="width-75" src={itemDeviceMockup} alt="3 constructive feedback from experienced designers" />
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 product-item brick">
                            <h4>Persona template <span className="pro-kit-tag"><FontAwesomeIcon icon="star" color="#1147FF" size="lg" />Pro Kit</span></h4>
                            <div className="blue-deco-line"></div>
                            <img className="width-75" src={itemPersonaTemplate} alt="synthesized user survey from 50 responses" />
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12 col-12"></div>
                    </div>
                    <div className="row whats-inside">
                        <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12 col-12"></div>
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 product-item">
                            <h4>Customer journey map template <span className="pro-kit-tag"><FontAwesomeIcon icon="star" color="#1147FF" size="lg" />Pro Kit</span></h4>
                            <div className="blue-deco-line"></div>
                            <img className="width-75" src={itemJourneyMap} alt="3 constructive feedback from experienced designers" />
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 product-item brick">
                            <h4>Storyboard template with ready-to-use graphics <span className="pro-kit-tag"><FontAwesomeIcon icon="star" color="#1147FF" size="lg" />Pro Kit</span></h4>
                            <div className="blue-deco-line"></div>
                            <img className="width-75" src={itemStoryboard} alt="synthesized user survey from 50 responses" />
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12 col-12"></div>
                    </div>
                </div>
            </div>    
        );
    }
}

export default SellSheet;