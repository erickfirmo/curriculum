
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Col, Row } from 'reactstrap';


import grAnaly from '../../images/growth-analytics.svg';

class Portfolio extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        
        return (
            <React.Fragment>
                 <section className="section" id="about">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <div className="about-title mx-auto text-center">
                            <h2 className="font-weight-light">A Digital web studio creating stunning  &amp; Engaging online Experiences </h2>
                            <p className="text-muted pt-4">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis.</p>
                        </div>
                    </div>
                </div>
                <div className="row margin-t-50">
                    <div className="col-lg-3 col-sm-6">
                        <div className="team-box text-center">
                            <div className="team-wrapper">
                                <div className="team-member">
                                    <img alt="" src="" className="img-fluid rounded" />
                                </div>
                            </div>
                            <h4 className="team-name">Consectetuer</h4>
                            <p className="text-uppercase team-designation">Ridiculus</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6">
                        <div className="team-box text-center">
                            <div className="team-wrapper">
                                <div className="team-member">
                                    <img alt="" src="" className="img-fluid rounded" />
                                </div>
                            </div>
                            <h4 className="team-name">Adipiscing</h4>
                            <p className="text-uppercase team-designation">Penatibus</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6">
                        <div className="team-box text-center">
                            <div className="team-wrapper">
                                <div className="team-member">
                                    <img alt="" src="" className="img-fluid rounded" />
                                </div>
                            </div>
                            <h4 className="team-name">Penatibus</h4>
                            <p className="text-uppercase team-designation">Consectetuer</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6">
                        <div className="team-box text-center">
                            <div className="team-wrapper">
                                <div className="team-member">
                                    <img alt="" src="" className="img-fluid rounded" />
                                </div>
                            </div>
                            <h4 className="team-name">Ridiculus</h4>
                            <p className="text-uppercase team-designation">Adipiscing</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
              
            </React.Fragment >
        );
    }
}

export default Portfolio;


