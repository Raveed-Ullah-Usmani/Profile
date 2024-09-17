const hamburgerMenu = document.querySelector(".hamburger-menu");
const nav = document.querySelector(".nav");

hamburgerMenu.addEventListener("click", () => {
    nav.classList.toggle("active")
});

document.addEventListener('DOMContentLoaded', () => {
    // Home section
    document.getElementById('home-name').textContent = 'Raveed Ullah Usmani';
    document.getElementById('home-role').textContent = 'Computer Undergraduate | Hobbyist Game Developer';
    document.getElementById('home-intro').textContent = 'I would love to connect 😄';
    document.getElementById('github-link').href = 'https://github.com/Raveed-Ullah-Usmani/';
    document.getElementById('linkedin-link').href = 'https://pk.linkedin.com/in/raveed-ullah-usmani-394106247';
    document.getElementById('email-link').href = 'mailto:raveedusmani@gmail.com';
    document.getElementById('resume-link').href = 'Raveed_Ullah_Usmani_resume.pdf';

    // About section
    document.getElementById('about-image').src = 'Profile.png';
    document.getElementById('about-text1').textContent = 'I am a final-year Computer Science student at Information Technology University, with a deep passion for game development and VR experiences, which I actively pursue as a hobby.';
    document.getElementById('about-text2').textContent = 'My academic interests extend to Machine Learning, Deep Learning, Algorithms, LLMs, and Speech Processing and the list is still growing.';

    // Skills section
    const skills = [
        { icon: 'fab fa-unity', name: 'Unity', proficiency: '80%' },
        { icon: 'fab fa-android', name: 'Flutter', proficiency: '70%' },
        { icon: 'fab fa-html5', name: 'HTML/CSS', proficiency: '90%' },
        { icon: 'fab fa-node-js', name: 'Node.js', proficiency: '75%' },
        { icon: 'fas fa-database', name: 'MongoDB', proficiency: '65%' },
        { icon: 'fab fa-python', name: 'Python', proficiency: '85%' }
    ];

    const skillsContent = document.getElementById('skills-content');
    skills.forEach(skill => {
        const skillItem = document.createElement('div');
        skillItem.className = 'skill-item';
        skillItem.innerHTML = `
            <i class="${skill.icon}"></i>
            <h3>${skill.name}</h3>
            <div class="proficiency-bar">
                <div class="proficiency-bg"></div>
                <div class="proficiency-fill" style="width: ${skill.proficiency};"></div>
            </div>
        `;
        skillsContent.appendChild(skillItem);
    });

    // Experience section
    const experiences = [
        {
            title: 'Teaching Assistant',
            location: 'Information Technology University | August 2023 - Present',
            description: 'Assisted in creating quizzes, homework assignments, and exams. Conducted lectures to explain solutions for quizzes. Graded quizzes, assignments, class activities, and exams. Managed student scores and attendance records. Provided support to students, resolving issues through in-person sessions.'
        },
        {
            title: 'Game Development Intern',
            location: 'Mindstorm Studios | June 2023 - August 2023',
            description: 'Focused on mastering game design principles, UI design, and dynamic feedback techniques to create engaging user experiences. Acquired proficiency in Unity and gained hands-on experience in asset creation using Blender. Participated in Rookie Game Jam 2023, where I successfully submitted a game that demonstrated my creativity and practical skills in game development.'
        }
    ];

    const experienceContent = document.getElementById('experience-content');
    experiences.forEach(exp => {
        const expItem = document.createElement('div');
        expItem.className = 'experience-item';
        expItem.innerHTML = `
            <div class="experience-info">
                <h2>${exp.title}</h2>
                <p class="location">${exp.location}</p>
                <p class="description">${exp.description}</p>
            </div>
            <div class="vertical-line"></div>
        `;
        experienceContent.appendChild(expItem);
    });

    // Projects section
    const projects = [
        {
            title: 'Immerse & Chill',
            type: 'Course',
            place: 'Theory and Application of Virtual Reality',
            description: 'Developed a virtual cinema experience using Unity and the Google Cardboard SDK. Implemented video synchronization and player interactions with Netcode for GameObjects and managed networking protocols with Unity Relay.',
            link: 'https://github.com/Raveed-Ullah-Usmani'
        },
        {
            title: 'Balloon Escape',
            type: 'Event',
            place: 'Rookie Game Jam 2024',
            description: 'A Unity-based game created for the Rookie Game Jam 2024. It won the Ridiculously Simple Game Award for its engaging and intuitive mechanics.',
            link: 'https://github.com/Raveed-Ullah-Usmani'
        },
        {
            title: 'Food Street Rush',
            type: 'Event',
            place: 'Rookie Game Jam 2024',
            description: 'Developed for the Rookie Game Jam 2024, this Unity game offers a vibrant and fast-paced food-themed experience.',
            link: 'https://github.com/Raveed-Ullah-Usmani'
        },
        {
            title: 'Connect',
            type: 'Course',
            place: 'Database Course Project',
            description: 'A social media app developed using Flutter and Firebase. It features real-time communication and data management, showcasing skills in mobile app development and cloud-based databases.',
            link: 'https://github.com/Raveed-Ullah-Usmani'
        }
    ];
    

    const projectsContent = document.getElementById('projects-content');
    projects.forEach(project => {
        const projectItem = document.createElement('div');
        projectItem.className = 'project-item';
        projectItem.innerHTML = `
            <h2>${project.title}</h2>
            <p><strong>${project.type}:</strong> ${project.place}</p>
            <p>${project.description}</p>
            <a href="${project.link}" target="_blank" class="github-btn" style="width:100px">View Project</a>
        `;
        projectsContent.appendChild(projectItem);
    });

    // Contact section
    document.getElementById('contact-github-link').href = 'https://github.com/Raveed-Ullah-Usmani/';
    document.getElementById('contact-linkedin-link').href = 'https://pk.linkedin.com/in/raveed-ullah-usmani-394106247';
    document.getElementById('contact-email-link').href = 'mailto:raveedusmani@gmail.com';
});
