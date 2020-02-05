
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class GetStart extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {

        return (
            <React.Fragment>
                <section className="section section-lg bg-get-start">
                    <div className="bg-overlay"></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2 text-center">
                                <h1 className="get-started-title text-white">Let's Get Started</h1>
                                <div className="section-title-border margin-t-20 bg-white"></div>
                                <p className="section-subtitle font-secondary text-white text-center padding-t-30">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
                                <Link to="#" onClick={evt => {  evt.preventDefault(); } } className="btn btn-bg-white waves-effect margin-t-20">Get Started <i className="mdi mdi-arrow-right"></i> </Link>
                            </div>
                        </div>
                    </div>
                </section>

            </React.Fragment >
        );
    }
}

export default GetStart;


