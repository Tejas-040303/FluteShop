import React from 'react';

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg" >
            <div className="container">
                <a className="navbar-brand" href="#">LOGO</a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav  ms-auto gap-4">
                        <a className="nav-link" aria-current="page" href="#">Home</a>
                        <a className="nav-link" href="#">About</a>
                        <a className="nav-link" href="#">Shop</a>
                        <a className="nav-link" href="#">Contact</a>
                        <div className="navbar-nav gap-3">
                            <button className="btn btn-primary">Login</button>
                            <button className="btn btn-primary">Signup</button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
