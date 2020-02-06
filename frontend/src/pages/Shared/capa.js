
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
                <section className="section capa p-0">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 d-flex">
                                <div className="my-auto top-40">
                                    <img src="https://avatars3.githubusercontent.com/u/34639603?s=460&v=4" alt="Foto de Perfil" className="img-fluid profile"/>
                                </div>
                                <div className="my-auto info top-40">
                                    <h1>Érick Firmo</h1>
                                    <h2 className="mx-auto">Desenvolvedor Full Stack</h2>
                                    <p className="home-desc mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
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


