import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Card, CardBody } from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';

class Register extends Component {

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
                                                    <p className="text-muted">Sign up for a new Account</p>
                                                </div>
                                                <div className="p-3">
                                                <AvForm>
                                                        <div className="form-group">
                                                            <label for="firstname">First Name</label>
                                                            <AvField type="text" name="firstname" className="form-control"  placeholder="First Name"  required />
                                                      
                                                        </div>

                                                        <div className="form-group">
                                                            <label for="email">Email</label>
                                                            <AvField type="email" name="email" className="form-control"  placeholder="Enter Email"  required />
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
                                                            <button type="submit" className="btn btn-custom btn-block">Sign in</button>
                                                        </div>

                                                        <div className="mt-4 mb-0 text-center">
                                                            <p className="mb-0">Don't have an account ? <Link to="/login" className="text-danger">Sign in</Link></p>
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

export default Register;


