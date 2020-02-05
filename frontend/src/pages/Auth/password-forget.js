import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Card, CardBody } from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';

class PasswordForget extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }
    componentDidMount()
    {
        document.body.classList.add('bg-account-pages');
        document.body.classList.add('py-4');
        document.body.classList.add('py-sm-0');
    }
    
    render() {

        return (
            <React.Fragment>
                <div className="account-home-btn d-none d-sm-block">
                    <Link to="/" className="text-white"><i className="mdi mdi-home h1"></i></Link>
                </div>
                <section className="height-100vh">
                    <div className="display-table">
                        <div className="display-table-cell">
                            <div className="container">
                                <Row className="justify-content-center">
                                    <Col lg="5">
                                        <Card className="account-card">
                                            <CardBody>
                                                <div className="text-center mt-3">
                                                    <h3 className="font-weight-bold"><Link to="/" className="text-dark text-uppercase account-pages-logo"><i className="mdi mdi-alien"></i>Hiric</Link></h3>
                                                    <p className="text-muted">Reset Password</p>
                                                </div>
                                                <div className="p-3">
                                                    <div className="alert alert-warning  text-center" role="alert">
                                                        Enter your email address and we'll send you an email with instructions to reset your password.
                                            </div>
                                                     <AvForm>
                                                        <div className="form-group">
                                                            <label for="email">Email</label>
                                                            <AvField type="email" name="email" className="form-control"  placeholder="Email"  required />
                                                        </div>
                                                        <div className="mt-3">
                                                            <button type="submit" className="btn btn-custom btn-block">Reset your Password</button>
                                                        </div>
                                                        </AvForm>
                                                </div>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>
                </section>

            </React.Fragment >
        );
    }
}

export default PasswordForget;


