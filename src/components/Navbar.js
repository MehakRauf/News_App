import React from 'react'
import './Navbar.css';

const Navbar = ({ setCategory }) => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid ">
                <div className="navbar-brand">
                    RapidNews
                </div>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <div className="nav-item-margin" onClick={() => setCategory("business")}>
                                Business
                            </div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-item-margin" onClick={() => setCategory("technology")}>
                                Technology
                            </div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-item-margin" onClick={() => setCategory("sports")}>
                                Sports
                            </div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-item-margin" onClick={() => setCategory("science")}>
                                Science
                            </div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-item-margin" onClick={() => setCategory("nation")}>
                                Nation
                            </div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-item-margin" onClick={() => setCategory("world")}>
                                World
                            </div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-item-margin" onClick={() => setCategory("health")}>
                                Health
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
