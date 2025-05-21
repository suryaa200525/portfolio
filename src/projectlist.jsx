import html from './assets/html_photo.png'
import css from './assets/css.jpg'
import js from './assets/js_1.png'
import react_photo from './assets/icon-react.png'
import Project from "./Project"
import fitme from './assets/new logo'

function Projectlist() {
    const projectlist = [
        {
            img: fitme,
            projectname: "Fitme",
            projectdescription: "I have Developed a web application  that provides personalized dietary recommendations based on user’s Height, Weight, and BMI,Maintenance calorie. Integrated features allowing users to view their personal details, access trainer profiles, and book trainers for customized fitness guidance and It suggest the basics workouts i have used html,css,js for developing and figma for designing"
        },
        {
            img: css,
            projectname: "E commerce ",
            projectdescription: "I have Developed a front-end E-commerce web application it fetches data form the api and display it on website and i have integrated many features like add to cart feature and I have used Html,css,js for developing and figma for designing "
        },
        {
            img: css,
            projectname: "Portfolio ",
            projectdescription: "I have Developed a portfolio for Me and i have used   Html,Css,Js,React js,Tailwind css for developing and Figma for designing "
        },
        {
            img: css,
            projectname: "GPA and CGPA calculator ",
            projectdescription: " I have Developed a Web application for calculating GPA and CGPA Where user want to enter their subjects and credits based on user data gpa and cgpa is calculated "
        }
    ];

    const list = projectlist.map((project, index) => (
        <Project
            key={index}
            img={project.img}
            name={project.projectname}
            description={project.projectdescription}
        />
    ));

    return (
        <>
         <h1 className="font-poppins font-bold  text-[40px] mt-2 text-center">Projects</h1>

         <div>
            {list}
        </div>
        </>
       
    );
}

export default Projectlist;
