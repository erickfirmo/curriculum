import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
//Layout css
import '../css/colors/pink.css';


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

class Index4 extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount()
    {
      document.body.classList = "";
      document.getElementById('nav-bar').classList.add('navbar-white');
    }


    render() {

        return (
            <React.Fragment>

                {/*  Header */}
                <Header />

                {/* Home Section */}
        <section className="section bg-home home-half home-registration" id="home">
            <div className="bg-overlay"></div>
            <div className="container">
                <Row className="align-items-center">
                    <Col lg="7" className="text-white text-left">
                        <h4 className="home-small-title">Awesome Design</h4>
                        <h1 className="home-title">We love make things amazing and simple</h1>
                        <p className="padding-t-15 home-desc">Maecenas class semper class semper sollicitudin lectus lorem iaculis imperdiet aliquam vehicula tempor auctor curabitur pede aenean ornare.</p>
                        <Link to="#"  onClick={evt => {  evt.preventDefault(); } } className="btn btn-custom margin-t-30 waves-effect waves-light">Get Started <i className="mdi mdi-arrow-right"></i></Link>
                    </Col>
                    <Col lg="4" className="offset-lg-1 mt-5 mt-lg-0">
                        <div className="home-registration-form bg-white">
                            <h4 className="form-heading text-center mt-2">Get 30 day FREE Trial</h4>
                            <form className="registration-form" id="registration-form">
                                <input type="text" id="exampleInputName1" className="form-control registration-input-box" placeholder="Name" />
                                <input type="email" id="exampleInputEmail1" className="form-control registration-input-box" placeholder="Email" />
                                <textarea className="form-control registration-textarea-box" rows="4" placeholder="Message"></textarea>
                                <button className="btn btn-custom home-btn-width waves-effect waves-light">Send Detail</button>
                            </form>
                        </div>
                    </Col>
                </Row>
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

export default Index4;


