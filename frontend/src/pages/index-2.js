import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//Layout css
import '../css/colors/red.css';

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
import ModalVideo from 'react-modal-video'
import '../../node_modules/react-modal-video/scss/modal-video.scss';

import Wave1Img from '../images/wave-shape/wave1.png';
import Wave2Img from '../images/wave-shape/wave2.png';
import Wave3Img from '../images/wave-shape/wave3.png';
// import Waves from './waves';

class Index2 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
        this.openModal = this.openModal.bind(this)
    }
    openModal () {
        this.setState({isOpen: true})
      }

    componentDidMount() {
      document.body.classList = "";
      window.addEventListener("scroll", this.scrollNavigation, true);
    //   Waves.init();
    }

    scrollNavigation = () => {
        var doc = document.documentElement;
        var top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
        if(top > 80)
        {
             document.getElementById('nav-bar').classList.add('sticky-dark');
             document.getElementById('is-sticky').classList.add('is-sticky');
        }
        else
        {
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
                <section className="section bg-home home-half" id="home" >
                    <div className="bg-overlay"></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2 text-white text-center">
                                <h4 className="home-small-title">Awesome Design</h4>
                                <h1 className="home-title">We love make things amazing and simple</h1>
                                <p className="padding-t-15 home-desc mx-auto">Maecenas class semper class semper sollicitudin lectus lorem iaculis imperdiet aliquam vehicula tempor auctor curabitur pede aenean ornare.</p>
                                <p className="play-shadow margin-l-r-auto mb-4">
                                <Link to="#" onClick={this.openModal} className="play-btn video-play-icon"><i className="mdi mdi-play text-center"></i></Link>
                                </p>
                                <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='L61p2uyiMSo' onClose={() => this.setState({isOpen: false})} />
                            </div>
                        </div>
                    </div>

                   <div className="wave-effect wave-anim">
                        <div className="waves-shape shape-one">
                            <div className="wave wave-one" style={{ backgroundImage : `url(${Wave1Img})` }}></div>
                        </div>
                        <div className="waves-shape shape-two">
                            <div className="wave wave-two" style={{ backgroundImage : `url(${Wave2Img})` }}></div>
                        </div>
                        <div className="waves-shape shape-three">
                            <div className="wave wave-three" style={{ backgroundImage : `url(${Wave3Img})` }}></div>
                        </div>
                    </div>

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

export default Index2;


