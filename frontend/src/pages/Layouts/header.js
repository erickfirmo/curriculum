import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ScrollspyNav from './Scrollspy';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = { Tab: '', isOpen: false };

        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    /**
     * Sets active tab
     */
    setActiveTab = (tab, e) => {
        this.setState({ Tab: tab });
    }

    render() {

        return (
            <React.Fragment>
                <div id="is-sticky">
                    <nav className="navbar navbar-expand-lg fixed-top navbar-custom sticky" id="nav-bar">
                        <div className="container">
                            <Link className="navbar-brand logo text-uppercase" to="/">
                                Érick Firmo</Link>

                            <button className="navbar-toggler" onClick={this.toggleMenu} type="button">
                                <i className="mdi mdi-menu"></i>
                            </button>
                            <div className={this.state.isOpen ? "collapse navbar-collapse show" : "collapse navbar-collapse"} style={{ display : this.state.isOpen ? "inline-grid" : "" }} id="navbarCollapse">

                                    <ul className={this.state.isOpen ? "navbar-nav navbar-left" : "navbar-nav mx-auto navbar-left"} id="mySidenav">
                                        <li className="nav-item"><a href="#home" className="nav-link">Home</a></li>
                                        <li className="nav-item"><a href="#portfolio" className="nav-link">Portfólio</a></li>
                                        <li className="nav-item"><a href="#habilidades" className="nav-link">Habilidades</a></li>
                                        <li className="nav-item"><a href="#experiencia" className="nav-link">Experiência</a> </li>
                                        <li className="nav-item"><a href="#contact" className="nav-link">Contato</a> </li>
                                    </ul>

                                {/*<div className={this.state.isOpen ? "nav-button" : "nav-button ml-auto"}>
                                    <ul className="nav navbar-nav navbar-left">
                                        <li>
                                            <button type="button" className="btn btn-custom navbar-btn btn-rounded waves-effect waves-light">Try it Free</button>
                                        </li>
                                    </ul>
                                </div>*/}
                            </div>
                        </div>
                    </nav>
                </div>
            </React.Fragment >
        );
    }
}

export default Header;


