
const cards = document.querySelectorAll(".portfolio-card");
const details = document.getElementById("details");
const detailsContent = document.getElementById("detailsContent");
const backButton = document.getElementById("backButton");
const hero = document.querySelector(".hero");
const portfolioSection = document.querySelector(".portfolio-section");

const sections = {
    about: {
        title: "About Me",
        content: `
            <h2>About Me</h2>
            <p>I am an enthusiastic Information Technology student at the University of Sindh, with a strong interest in web development, mobile application development and emerging technologies.</p>
            <p>I enjoy exploring new technologies, building practical projects and continuously improving my technical skills.</p>
            <h2>Career Objective</h2>
            <p>To build a successful career in the Information Technology industry by continuously developing my technical skills in web and mobile application development. I aim to gain practical experience, work on innovative projects, and contribute to a professional organization while growing as a skilled software developer. My long-term goal is to pursue international career opportunities and become a valuable part of the global technology industry.</p>
        `
    },
    education: {
        title: "Education",
        content: `
            <h2>Education</h2>
            <h3>BS Information Technology</h3>
            <p>University of Sindh</p>
            <p>Faculty of Engineering & Technology</p>
            <p>Currently in 6th Semester</p>
            <p>Expected graduation in 2027</p>
        `
    },
    skills: {
        title: "Technical Skills",
        content: `
            <h2>Technical Skills</h2>
            <p>HTML, CSS, Basic JavaScript, Java, Android Studio, VS Code, Canva and Database Fundamentals,Unity/Blender.</p>
        `
    },
    projects: {
        title: "My Projects",
        content: `
            <h2>My Projects</h2>
            <p>My academic and personal development projects will appear here.</p>
            <h2>Project Case Studies</h2>
            <p>Project descriptions, problems, solutions and technologies will appear here.</p>
        `
    },
    experience: {
        title: "Experience",
        content: `
            <h2>Experience & Training</h2>
            <p>My practical learning and training experiences is none yet.</p>
        `
    },
    certifications: {
        title: "Certifications",
        content: `
            <h2>Certifications & Courses</h2>
            <p>I completed courses and certificates at google courses.</p>
        `
    },
    achievements: {
        title: "Achievements",
        content: `
            <h2>Achievements & Awards</h2>
            <p>i am certified lerner by google.</p>
        `
    },
    resume: {
        title: "My Resume",
        content: `
            <h2>My Resume</h2>
            <p>My professional CV will be available here.</p>
        `
    },
    profiles: {
        title: "Professional Profiles",
        content: `
            <h2>Professional Profiles</h2>
            <p>GitHub and LinkedIn profile links will appear here.</p>
        `
    },
    contact: {
        title: "Contact Me",
        content: `
            <h2>Contact Me</h2>
            <p>Email: fakhrunisakhatri@gmail.com</p>
        `
    }
};

cards.forEach(card => {
    card.addEventListener("click", () => {
        const section = sections[card.dataset.section];

        if (!section) return;

        detailsContent.innerHTML = section.content;
        hero.classList.add("hidden");
        portfolioSection.classList.add("hidden");
        details.classList.remove("hidden");

        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});

backButton.addEventListener("click", () => {
    details.classList.add("hidden");
    hero.classList.remove("hidden");
    portfolioSection.classList.remove("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });
});
