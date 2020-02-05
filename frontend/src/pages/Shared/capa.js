
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
                <section className="section bg-web-desc capa">
                    <div className="bg-overlay"></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 text-center">
                                <img src="https://avatars3.githubusercontent.com/u/34639603?s=460&v=4" alt="Foto de Perfil" className="img-fluid profile"/>
                            </div>
                            <div className="col-lg-8 text-center">
                                <h1 className="text-white">Érick Firmo Luques Serrano</h1>
                                <p className="padding-t-15 home-desc mx-auto">Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment >
        );
    }
}

export default Capa;


