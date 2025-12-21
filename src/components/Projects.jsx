const Projects = () => {
    const projects = [
        {
            id: 1,
            title: "Project One",
            description: "A mobile application for managing tasks.",
            tags: ["React Native", "Firebase"],
            image: "https://via.placeholder.com/600x400?text=Project+1",
            link: "#"
        },
        {
            id: 2,
            title: "Project Two",
            description: "Personal portfolio website.",
            tags: ["HTML", "CSS", "JS"],
            image: "https://via.placeholder.com/600x400?text=Project+2",
            link: "#"
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
                                <a href={project.link} className="project-link">View Project &rarr;</a>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
