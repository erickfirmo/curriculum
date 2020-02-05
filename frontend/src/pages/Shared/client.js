import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';

import img1 from '../../images/clients/1.png';
import img2 from '../../images/clients/2.png';
import img3 from '../../images/clients/3.png';
import img4 from '../../images/clients/4.png';

class Client extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {

        return (
            <React.Fragment>
                <section className="section-sm bg-light">
                    <div className="container">
                        <Row>
                            <Col md="3">
                                <div className="client-images my-3 my-md-0">
                                    <img src={img1} alt="logo-img" className="mx-auto img-fluid d-block" />
                                </div>
                            </Col>

                            <Col md="3">
                                <div className="client-images my-3 my-md-0">
                                    <img src={img2} alt="logo-img" className="mx-auto img-fluid d-block" />
                                </div>
                            </Col>

                            <Col md="3">
                                <div className="client-images my-3 my-md-0">
                                    <img src={img3} alt="logo-img" className="mx-auto img-fluid d-block" />
                                    </div>
                            </Col>

                            <Col md="3">
                                <div className="client-images my-3 my-md-0">
                                    <img src={img4} alt="logo-img" className="mx-auto img-fluid d-block" />
                                </div>
                            </Col>
                        </Row>
                    </div>
                </section>
            </React.Fragment >
        );
    }
}

export default Client;


