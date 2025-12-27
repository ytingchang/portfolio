const Design = () => {
    return (
        <section id="design" className="section">
            <div className="container">
                <h2 className="section-title">Design Work</h2>
                <div className="about-content">
                    <p>In addition to software engineering, I am passionate about UI/UX and visual design.
                        I believe that great software starts with great design!</p>
                    <br />
                    <a href="https://sites.google.com/view/ytingchang/home" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                        View Design Portfolio
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

export default Design;
