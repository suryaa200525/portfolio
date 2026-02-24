import Project from "./Project";

import weather_app from "./assets/weather_app.png";

import portfolio from "./assets/portfolio.png";
import ecommerce from "./assets/e commerce.png";
import fitme from "./assets/Fitme.png";

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
            img: portfolio,
            name: "Portfolio",
            description:
                "Personal portfolio built using React, Tailwind CSS.",
            githubLink: "https://github.com/suryaa200525/portfolio",
            liveLink: "https://portfolio-suryaa200525s-projects.vercel.app/projects",
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