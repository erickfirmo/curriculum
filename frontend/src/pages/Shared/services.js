
import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';


class Services extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {

        return (
            <React.Fragment>
                <section className="section bg-light" id="services">
                    <div className="container">
                        <Row>
                            <Col lg="8" className="offset-lg-2">
                                <h1 className="section-title text-center">Our Services</h1>
                                <div className="section-title-border margin-t-20"></div>
                                <p className="section-subtitle text-muted text-center padding-t-30 font-secondary">We craft digital, graphic and dimensional thinking, to create category leading brand experiences that have meaning and add a value for our clients.</p>
                            </Col>
                        </Row>
                        <div className="row margin-t-30">
                            <Col lg="4" className="margin-t-20">
                                <div className="services-box">
                                    <div className="media">
                                        <i className="pe-7s-diamond text-custom"></i>
                                        <div className="media-body ml-4">
                                            <h4>Digital Design</h4>
                                            <p className="pt-2 text-muted">Some quick example text to build on the card title and make up the bulk of the card's content. Moltin gives you the platform.</p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="4" className="margin-t-20">
                                <div className="services-box">
                                    <div className="media">
                                        <i className="pe-7s-display2 text-custom"></i>
                                        <div className="media-body ml-4">
                                            <h4>Unlimited Colors</h4>
                                            <p className="pt-2 text-muted">Credibly brand standards compliant users without extensible services. Anibh euismod tincidunt ut laoreet Ipsum passage.</p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="4" className="margin-t-20">
                                <div className="services-box">
                                    <div className="media">
                                        <i className="pe-7s-piggy text-custom"></i>
                                        <div className="media-body ml-4">
                                            <h4>Strategy Solutions</h4>
                                            <p className="pt-2 text-muted">Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean necessary regelialia.</p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </div>
                        <Row>
                            <Col lg="4" className="margin-t-20">
                                <div className="services-box">
                                    <div className="media">
                                        <i className="pe-7s-science text-custom"></i>
                                        <div className="media-body ml-4">
                                            <h4>Awesome Support</h4>
                                            <p className="pt-2 text-muted">It is a paradisematic country, in which roasted parts of sentences fly into your mouth leave for the far World.</p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="4" className="margin-t-20">
                                <div className="services-box">
                                    <div className="media">
                                        <i className="pe-7s-news-paper text-custom"></i>
                                        <div className="media-body ml-4">
                                            <h4>Truly Multipurpose</h4>
                                            <p className="pt-2 text-muted">Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="4" className="margin-t-20">
                                <div className="services-box">
                                    <div className="media">
                                        <i className="pe-7s-plane text-custom"></i>
                                        <div className="media-body ml-4">
                                            <h4>Easy to customize</h4>
                                            <p className="pt-2 text-muted">Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia.</p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg="4" className="margin-t-20">
                                <div className="services-box">
                                    <div className="media">
                                        <i className="pe-7s-arc text-custom"></i>
                                        <div className="media-body ml-4">
                                            <h4>Pixel Perfect Design</h4>
                                            <p className="pt-2 text-muted">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="4" className="margin-t-20">
                                <div className="services-box">
                                    <div className="media">
                                        <i className="pe-7s-tools text-custom"></i>
                                        <div className="media-body ml-4">
                                            <h4>Perfect Toolbox</h4>
                                            <p className="pt-2 text-muted">Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur.</p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="4" className="margin-t-20">
                                <div className="services-box">
                                    <div className="media">
                                        <i className="pe-7s-timer text-custom"></i>
                                        <div className="media-body ml-4">
                                            <h4>Awesome Design</h4>
                                            <p className="pt-2 text-muted">All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}
export default Services;


