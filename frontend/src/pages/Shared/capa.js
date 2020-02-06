
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
                    <div className="bg-overlay"></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-4 col-lg-4 text-center">
                                <img src="https://avatars3.githubusercontent.com/u/34639603?s=460&v=4" alt="Foto de Perfil" className="img-fluid profile"/>
                            </div>
                            <div className="col-12 col-sm-12 col-md-8 col-lg-8 text-center d-flex">
                                <div className="m-auto">
                                    <h1 className="text-white">Érick Firmo</h1>
                                    <p className="padding-t-15 home-desc mx-auto">Desenvolvedor Full Stack</p>
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


