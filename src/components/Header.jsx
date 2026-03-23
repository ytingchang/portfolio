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

    // Theme Logic
    const [theme, setTheme] = useState('dark'); // Default to dark theme

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'dark';
        setTheme(savedTheme);
        document.documentElement.setAttribute('data-theme', savedTheme);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    };

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <a href="#" className="logo">TC.</a>
                <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
                    <ul className="nav-list">
                        <li><a href="#hero" className="nav-link" onClick={() => setIsMenuOpen(false)}>Home</a></li>
                        <li><a href="#projects" className="nav-link" onClick={() => setIsMenuOpen(false)}>Projects</a></li>
                        <li><a href="#design" className="nav-link" onClick={() => setIsMenuOpen(false)}>Design</a></li>
                        <li><a href="#about" className="nav-link" onClick={() => setIsMenuOpen(false)}>About</a></li>
                        <li><a href="#contact" className="nav-link" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
                    </ul>
                </nav>
                <button className="theme-toggle" aria-label="Toggle theme" onClick={toggleTheme}>
                    <span className="icon">{theme === 'light' ? '⏾' : '☀'}</span>
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
