import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Card, CardBody } from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';

class Login extends Component {

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
                                            <CardBody className="card-body">
                                                <div className="text-center mt-3">
                                                    <h3 className="font-weight-bold"><a href="index-1.html" className="text-dark text-uppercase account-pages-logo"><i className="mdi mdi-alien"></i>Hiric</a></h3>
                                                    <p className="text-muted">Sign in to continue to Hiric.</p>
                                                </div>
                                                <div className="p-3">
                                                
                                                    <AvForm>
                                                        <div className="form-group">
                                                            <label for="username">Username</label>
                                                            <AvField type="text" name="name" className="form-control"  placeholder="Enter username"  required />
                                                        </div>

                                                        <div className="form-group">
                                                            <label for="userpassword">Password</label>
                                                            <AvField type="password" name="password" className="form-control"  placeholder="Enter password"  required />
                                                        </div>

                                                        <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" id="customControlInline" />
                                                            <label className="custom-control-label" for="customControlInline">Remember me</label>
                                                        </div>

                                                        <div className="mt-3">
                                                            <button type="submit" className="btn btn-custom btn-block">Log In</button>
                                                        </div>

                                                        <div className="mt-4 mb-0 text-center">
                                                            <Link to="/password-forget" className="text-dark"><i className="mdi mdi-lock"></i> Forgot your password?</Link>
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

export default Login;


