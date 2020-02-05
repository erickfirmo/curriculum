
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Pricing extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {

        return (
            <React.Fragment>
                <section className="section bg-light" id="pricing">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2">
                                <h1 className="section-title text-center">Our Pricing</h1>
                                <div className="section-title-border margin-t-20"></div>
                                <p className="section-subtitle font-secondary text-muted text-center padding-t-30">Call to action pricing table is really crucial to your for your business website. Make your bids stand-out with amazing options.</p>
                            </div>
                        </div>
                        <div className="row margin-t-50">
                            <div className="col-lg-4">
                                <div className="text-center pricing-box">
                                    <h4 className="text-uppercase">Economy</h4>
                                    <h1>$9.90</h1>
                                    <h6 className="text-uppercase text-muted">Billing Per Month</h6>
                                    <div className="plan-features margin-t-50">
                                        <p>Bandwidth: <b className="text-custom">1GB</b></p>
                                        <p>Onlinespace: <b className="text-custom">50MB</b></p>
                                        <p>Support: <b className="text-custom">No</b></p>
                                        <p><b className="text-custom">1</b> Domain</p>
                                        <p><b className="text-custom">No</b> Hidden Fees</p>
                                    </div>
                                    <Link to="#" onClick={evt => {  evt.preventDefault(); } } className="btn btn-custom waves-effect waves-light margin-t-30">Join Now</Link>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="text-center pricing-box bg-white price-active">
                                    <div className="ribbon-box"><span>Popular</span></div>
                                    <h4 className="text-uppercase">Deluxe</h4>
                                    <h1>$19.90</h1>
                                    <h6 className="text-uppercase text-muted">Billing Per Month</h6>
                                    <div className="plan-features margin-t-50">
                                        <p>Bandwidth: <b className="text-custom">10GB</b></p>
                                        <p>Onlinespace: <b className="text-custom">500MB</b></p>
                                        <p>Support: <b className="text-custom">Yes</b></p>
                                        <p><b className="text-custom">10</b> Domain</p>
                                        <p><b className="text-custom">No</b> Hidden Fees</p>
                                    </div>
                                    <Link to="#" onClick={evt => {  evt.preventDefault(); } } className="btn btn-custom waves-effect waves-light margin-t-30">Join Now</Link>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="text-center pricing-box">
                                    <h4 className="text-uppercase">Ultimate</h4>
                                    <h1>$29.90</h1>
                                    <h6 className="text-uppercase text-muted">Billing Per Month</h6>
                                    <div className="plan-features margin-t-50">
                                        <p>Bandwidth: <b className="text-custom">100GB</b></p>
                                        <p>Onlinespace: <b className="text-custom">2 GB</b></p>
                                        <p>Support: <b className="text-custom">Yes</b></p>
                                        <p><b className="text-custom">Unlimited</b> Domain</p>
                                        <p><b className="text-custom">No</b> Hidden Fees</p>
                                    </div>
                                    <Link to="#" onClick={evt => {  evt.preventDefault(); } } className="btn btn-custom waves-effect waves-light margin-t-30">Join Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment >
        );
    }
}

export default Pricing;


