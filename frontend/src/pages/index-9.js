import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';

//Layout css
import '../css/colors/yellow.css';

import { Link } from 'react-router-dom';
import Particles from 'react-particles-js';

// Layouts
import Header from './Layouts/header';
import Footer from './Layouts/footer';
import FooterAlt from './Layouts/footer-alt';

// Shared
import Client from './Shared/client';
import About from './Shared/about';
import Services from './Shared/services';
import WebsiteDescription from './Shared/website-description';
import About1 from './Shared/about1';
import Pricing from './Shared/pricing';
import Testimonial from './Shared/testimonial';
import GetStart from './Shared/getstart';
import Blog from './Shared/blog';
import ContactUs from './Shared/contact-us';

// Modal Video 
import ModalVideo from 'react-modal-video';
import '../../node_modules/react-modal-video/scss/modal-video.scss';



class Index9 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
        this.openModal = this.openModal.bind(this)
    }
    openModal() {
        this.setState({ isOpen: true })
    }

    componentDidMount() {
        document.body.classList = "";
        window.addEventListener("scroll", this.scrollNavigation, true);
    }

    scrollNavigation = () => {
        var doc = document.documentElement;
        var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
        if (top > 80) {
            document.getElementById('nav-bar').classList.add('sticky-dark');
            document.getElementById('is-sticky').classList.add('is-sticky');
        }
        else {
            document.getElementById('nav-bar').classList.remove('sticky-dark');
            document.getElementById('is-sticky').classList.remove('is-sticky');
        }
    }

    render() {

        return (
            <React.Fragment>

                {/*  Header */}
                <Header />

                {/* Home Section */}
                <section className="section bg-home height-100vh" id="home">
                    <div className="bg-overlay"></div>
                    <div className="">
                        <div className="">
                            <div className="container slidero">
                                <Row>
                                    <Col lg="8" className="offset-lg-2 text-white text-center">
                                        <h4 className="home-small-title">Awesome Design</h4>
                                        <h1 className="home-title">We love make things amazing and simple</h1>
                                        <p className="padding-t-15 home-desc mx-auto">Maecenas class semper class semper sollicitudin lectus lorem iaculis imperdiet aliquam vehicula tempor auctor curabitur pede aenean ornare.</p>
                                        <p className="play-shadow margin-t-30 margin-l-r-auto">
                                            <Link  to="#" onClick={this.openModal} className="play-btn video-play-icon"><i className="mdi mdi-play text-center"></i></Link>
                                        </p>
                                      </Col>
                                </Row>
                            </div>
                        </div>
                    </div>

                    <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='L61p2uyiMSo' onClose={() => this.setState({ isOpen: false })} />
                     
                    <Particles style={{ position: "absolute" }}
                        params={{
                            "particles": {
                                "number": {
                                    "value": 200
                                },
                                "size": {
                                    "value": 3
                                }

                            },
                            "interactivity": {
                                "events": {
                                    "onhover": {
                                        "enable": true,
                                        "mode": "repulse"
                                    }
                                }
                            }
                        }} />

                </section>

                {/* Client */}
                <Client />

                {/* About */}
                <About />

                {/* Services */}
                <Services />

                {/* Website Description */}
                <WebsiteDescription />

                {/* About Us */}
                <About1 />

                {/* Pricing */}
                <Pricing />

                {/* Testimonial */}
                <Testimonial />

                {/* GetStart */}
                <GetStart />

                {/* Blog */}
                <Blog />

                {/* ContactUs */}
                <ContactUs />

                {/* Footer */}
                <Footer />

                {/* Footer Alt */}
                <FooterAlt />

            </React.Fragment >
        );
    }
}

export default Index9;


