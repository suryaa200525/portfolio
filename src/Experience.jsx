import photo from './assets/greatify_logo.jpg';

function Experience() {
  return (
    <div className="px-4"> {/* Added padding to the outer container */}
      <h1 className="font-poppins font-bold text-[40px] mt-2 text-center">Experience</h1>
      <div className="w-full max-w-4xl mx-auto my-4 text-black bg-white rounded-xl shadow-md p-6 flex flex-col sm:flex-row sm:items-start gap-4">
        <img 
          src={photo} 
          alt="Internship" 
          className="h-[200px] w-[220px] object-cover rounded-md mx-auto sm:mx-0" 
        />

        <div className="flex flex-col text-center sm:text-left">
          <h1 className="text-2xl sm:text-3xl font-poppins font-bold mt-2">Front-End Developer Internship</h1>
          <h2 className="text-sm sm:text-base mt-1 mb-2 font-medium">
            Company: <span className="font-semibold">Greatify</span> | Duration: <span className="font-semibold">April 2025 – May 2025</span>
          </h2>

          <p className="text-sm sm:text-base leading-relaxed">
            Worked on multiple personal and practice projects to strengthen frontend development skills.
            Learned how a product-based company manages large-scale codebases and follows structured development practices.
            Practiced building responsive web interfaces using HTML, CSS, JavaScript, and React.js.
            Collaborated with mentors and gained insights into clean coding, component-based design, and UI/UX best practices.
            Improved my skills in version control (Git) and followed real-world workflows like code reviews and task tracking.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Experience;