import html from './assets/html_photo.png'
import css from './assets/css.jpg'
import js from './assets/js_1.png'
import react_photo from './assets/icon-react.png'
import python_photo from './assets/python.png'
import sql from './assets/sql.webp'
import git from './assets/git.jpg'
import github from './assets/github.jpg'
import figma from './assets/figma.png'
import canva from './assets/canva.jpg'


function Skills(){
    return(
      <>
      <h1 className="font-poppins font-bold  text-[40px] mt-2 text-center">Skills</h1>
        <div className='mt-10'>
        
                        
            <div className="max-w-4xl bg-white shadow-lg rounded-2xl mt-4 mx-4 p-4 grid grid-cols-2 sm:grid-cols-5 gap-11 sm:mx-auto sm:mt-6">
                <div className="flex flex-col items-center">
                    <img src={html} alt="HTML" className="h-12 w-12" />
                    <h2 className="text-black mt-2">HTML</h2>
                </div>
                <div className="flex flex-col items-center">
                    <img src={css} alt="CSS" className="h-12 w-12" />
                    <h2 className="text-black mt-2">CSS</h2>
                </div>
                <div className="flex flex-col items-center">
                    <img src={js} alt="JavaScript" className="h-12 w-12" />
                    <h2 className="text-black mt-2">JavaScript</h2>
                </div>
                <div className="flex flex-col items-center">
                    <img src={react_photo} alt="React js" className="h-12 w-12" />
                    <h2 className="text-black mt-2">React js</h2>
                </div>
                <div className="flex flex-col items-center">
                    <img src={python_photo} alt="Python" className="h-12 w-12" />
                    <h2 className="text-black mt-2">Python</h2>
                </div>
                <div className="flex flex-col items-center">
                    <img src={sql} alt="SQL" className="h-12 w-12" />
                    <h2 className="text-black mt-2">SQL</h2>
                </div>
                <div className="flex flex-col items-center">
                    <img src={git} alt="GIT" className="h-12 w-12" />
                    <h2 className="text-black mt-2">GIT</h2>
                </div>
                <div className="flex flex-col items-center">
                    <img src={github} alt="GITHUB" className="h-12 w-12" />
                    <h2 className="text-black mt-2">GITHUB</h2>
                </div>
                <div className="flex flex-col items-center">
                    <img src={figma} alt="Figma" className="h-12 w-12" />
                    <h2 className="text-black mt-2">Figma</h2>
                </div>
                <div className="flex flex-col items-center">
                    <img src={canva} alt="Canva" className="h-12 w-12" />
                    <h2 className="text-black mt-2">Canva</h2>
                </div>
            </div>

     
        </div></>  
        
        

    )

}
export default Skills