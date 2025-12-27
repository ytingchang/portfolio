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
        },
        // {
        //     id: 3,
        //     title: "Project Three",
        //     description: "Python automation script.",
        //     tags: ["Python", "Selenium"],
        //     image: "https://via.placeholder.com/600x400?text=Project+3",
        //     link: "#"
        // }
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
            </div>
        </section>
    );
};

export default Projects;
