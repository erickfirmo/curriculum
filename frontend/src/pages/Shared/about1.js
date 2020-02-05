
import React, { Component } from 'react';

import img1 from '../../images/team/img-1.jpg';
import img2 from '../../images/team/img-2.jpg';
import img3 from '../../images/team/img-3.jpg';
import img4 from '../../images/team/img-4.jpg';

class About1 extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        
        return (
            <React.Fragment>
                 <section className="section" id="about">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <div className="about-title mx-auto text-center">
                            <h2 className="font-weight-light">A Digital web studio creating stunning  &amp; Engaging online Experiences </h2>
                            <p className="text-muted pt-4">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis.</p>
                        </div>
                    </div>
                </div>
                <div className="row margin-t-50">
                    <div className="col-lg-3 col-sm-6">
                        <div className="team-box text-center">
                            <div className="team-wrapper">
                                <div className="team-member">
                                    <img alt="" src={img1} className="img-fluid rounded" />
                                </div>
                            </div>
                            <h4 className="team-name">Frank Johnson</h4>
                            <p className="text-uppercase team-designation">CEO</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6">
                        <div className="team-box text-center">
                            <div className="team-wrapper">
                                <div className="team-member">
                                    <img alt="" src={img2} className="img-fluid rounded" />
                                </div>
                            </div>
                            <h4 className="team-name">Elaine Stclair</h4>
                            <p className="text-uppercase team-designation">Designer</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6">
                        <div className="team-box text-center">
                            <div className="team-wrapper">
                                <div className="team-member">
                                    <img alt="" src={img3} className="img-fluid rounded" />
                                </div>
                            </div>
                            <h4 className="team-name">Wanda Arthur</h4>
                            <p className="text-uppercase team-designation">Developer</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6">
                        <div className="team-box text-center">
                            <div className="team-wrapper">
                                <div className="team-member">
                                    <img alt="" src={img4} className="img-fluid rounded" />
                                </div>
                            </div>
                            <h4 className="team-name">Joshua Stemple</h4>
                            <p className="text-uppercase team-designation">Manager</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
              
            </React.Fragment >
        );
    }
}

export default About1;


