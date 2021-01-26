import React, {Component} from 'react';
import '../main.scss';
import './CarouselInHeader'
import {Link} from 'react-router-dom'


class Nav extends Component {
    render() {
        return (
            <div>
                <div id="main-nav">
                    <div className="container">
                        <nav className="navbar navbar-expand-sm navbar-light pt-3 justify-content-between">
                            <a href="/" className="navbar-brand"><img src="logo-khushe.png" alt="" className=""/></a>

                            <div className="input-group mx-5">
                                <input type="text" placeholder="Nimani qidiramiz..." className="form-control shadow-none"/>
                                <div className="input-group-append">
                                    <button className="btn shadow-none">Izlash</button>
                                </div>
                            </div>

                            <Link to="/login" className="nav-link d-flex align-items-center">
                                <img src="user-icon.png" alt=""/>
                                <p className="mb-0 ml-2">Kirish</p>
                            </Link>
                            <Link to="/buyproducts"  className="nav-link d-flex align-items-center">
                                <img src="bucket.jpg" alt=""/>
                                <p className="mb-0 ml-2">Savat</p>
                            </Link>
                        </nav>
                    </div>
                </div>
            </div>
        );
    }
}

export default Nav;