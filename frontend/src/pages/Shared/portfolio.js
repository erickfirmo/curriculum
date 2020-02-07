
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import grAnaly from '../../images/growth-analytics.svg';

class Portfolio extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {

        return (
            <React.Fragment>
                <section className="section" id="features">
                    <div className="container">
                        <div className="row align-items-right">
                            <div className="col-lg-12 order-2 order-lg-1">
                                <div className="features-box mt-5 mt-lg-0">
                                    <h3 className="text-center">Trabalhos Recentes</h3>
                                    <p className="text-center web-desc">Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                                    <ul className="text-muted list-unstyled margin-t-30 features-item-list d-block m-auto">
                                        <li className="">We put a lot of effort in design.</li>
                                        <li className="">The most important ingredient of successful website.</li>
                                        <li className="">Submit Your Orgnization.</li>
                                    </ul>
                                    {/*<Link to="#" className="btn btn-custom margin-t-30 waves-effect waves-light">Learn More <i className="mdi mdi-arrow-right"></i></Link>*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment >
        );
    }
}

export default Portfolio;


