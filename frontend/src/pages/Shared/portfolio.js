
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
                <section className="section" id="features">
                    <div className="container">
                        <Row>
                            <Col lg="8" className="offset-lg-2">
                                <h1 className="section-title text-center">Trabalhos Recentes</h1>
                                <div className="section-title-border margin-t-20"></div>
                                <p className="section-subtitle text-muted text-center padding-t-30 font-secondary">We craft digital, graphic and dimensional thinking, to create category leading brand experiences that have meaning and add a value for our clients.</p>
                            </Col>
                        </Row>
                        <div className="row align-items-right">
                            <div className="col-lg-12 order-2 order-lg-1">
                                <div className="features-box mt-5 mt-lg-0">
                                    <h3>Lorem ipsum dolor sit</h3>
                                    <p className="text-muted web-desc">Sed do eiusmod tempor incididu ut labore et dolore magna aliqua.</p>
                                    {/*<ul className="text-muted list-unstyled margin-t-30 features-item-list">
                                        <li className="">Incididu ut labore et dolore</li>
                                        <li className="">Consectetur adipiscing elit sed d aliqua</li>
                                        <li className="">Eiusmod tempor incididu ut labore et dolore magna</li>
                                    </ul>*/}
                                    {/*<Link to="#" className="btn btn-custom margin-t-30 waves-effect waves-light">Leia mais <i className="mdi mdi-arrow-right"></i></Link>*/}
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


