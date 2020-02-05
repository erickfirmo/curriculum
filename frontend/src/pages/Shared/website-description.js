
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class WebsiteDescription extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        
        return (
            <React.Fragment>
                <section className="section bg-web-desc">
                    <div className="bg-overlay"></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h2 className="text-white">Build your dream website today</h2>
                                <p className="padding-t-15 home-desc mx-auto">But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her.</p>
                                <Link to="#" onClick={evt => {  evt.preventDefault(); } } className="btn btn-bg-white margin-t-30 waves-effect waves-light">View Plan & Pricing</Link>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment >
        );
    }
}

export default WebsiteDescription;


