
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
                    <Row>
                        <Col lg="8" className="offset-lg-2">
                            <h1 className="section-title text-center">Trabalhos Recentes</h1>
                            <div className="section-title-border margin-t-20"></div>
                            <p className="section-subtitle text-muted text-center padding-t-30 font-secondary">Lorem ipsum dolor sit amet cras at niet magnus</p>
                        </Col>
                    </Row>
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


