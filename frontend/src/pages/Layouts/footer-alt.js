
import React, { Component } from 'react';

import { Link } from 'react-router-dom';


class FooterAlt extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {

        return (
            <React.Fragment>
                <div className="footer-alt">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="float-left pull-none">
                                    <p className="copy-rights text-muted mb-3 mb-sm-0">{new Date().getFullYear()} © Hiric - Themesbrand</p>
                                </div>
                                <div className="float-right pull-none ">
                                    <ul className="list-inline social m-0">
                                        <li className="list-inline-item"><Link to="" onClick={evt => {  evt.preventDefault(); } } className="social-icon"><i className="mdi mdi-facebook"></i></Link></li>
                                        <li className="list-inline-item"><Link to="" onClick={evt => {  evt.preventDefault(); } } className="social-icon"><i className="mdi mdi-twitter"></i></Link></li>
                                        <li className="list-inline-item"><Link to="" onClick={evt => {  evt.preventDefault(); } } className="social-icon"><i className="mdi mdi-linkedin"></i></Link></li>
                                        <li className="list-inline-item"><Link to="" onClick={evt => {  evt.preventDefault(); } } className="social-icon"><i className="mdi mdi-google-plus"></i></Link></li>
                                        <li className="list-inline-item"><Link to="" onClick={evt => {  evt.preventDefault(); } } className="social-icon"><i className="mdi mdi-dribbble"></i></Link></li>
                                    </ul>
                                </div>
                                <div className="clearfix"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment >
        );
    }
}

export default FooterAlt;


