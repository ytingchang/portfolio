const Projects = () => {
    const projects = [
        {
            id: 1,
            title: "SharedSpace",
            description: "A mobile application for roommates.",
            tags: ["Kotlin", "Jetpack Compose", "Firebase"],
            image: "./images/sharedspace-thumbnail.jpg",
            link: "https://drive.google.com/file/d/1uX3aPHPRHha6zAh7RgvQbeXF1imn72wS/view?usp=sharing"
        },
        {
            id: 2,
            title: "Adopt-a-Tree",
            description: "A website for appreciating urban forestry.",
            tags: ["HTML", "CSS", "JS", "React", "Node.js"],
            image: "./images/adoptatree-thumbnail.jpg",
            link: "https://ytingchang.github.io/adopt-a-tree/"
        }
    ];

    return (
        <section id="projects" className="section">
            <div className="container">
                <h2 className="section-title">Selected Works</h2>
                <div className="projects-grid">
                    {projects.map((project) => (
                        <article key={project.id} className="project-card">
                            <div className="project-image">
                                <img src={project.image} alt={project.title} />
                            </div>
                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>
                                <div className="project-tags">
                                    {project.tags.map((tag, index) => (
                                        <span key={index} className="tag">{tag}</span>
                                    ))}
                                </div>
                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">View Project &rarr;</a>
                            </div>
                        </article>
                    ))}
                </div>
                <div style={{ textAlign: 'center', marginTop: 'var(--spacing-md)' }}>
                    <a href="https://github.com/ytingchang" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                        View GitHub Profile
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

export default Projects;
