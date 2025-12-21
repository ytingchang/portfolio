import { useState, useEffect } from 'react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <a href="#" className="logo">TC.</a>
                <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
                    <ul className="nav-list">
                        <li><a href="#hero" className="nav-link" onClick={() => setIsMenuOpen(false)}>Home</a></li>
                        <li><a href="#projects" className="nav-link" onClick={() => setIsMenuOpen(false)}>Projects</a></li>
                        <li><a href="#about" className="nav-link" onClick={() => setIsMenuOpen(false)}>About</a></li>
                        <li><a href="#contact" className="nav-link" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
                    </ul>
                </nav>
                <button className="theme-toggle" aria-label="Toggle theme">
                    <span className="icon">☀</span>
                </button>
                <button
                    className={`mobile-menu-btn ${isMenuOpen ? 'active' : ''}`}
                    aria-label="Menu"
                    onClick={toggleMenu}
                >
                    <span></span>
                    <span></span>
                </button>
            </div>
        </header>
    );
};

export default Header;
