import Project from "./Project";

import weather_app from "./assets/weather_app.png";

import smartplace from "./assets/smartplace.png";
import ecommerce from "./assets/e commerce.png";
import fitme from "./assets/fitme.png";

function ProjectList() {
    const projects = [
        {
            img: weather_app,
            name: "Weather App",
            description:
                "Responsive weather app that fetches real-time weather data using OpenWeatherMap API. Built with React.",
            githubLink: "https://github.com/suryaa200525/Weather-App",
            liveLink: "https://weatherfully.vercel.app/",
        },
        {
            img: fitme,
            name: "FitMe",
            description:
                "Fitness web app providing BMI calculation, maintenance calories, workout suggestions, and trainer booking.(On Going Project)",
            githubLink: "https://github.com/suryaa200525",
            

            
        },
        {
            img: smartplace,
            name: "Smart Place",
            description:
                "SmartPlace is an AI-powered campus placement platform designed to streamline the recruitment process for students, recruiters, and placement coordinators. It features intelligent resume matching, job approval workflows, application verification, and real-time tracking, ensuring efficient candidate shortlisting and transparent recruitment management. By automating key placement activities and providing analytics-driven insights, SmartPlace enhances opportunities for students while simplifying recruitment operations for organizations and placement teams.",
            githubLink: "https://github.com/suryaa200525/SMARTPLACE/tree/main/smartplace%20ai_modified",
           
        },
        {
            img: ecommerce,
            name: "E-Commerce",
            description:
                "Frontend e-commerce website with add-to-cart functionality and API-based product listing.",
            githubLink: "https://github.com/suryaa200525/e-commerce",
            liveLink: "https://e-commerce-landing-page-mu-liard.vercel.app/",
        },
    ];

    return (
        <section id="projects" className="w-full">
            <h1 className="font-bold text-[40px] text-center mt-6">
                Projects
            </h1>

            {projects.map((project, index) => (
                <Project
                    key={index}
                    img={project.img}
                    name={project.name}
                    description={project.description}
                    githubLink={project.githubLink}
                    liveLink={project.liveLink}
                />
            ))}
        </section>
    );
}

export default ProjectList;