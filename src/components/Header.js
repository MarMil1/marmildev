import React, { useEffect } from 'react'
import '../styles/header.css'

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
        <nav className="navbar is-transparent is-fixed-top" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="#hero">
                    <img src="" width="112" height="28" alt="logo"/>
                </a>
            
                <button className="navbar-burger" data-target="navMenu" aria-label="menu" aria-expanded="false">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </button>
            </div>

            <div className="navbar-menu is-shadowless has-text-centered" id="navMenu">
                <div className="navbar-end">
                    <div className="navbar-item">
                        <a className="has-text-info" href="#about">
                            About
                        </a>
                    </div>
                    <div className="navbar-item">
                        <a className="has-text-info" href="#projects">
                            Projects
                        </a>
                    </div>
                    <div className="navbar-item">
                        <a className="has-text-info" href="#work">
                            Work
                        </a>
                    </div>
                    <div className="navbar-item">
                        <a className="contact-btn button is-info is-rounded" href="#contact">
                            Contact Me
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    </header>
  )
}
