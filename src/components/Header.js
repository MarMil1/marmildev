import React, { useEffect, useState } from 'react'
import '../styles/header.css'
import { Link } from "react-scroll";

export const Header = () => {
    const [click, setClick] = useState(false);
    const isClicked = () => setClick(!click);

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
            id="navbar" 
            className="navbar is-transparent" 
            role="navigation" 
            aria-label="main navigation"
        >
            <div className="navbar-brand">
                <Link
                    className="image logo"
                    to="navbar"
                    spy={true}
                    smooth={true}
                    duration= {500}
                    onClick={isClicked}
                >
                    <svg 
                        className="logo-svg-container" 
                        height="70px" 
                        width="70px" 
                        viewBox="0 0 300 300" 
                        preserveAspectRatio="xMidYMid meet"
                    >
                        <path 
                            className={click ? 'logo-letter-one rotate-one' : 'logo-letter-one'}
                            d="M10 -10 L10 100 c 0,0 0,1 1,0 L120 0 c 0,0 1,1 0,0 L230 100 c 1,0 0,1 0,0 L230 -10" 
                        />
                        <path 
                            className={click ? 'logo-letter-two rotate-two' : 'logo-letter-two'}
                            d="M10 -10 L10 100 c 0,0 0,1 1,0 L120 0 c 0,0 1,1 0,0 L230 100 c 1,0 0,1 0,0 L230 -10" 
                        />
                        <line 
                            className={click ? 'logo-line logo-line-shake' : 'logo-line'}
                            x1="95" 
                            y1="180" 
                            x2="265" 
                            y2="180" 
                        />
                    </svg>
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
                        className="active"
                        to="about"
                        spy={true}
                        smooth={true}
                        duration= {500}
                    >
                        About
                    </Link>
                    </div>
                    <div className="navbar-item">
                        <Link 
                            className="active"
                            to="projects"
                            spy={true}
                            smooth={true}
                            duration= {500}
                        >
                            Projects
                        </Link>
                    </div>
                    <div className="navbar-item">
                        <Link 
                            className="active"
                            to="work"
                            spy={true}
                            smooth={true}
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
                            duration= {500}
                        >
                            Contact
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    </header>
  )
}
