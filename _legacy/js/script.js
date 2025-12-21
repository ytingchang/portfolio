document.addEventListener('DOMContentLoaded', () => {
    // Project Data
    const projects = [
        {
            title: "Project One",
            description: "A mobile application for managing tasks.",
            tags: ["React Native", "Firebase"],
            image: "https://via.placeholder.com/600x400?text=Project+1",
            link: "#"
        },
        {
            title: "Project Two",
            description: "Personal portfolio website.",
            tags: ["HTML", "CSS", "JS"],
            image: "https://via.placeholder.com/600x400?text=Project+2",
            link: "#"
        },
        {
            title: "Project Three",
            description: "Python automation script.",
            tags: ["Python", "Selenium"],
            image: "https://via.placeholder.com/600x400?text=Project+3",
            link: "#"
        }
    ];

    const projectsGrid = document.getElementById('projects-grid');

    // Render Projects
    if (projectsGrid) {
        projectsGrid.innerHTML = projects.map(project => `
            <article class="project-card">
                <div class="project-image">
                    <img src="${project.image}" alt="${project.title}">
                </div>
                <div class="project-content">
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-description">${project.description}</p>
                    <div class="project-tags">
                        ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                    <a href="${project.link}" class="project-link">View Project &rarr;</a>
                </div>
            </article>
        `).join('');
    }

    // Scroll Header Effect
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Mobile Menu Toggle
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.nav');

    if (mobileBtn && nav) {
        mobileBtn.addEventListener('click', () => {
            nav.classList.toggle('active');
            mobileBtn.classList.toggle('active');
        });
    }

    console.log("Portfolio loaded.");
});
