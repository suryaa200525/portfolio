function About() {
  return (
    <>
      <h1 className="font-poppins font-bold text-[40px] mt-2 text-center">About Me</h1>

      <div className="max-w-4xl mx-auto mt-6 px-4 sm:px-6 text-center sm:text-left">
        <div className="bg-white text-black shadow-md rounded-xl p-6 sm:p-10">
          <p className="text-lg leading-relaxed">
            Hello! I'm <span className="font-bold text-blue-600">VG Suryaa</span>, a passionate <span className="font-semibold">Frontend Developer</span> and tech enthusiast currently pursuing a B.Tech in Information Technology.
            <br /><br />
            I enjoy building visually appealing, responsive websites using HTML, CSS, JavaScript, and React. I love participating in hackathons and constantly learning about web technologies, UI/UX, and the power of AI.
            <br /><br />
            My goal is to create solutions that are both visually appealing and effective in solving real-world problems. I continuously strive to enhance my coding skills and communication abilities through various projects and challenges. Furthermore, I aim to join a reputable company where I can grow professionally and make meaningful contributions
          </p>

          <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-4 justify-center">
            <a href="./projects">
              <button className="btn bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-all">
                View Projects
              </button>
            </a>
            <a href="https://drive.google.com/file/d/14w_M2ecBKPwLQq5pT5TU468UyaI9EoUh/view?usp=drivesdk" target="_blank" rel="noopener noreferrer">
              <button className="btn border border-blue-600 text-blue-600 px-6 py-2 rounded hover:bg-blue-600 hover:text-white transition-all">
                Download Resume
              </button>
            </a>
          </div>
          
        </div>
      </div>
    </>
  );
}
export default About;
