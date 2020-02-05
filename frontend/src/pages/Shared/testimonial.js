
import React, { Component } from 'react';

import user1 from '../../images/testimonials/user-1.jpg';
import user2 from '../../images/testimonials/user-2.jpg';
import user3 from '../../images/testimonials/user-3.jpg';

class Testimonial extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {

        return (
            <React.Fragment>
                <section className="section" id="testi">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2">
                                <h1 className="section-title text-center">What they've said</h1>
                                <div className="section-title-border margin-t-20"></div>
                                <p className="section-subtitle text-muted text-center font-secondary padding-t-30">The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli.</p>
                            </div>
                        </div>
                        <div className="row margin-t-50">
                            <div className="col-lg-4">
                                <div className="testimonial-box margin-t-30">
                                    <div className="testimonial-decs p-4">
                                        <div className="testi-icon">
                                            <i className="mdi mdi-format-quote-open display-2"></i>
                                        </div>
                                        <img src={user1} alt="" className="img-fluid mx-auto d-block img-thumbnail rounded-circle mb-4" />
                                        <div className="p-1">
                                            <h5 className="text-center text-uppercase mb-3">Dennis Williams - <span className="text-muted text-capitalize">Charleston</span></h5>
                                            <p className="text-muted text-center mb-0">“I feel confident imposing change on myself. It's a lot more fun progressing than looking back. That's why I need to throw curve balls.” </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="testimonial-box margin-t-30">
                                    <div className="testimonial-decs p-4">
                                        <div className="testi-icon">
                                            <i className="mdi mdi-format-quote-open display-2"></i>
                                        </div>
                                        <img src={user2} alt="" className="img-fluid mx-auto d-block img-thumbnail rounded-circle mb-4" />
                                        <div className="p-1">
                                            <h5 className="text-center text-uppercase mb-3">Laurie Bell - <span className="text-muted text-capitalize">Worcester</span></h5>
                                            <p className="text-muted text-center mb-0">“Our task must be to free ourselves by widening our circle of compassion to embrace all living creatures and the whole of nature and its beauty.” </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="testimonial-box margin-t-30">
                                    <div className="testimonial-decs p-4">
                                        <div className="testi-icon">
                                            <i className="mdi mdi-format-quote-open display-2"></i>
                                        </div>
                                        <img src={user3} alt="" className="img-fluid mx-auto d-block img-thumbnail rounded-circle mb-4" />
                                        <div className="p-1">
                                            <h5 className="text-center text-uppercase mb-3">Howard Kelley - <span className="text-muted text-capitalize">Lynchburg</span></h5>
                                            <p className="text-muted text-center mb-0">“I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.” </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment >
        );
    }
}

export default Testimonial;


