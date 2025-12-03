document.addEventListener('DOMContentLoaded', () => {

    // --- INITIALIZE AOS ---
    AOS.init({
        duration: 800,
        offset: 100,
        once: true,
        easing: 'ease-in-out',
    });

    // --- TYPED.JS (Only runs if the element exists on the page) ---
    const typedElement = document.getElementById('typed-text');
    if (typedElement) {
        new Typed('#typed-text', {
            strings: ["Software Developer","Full Stack Developer", "Web Application Developer", "AI Enthusiast", "Data Analyst"],
            typeSpeed: 50,
            backSpeed: 30,
            backDelay: 2000,
            loop: true  
        });
    }
    
    // --- PARTICLES.JS (Only runs if the element exists on the page) ---
    const particlesElement = document.getElementById('particles-js');
    if (particlesElement) {
        particlesJS("particles-js", {
            "particles": {"number": {"value": 60, "density": {"enable": true, "value_area": 800}}, "color": {"value": "#ffffff"}, "shape": {"type": "circle"}, "opacity": {"value": 0.2, "random": false}, "size": {"value": 3, "random": true}, "line_linked": {"enable": true, "distance": 150, "color": "#8B949E", "opacity": 0.2, "width": 1}, "move": {"enable": true, "speed": 1, "direction": "none", "out_mode": "out"}},
            "interactivity": {"detect_on": "canvas", "events": {"onhover": {"enable": true, "mode": "grab"}, "onclick": {"enable": true, "mode": "push"}}},
            "retina_detect": true
        });
    }

    // --- NAVBAR SCROLL EFFECT (Runs on all pages) ---
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // --- MODAL LOGIC (Only runs if the modal exists on the page) ---
    const modal = document.getElementById('projectModal');
    if (modal) {
        const projectData = {
            stockSage: { title: "Stock Sage Navigator", imageSrc: "assets/images/stock-sage-l.png", label: "Tech Stack", details: "Streamlit, Python, scikit-learn, Matplotlib, Seaborn", description: "<ul><li>Developed a web app using Streamlit, Python, and scikit-learn for real-time stock analysis and prediction.</li><li>Integrated live stock data APIs and built predictive ML models to support investor decision-making.</li><li>Visualized trends and model outputs using Matplotlib and Seaborn, enhancing user insights.</li></ul>" },
            audioAssist: { title: "Audio Assist", imageSrc: "assets/images/audio-assist-i.png", label: "Tech Stack", details: "YOLOv3, Python, OpenCV, gTTS", description: "<ul><li>Built an assistive tool using YOLOv3 for real-time object detection and speech synthesis for visually impaired users.</li><li>Used Python, OpenCV, and gTTS to convert object recognition into audible feedback.</li><li>Improved accessibility and navigation through hands-free interaction.</li></ul>" },
            hotel: { title: "Hotel Management System", imageSrc: "assets/images/hotel-management-system.png", label: "Tech Stack", details: "Java", description: "<ul><li>Developed a Java-based application to manage hotel operations like room booking and food ordering.</li><li>Implemented features for task automation, performance tracking, and resource allocation.</li><li>Improved operational efficiency by streamlining hotel workflow management.</li></ul>" },
            electroHub: { title: "Electro Hub", imageSrc: "assets/images/electro-hub.png", label: "Tech Stack", details: "Power BI, Excel, DAX", description: "<ul><li>Built an interactive sales analytics dashboard in Power BI using Excel-based sales data.</li><li>Enabled time-based comparisons (daily, monthly, quarterly, yearly) with dynamic visuals and DAX measures.</li><li>Designed intuitive report layout with slicers, KPIs, and visuals for effective business insights.</li></ul>" },
            recipeBlog : {title: "Recipe Blog", imageSrc: "assets/images/recipe-blog.png", label: "Tech Stack", details: "Python-flask, React.js, MYSQl, Node.js", description:"<ul><li>Developed with a powerful Python Flask backend to handle server-side logic and API requests.</li><li>Features a modern, component-based frontend built with React.js for a seamless user experience.</li><li>Utilizes a MySQL database for efficient and structured storage of recipes, users, and other data.</li><li>Allows users to browse, search, and add new recipes to the collection.</li></ul>"}
        };

        const certificationData = {
            deloitte: { title: "Data Analytics Virtual Job Simulation", imageSrc: "assets/images/deloitte.png", label: "Issued by", details: "Deloitte (on Forage)", description: "<p>Completed a simulated task of advising a client by cleaning, analyzing, and visualizing a large dataset to derive actionable insights and present findings through a dashboard.</p>" },
            udemy: { title: "Complete Data Analyst Bootcamp", imageSrc: "assets/images/data-anlaytics.png", label: "Issued by", details: "Udemy", description: "<p>Earned certification covering in-depth data analytics from foundational to advanced levels over 83 hours of training.</p>" },
            ieeeStock: { title: "Stock Sage Navigator Publication", imageSrc: "assets/images/Stock-sage.png", label: "Published by", details: "IEEE", description: "<p>Published the paper 'Stock Sage Navigator: Guiding Investors Through Market Complexities.'</p>" },
            ieeeAudio: { title: "Audio Assist Publication", imageSrc: "assets/images/audio-assist.png", label: "Published by", details: "IEEE", description: "<p>Published the paper 'Audio Assist: Enabling Object Detection Through Speech For Visually Impaired.'</p>" },
            ieeeEmotion: { title: "Emotion Recognition From Music", imageSrc: "assets/images/ieee-logo.png", label: "Published by", details: "IEEE", description: "<p>Published the paper 'Deep Learning Aided Emotion Recognition From Music.'</p>" }
        };

        const closeBtn = document.querySelector('.close-button');
        const modalImage = document.getElementById('modalImage');
        const modalTitle = document.getElementById('modalTitle');
        const modalLabel = document.getElementById('modalLabel');
        const modalDetails = document.getElementById('modalDetails');
        const modalDescription = document.getElementById('modalDescription');

        function openModal(data) {
            modalImage.src = data.imageSrc;
            modalTitle.textContent = data.title;
            modalLabel.textContent = data.label;
            modalDetails.textContent = data.details;
            modalDescription.innerHTML = data.description;
            modal.style.display = 'flex';
        }

        document.querySelectorAll('.project-card').forEach(card => {
            card.addEventListener('click', () => {
                const projectId = card.dataset.project;
                openModal(projectData[projectId]);
            });
        });

        document.querySelectorAll('.cert-item').forEach(card => {
            card.addEventListener('click', () => {
                const certId = card.dataset.cert;
                openModal(certificationData[certId]);
            });
        });

        const closeModal = () => { modal.style.display = 'none'; }
        closeBtn.addEventListener('click', closeModal);
        window.addEventListener('click', (e) => {
            if (e.target == modal) { closeModal(); }
        });
    }
});