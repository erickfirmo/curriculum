
import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';


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
                                <p className="section-subtitle text-muted text-center padding-t-30 font-secondary">We craft digital, graphic and dimensional thinking, to create category leading brand experiences that have meaning and add a value for our clients.</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg="12" className="margin-t-20">
                                <div className="services-box">
                                    <div className="skill">
                                        <p>PHP</p>
                                        <div className="skill-bar skill5 wow slideInLeft animated">
                                            <span className="skill-count5">80%</span>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            
                        </Row>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}
export default Habilidades;


