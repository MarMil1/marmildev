import React, { useEffect } from 'react'
import '../styles/header.css'
import { Link } from "react-scroll";

export const Header = () => {
    useEffect(() => {
        // Open/Close responsive navbar   
        const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
        $navbarBurgers.forEach( el => {
            el.addEventListener('click', () => {
                const target = el.dataset.target;
                const $target = document.getElementById(target);
                el.classList.toggle('is-active');
                $target.classList.toggle('is-active');
            });
        });
    }, []);

  return (
    <header>
        <nav 
            className="navbar is-transparent is-fixed-top" 
             role="navigation" 
             aria-label="main navigation"
        >
            <div className="navbar-brand">
                <Link
                    activeClass=""
                    to="hero"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration= {500}
                >
                    <img src="" 
                         width="112" 
                         height="28" 
                         alt="logo"
                    />
                </Link>
            
                <button 
                    className="navbar-burger" 
                    data-target="navMenu" 
                    aria-label="menu" 
                    aria-expanded="false"
                >
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </button>
            </div>

            <div 
                className="navbar-menu is-shadowless has-text-centered" 
                id="navMenu"
            >
                <div className="navbar-end">
                    <div className="navbar-item">
                    <Link
                        activeClass="active"
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration= {500}
                    >
                        About
                    </Link>
                    </div>
                    <div className="navbar-item">
                        <Link 
                            activeClass="active"
                            to="projects"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration= {500}
                        >
                            Projects
                        </Link>
                    </div>
                    <div className="navbar-item">
                        <Link 
                            activeClass="active"
                            to="work"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration= {500}
                        >
                            Work
                        </Link>
                    </div>
                    <div className="navbar-item">
                        <Link 
                            className="contact-btn button is-info is-rounded"
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration= {500}
                        >
                            Contact Me
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    </header>
  )
}
