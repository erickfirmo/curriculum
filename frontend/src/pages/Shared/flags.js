import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';

import img1 from '../../images/clients/1.png';
import img2 from '../../images/clients/2.png';
import img3 from '../../images/clients/3.png';
import img4 from '../../images/clients/4.png';

class Info extends Component {

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
                            
                            <Col md="4">
                                <div className="">
                                    +55 11 93026 2702
                                </div>
                            </Col>

                            <Col md="4">
                                <div className="">
                                    erickluques@gmail.com
                                </div>
                            </Col>

                            <Col md="4">
                                <div className="">
                                    São Paulo, SP - Brazil
                                </div>
                            </Col>
                        </Row>
                    </div>
                </section>
            </React.Fragment >
        );
    }
}

export default Info;


