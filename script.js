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
            <p>Expected Graduation: 2027</p>
        `
    },

    skills: {
        title: "Technical Skills",
        content: `
            <h2>Technical Skills</h2>
            <p>HTML, CSS, Basic JavaScript, Java, Android Studio, VS Code, Canva, Graphic Design, Database Fundamentals, Unity and Blender.</p>
        `
    },

    projects: {
        title: "My Projects",
        content: `
            <h2>My Projects & Case Studies</h2>

            <h2>1. Elderly Life Assistant App</h2>
            <p><strong>Project Overview:</strong> An Android mobile application designed to support elderly people in managing their daily routines.</p>
            <p><strong>Problem Statement:</strong> Elderly people may face difficulties remembering medicines and managing everyday activities.</p>
            <p><strong>Objectives:</strong> To develop a simple and user-friendly application that helps elderly users access useful daily assistance features.</p>
            <p><strong>Technologies Used:</strong> Android Studio, Java and XML.</p>
            <p><strong>Key Features:</strong> Splash Screen, Login Screen, Main Activity, Navigation Menu and Add Medicine functionality.</p>
            <p><strong>Development Process:</strong> Designed the application interface using XML and implemented application functionality and navigation using Java in Android Studio.</p>
            <p><strong>My Role:</strong> Academic project development, interface design and implementation.</p>
            <p><strong>Outcome:</strong> Developed an Android application with multiple screens and basic medicine management functionality.</p>

            <hr>

            <h2>2. Tasbeeh Counter App</h2>
            <p><strong>Project Overview:</strong> An Android application developed to help users count their Tasbeeh digitally.</p>
            <p><strong>Problem Statement:</strong> Keeping track of repeated Tasbeeh counts manually can sometimes be inconvenient.</p>
            <p><strong>Objectives:</strong> To create an easy-to-use digital counter with a simple interface and a fixed counting limit.</p>
            <p><strong>Technologies Used:</strong> Android Studio, Java and XML.</p>
            <p><strong>Key Features:</strong> Digital Tasbeeh counter, count display, reset functionality and a maximum counting limit of 33.</p>
            <p><strong>Development Process:</strong> Designed the user interface in XML and implemented the counter logic using Java.</p>
            <p><strong>My Role:</strong> Designed and developed the application as an academic project.</p>
            <p><strong>Outcome:</strong> Created a functional digital counter with a simple black and golden interface.</p>

            <hr>

            <h2>3. Recipe App</h2>
            <p><strong>Project Overview:</strong> An Android application that presents different food and recipe categories in an organized way.</p>
            <p><strong>Problem Statement:</strong> Users may find it inconvenient to browse different food options when they are not organized in one place.</p>
            <p><strong>Objectives:</strong> To develop a simple mobile application that displays food categories through an organized interface.</p>
            <p><strong>Technologies Used:</strong> Android Studio, Java and XML.</p>
            <p><strong>Key Features:</strong> Food categories including Biryani, Pasta, Burger, Pizza, Fries, Sandwich and Noodles.</p>
            <p><strong>Development Process:</strong> Created the application layout using XML and worked with Java to implement the app structure and user interaction.</p>
            <p><strong>My Role:</strong> Academic project development and user interface design.</p>
            <p><strong>Outcome:</strong> Developed a recipe application that organizes multiple food options in a user-friendly layout.</p>
        `
    },

    experience: {
        title: "Experience",
        content: `
            <h2>Experience & Training</h2>
            <p>No formal professional experience yet. Currently building practical skills through academic projects and self-learning.</p>
        `
    },

    certifications: {
        title: "Certifications",
        content: `
            <h2>Certifications & Courses</h2>
            <p>Google courses and online learning.</p>
        `
    },

    achievements: {
        title: "Achievements",
        content: `
            <h2>Achievements & Awards</h2>
            <p>Continuously developing technical skills through academic learning, practical projects and online courses.</p>
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
