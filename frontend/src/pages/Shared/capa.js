
import React, { Component } from 'react';

class Capa extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        
        return (
            <React.Fragment>
                <section className="section capa p-0 mt-5">
                    <div className="bg-overlay"></div>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-sm-12 col-md-4 d-flex justify-content-center">
                                <div className="my-auto">
                                    <img src="https://avatars3.githubusercontent.com/u/34639603?s=460&v=4" alt="Foto de Perfil" className="img-fluid profile"/>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-8 d-flex">
                                <div className="my-auto pt-5">
                                    <h1 className="mb-4">Érick Firmo</h1>
                                    <h2 className="mx-auto">Desenvolvedor Full Stack</h2>
                                    <p className="home-desc mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididu ut labore et dolore magna aliqua.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            </React.Fragment >
        );
    }
}

export default Capa;


