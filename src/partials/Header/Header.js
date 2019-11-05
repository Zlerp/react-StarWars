import React, {Component} from 'react';
import { Navbar, Nav} from 'react-bootstrap';
import {  Link } from "react-router-dom";
import logo from '../../logo.svg';
import './Header.scss';


class Header extends Component {
    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.closeNavbar = this.closeNavbar.bind(this);
        this.state = {
            collapsed: true
        };
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    closeNavbar() {
        if (this.state.collapsed){
            this.setState({
                collapsed: !this.state.collapsed
            });
        }
    }

    render() {
        return (
            <header>
                <Navbar expand="lg" bg="dark" variant="dark" fixed="top" className="clear-top">
                    <Navbar.Brand>
                        <Link onClick={this.closeNavbar} to="/">
                            <img
                                src={logo}
                                height="30"
                                className="d-inline-block align-top"
                                alt="React Bootstrap logo"
                            />
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle  onClick={this.toggleNavbar} aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto">
                            <Link onClick={this.toggleNavbar} className='nav-link' to='/people'>
                                People
                            </Link>
                            <Link onClick={this.toggleNavbar} className='nav-link' to='/planets'>
                                Planets
                            </Link>
                            <Link onClick={this.toggleNavbar} className='nav-link' to='/starships'>
                                Starships
                            </Link>
                            <Link onClick={this.toggleNavbar} className='nav-link' to='/vehicles'>
                                Vehicles
                            </Link>
                            <Link onClick={this.toggleNavbar} className='nav-link' to='/species'>
                                Species
                            </Link>
                            <Link onClick={this.toggleNavbar} className='nav-link' to='/films'>
                                Films
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

            </header>

        );
    }
}



export default Header;