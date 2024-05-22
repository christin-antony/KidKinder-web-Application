import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Navbar = () => {
    const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 992);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    useEffect(() => {
        function handleResize() {
            setIsWideScreen(window.innerWidth > 992);
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    function handleMouseOver() {
        if (isWideScreen) {
            setIsDropdownOpen(true);
        }
    }

    function handleMouseOut() {
        if (isWideScreen) {
            setIsDropdownOpen(false);
        }
    }

    return (
        <div>
            <div className="container-fluid bg-light position-relative shadow">
                <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0 px-lg-5">
                    <a
                        href=""
                        className="navbar-brand font-weight-bold text-secondary"
                        style={{ fontSize: 50 }}
                    >
                        <i className="flaticon-043-teddy-bear" />
                        <span className="text-primary">KidKinder</span>
                    </a>
                    <button
                        type="button"
                        className="navbar-toggler"
                        data-toggle="collapse"
                        data-target="#navbarCollapse"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div
                        className="collapse navbar-collapse justify-content-between"
                        id="navbarCollapse"
                    >
                        <div className="navbar-nav font-weight-bold mx-auto py-0">
                            <a href="/" className="nav-item nav-link">
                                Home
                            </a>
                            <a href="/about" className="nav-item nav-link">
                                About
                            </a>
                            <a href="/class" className="nav-item nav-link">
                                Classes
                            </a>
                            <a href="/teacher" className="nav-item nav-link">
                                Teachers
                            </a>
                            <a href="/gallery" className="nav-item nav-link">
                                Gallery
                            </a>
                            <div 
                                className="nav-item dropdown"
                                onMouseOver={handleMouseOver}
                                onMouseOut={handleMouseOut}
                                onFocus={() => setIsDropdownOpen(true)}
                                onBlur={() => setIsDropdownOpen(false)}
                            >
                                <a
                                    href="/pages"
                                    className="nav-link dropdown-toggle"
                                    id="navbarDropdown"
                                    role="button"
                                    aria-haspopup="true"
                                    aria-expanded={isDropdownOpen ? 'true' : 'false'}
                                >
                                    Pages
                                </a>
                                <div className={`dropdown-menu${isDropdownOpen ? ' show' : ''}`} aria-labelledby="navbarDropdown">
                                    <a href="/blog" className="dropdown-item">
                                        Blog Grid
                                    </a>
                                    <a href="/detail" className="dropdown-item">
                                        Blog Detail
                                    </a>
                                </div>
                            </div>
                            <a href="/contact" className="nav-item nav-link">
                                Contact
                            </a>
                        </div>
                        <a href="/login" className="btn btn-primary px-4">
                            Login
                        </a>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;
