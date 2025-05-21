import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full px-4 py-3 bg-black text-white relative">

      <div className="flex justify-between items-center flex-wrap sm:flex-nowrap">
        <h1 className="font-bold text-3xl">Suryaa.V.G</h1>

       
        <ul className="hidden sm:flex items-center gap-4">
          <li><Link to="/"><button className="btn">Home</button></Link></li>
          <li><Link to="/about"><button className="btn">About</button></Link></li>
          <li><Link to="/skills"><button className="btn">Skills</button></Link></li>
          <li><Link to="/projects"><button className="btn">Projects</button></Link></li>
          <li><Link to="/experience"><button className="btn">Experience</button></Link></li>
          <li><Link to="/contact"><button className="btn">Contact</button></Link></li>
        </ul>

        <button
          className="sm:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <i className="fa-solid fa-bars"></i>
        </button>

        {/* Social Icon */}
        <div className="hidden lg:block">
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin text-white text-2xl hover:text-blue-500 transition-colors" />
          </a>
        </div>
      </div>

 
      <div
       className={`sm:hidden fixed top-[64px] right-0 w-3/4 max-w-xs bg-white text-white shadow-lg transition-all duration-300 z-50 ${
    menuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0 pointer-events-none"
  }`}
      >
        <ul className="flex flex-col gap-2 p-4">
          <li><Link to="/"><button className="btn w-full text-left" onClick={() => setMenuOpen(false)}>Home</button></Link></li>
          <li><Link to="/about"><button className="btn w-full text-left" onClick={() => setMenuOpen(false)}>About</button></Link></li>
          <li><Link to="/skills"><button className="btn w-full text-left" onClick={() => setMenuOpen(false)}>Skills</button></Link></li>
          <li><Link to="/projects"><button className="btn w-full text-left" onClick={() => setMenuOpen(false)}>Projects</button></Link></li>
          <li><Link to="/experience"><button className="btn w-full text-left" onClick={() => setMenuOpen(false)}>Experience</button></Link></li>
          <li><Link to="/contact"><button className="btn w-full text-left" onClick={() => setMenuOpen(false)}>Contact</button></Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar
