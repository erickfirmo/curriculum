
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
                            <div className="col-12 col-sm-12 col-md-4 col-lg-4 text-center">
                                <img src="https://avatars3.githubusercontent.com/u/34639603?s=460&v=4" alt="Foto de Perfil" className="img-fluid profile top-40"/>
                            </div>
                            <div className="col-12 col-sm-12 col-md-8 col-lg-8 d-flex">
                                <div className="my-auto top-40">
                                    <h1>Érick Firmo</h1>
                                    <p className="home-desc mx-auto">Desenvolvedor Full Stack</p>
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


