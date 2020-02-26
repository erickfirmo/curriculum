
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Col, Row } from 'reactstrap';
import img1 from '../../images/blog/img-1.jpg';


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
                 <section className="section" id="about">
            <div className="container">
                    <Row>
                        <Col lg="8" className="offset-lg-2">
                            <h1 className="section-title text-center">Trabalhos Recentes</h1>
                            <div className="section-title-border margin-t-20"></div>
                            <p className="section-subtitle text-muted text-center padding-t-30 font-secondary">Lorem ipsum dolor sit amet cras at niet magnus</p>
                        </Col>
                    </Row>
                <div className="row margin-t-50">
                    <div className="col-lg-4 col-sm-6">
                        <div className="team-box text-center">
                            <div className="team-wrapper">
                                <div className="team-member">
                                    <img alt="" src={img1} className="img-fluid rounded" />
                                </div>
                            </div>
                            <h4 className="team-name">Barbearia Progresso</h4>
                            <p className="text-uppercase team-designation">Barbearia</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6">
                        <div className="team-box text-center">
                            <div className="team-wrapper">
                                <div className="team-member">
                                    <img alt="" src={img1} className="img-fluid rounded" />
                                </div>
                            </div>
                            <h4 className="team-name">DP Chinelos</h4>
                            <p className="text-uppercase team-designation">Ecommerce</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6">
                        <div className="team-box text-center">
                            <div className="team-wrapper">
                                <div className="team-member">
                                    <img alt="" src={img1} className="img-fluid rounded" />
                                </div>
                            </div>
                            <h4 className="team-name">Automação de E-mails Marketing e SMS</h4>
                            <p className="text-uppercase team-designation">Educação Metodista</p>
                        </div>
                    </div>

                </div>
                <div className="row margin-t-50">
                    <div className="col-lg-4 col-sm-6">
                        <div className="team-box text-center">
                            <div className="team-wrapper">
                                <div className="team-member">
                                    <img alt="" src={img1} className="img-fluid rounded" />
                                </div>
                            </div>
                            <h4 className="team-name">Site Google Glass</h4>
                            <p className="text-uppercase team-designation">Curso</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6">
                        <div className="team-box text-center">
                            <div className="team-wrapper">
                                <div className="team-member">
                                    <img alt="" src={img1} className="img-fluid rounded" />
                                </div>
                            </div>
                            <h4 className="team-name">Aircnc</h4>
                            <p className="text-uppercase team-designation">Curso</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6">
                        <div className="team-box text-center">
                            <div className="team-wrapper">
                                <div className="team-member">
                                    <img alt="" src={img1} className="img-fluid rounded" />
                                </div>
                            </div>
                            <h4 className="team-name">Dubank Digital</h4>
                            <p className="text-uppercase team-designation">Freela</p>
                        </div>
                    </div>
                    </div>

                    <div className="row margin-t-50">
                    <div className="col-lg-4 col-sm-6">
                        <div className="team-box text-center">
                            <div className="team-wrapper">
                                <div className="team-member">
                                    <img alt="" src={img1} className="img-fluid rounded" />
                                </div>
                            </div>
                            <h4 className="team-name">Gestão de Condomínios</h4>
                            <p className="text-uppercase team-designation">Sistema</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6">
                        <div className="team-box text-center">
                            <div className="team-wrapper">
                                <div className="team-member">
                                    <img alt="" src={img1} className="img-fluid rounded" />
                                </div>
                            </div>
                            <h4 className="team-name">Spotify Clone</h4>
                            <p className="text-uppercase team-designation">Desafio</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6">
                        <div className="team-box text-center">
                            <div className="team-wrapper">
                                <div className="team-member">
                                    <img alt="" src={img1} className="img-fluid rounded" />
                                </div>
                            </div>
                            <h4 className="team-name">EFPacks PHP</h4>
                            <p className="text-uppercase team-designation">Packages</p>
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


