
import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import ProgressBar from 'react-animated-progress-bar';

class Habilidades extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {

        return (
            <React.Fragment>
                <section className="section bg-light" id="habilidades">
                    <div className="container">
                        <Row>
                            <Col lg="8" className="offset-lg-2">
                                <h1 className="section-title text-center">Habilidades</h1>
                                <div className="section-title-border margin-t-20"></div>
                                <p className="section-subtitle text-muted text-center padding-t-30 font-secondary">Lorem ipsum dolor sit amet cras at niet magnus</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg="3" className="margin-t-30">
                                <ProgressBar
                                    width="300"
                                    trackWidth="13"
                                    percentage="90"
                                    fontColor="#212529"
                                    defColor={{
                                        fair: '#f87b32',
                                        good: '#f87b32',
                                        excellent: '#f87b32',
                                        poor: '#f87b32',
                                    }}/>
                                <h3 className="text-center">HTML</h3>
                            </Col>
                            
                            <Col lg="3" className="margin-t-30">
                                <ProgressBar
                                    width="300"
                                    trackWidth="13"
                                    percentage="70"
                                    fontColor="#212529"
                                    defColor={{
                                        fair: '#2ab8e7',
                                        good: '#2ab8e7',
                                        excellent: '#2ab8e7',
                                        poor: '#2ab8e7',
                                    }}/>
                                <h3 className="text-center">CSS</h3>
                            </Col>
                            
                            <Col lg="3" className="margin-t-30">
                                <ProgressBar
                                    width="300"
                                    trackWidth="13"
                                    percentage="65"
                                    fontColor="#212529"
                                    defColor={{
                                        fair: '#f5ce35',
                                        good: '#f5ce35',
                                        excellent: '#f5ce35',
                                        poor: '#f5ce35',
                                    }}/>
                                <h3 className="text-center">JAVASCRIPT</h3>
                            </Col>
                            
                            <Col lg="3" className="margin-t-30">
                                <ProgressBar
                                    width="300"
                                    trackWidth="13"
                                    percentage="80"
                                    fontColor="#212529"
                                    defColor={{
                                        fair: '#7478ae',
                                        good: '#7478ae',
                                        excellent: '#7478ae',
                                        poor: '#7478ae',
                                    }}/>
                                <h3 className="text-center">PHP</h3>
                            </Col>
                            
                        </Row>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}
export default Habilidades;


