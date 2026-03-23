const About = () => {
    return (
        <section id="about" className="section">
            <div className="container">
                <h2 className="section-title">About Me</h2>
                <div className="about-content">
                    <p>Ting is a full-stack software developer with a strong foundation in building intuitive,
                        high-performance applications and a particular interest in user experience design.
                        She is a senior at the University of Wisconsin-Madison majoring in Computer Science
                        with a minor in Data Science.
                        Ting is passionate about developing end-to-end solutions that balance technical rigor with thoughtful,
                        user-centered design, and she is eager to contribute as a software engineer who values
                        both functionality and usability.</p>
                    <br />
                    <a href="https://linkedin.com/in/ytingchang" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                        Connect on LinkedIn
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '8px', verticalAlign: 'middle', display: 'inline-block' }}>
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            <polyline points="15 3 21 3 21 9"></polyline>
                            <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default About;
