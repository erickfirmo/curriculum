import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';

class Info extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {

        return (
            <React.Fragment>
                <section className="info">
                    <div className="container">
                        <Row>
                            
                            <Col md="4">
                                <div>
                                    +55 11 93026 2702
                                </div>
                            </Col>

                            <Col md="4">
                                <div>
                                    erickluques@gmail.com
                                </div>
                            </Col>

                            <Col md="4">
                                <div>
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


