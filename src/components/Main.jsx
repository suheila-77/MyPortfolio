import Header from "./Header";
import { FaGithub, FaInstagram, FaWhatsapp } from 'react-icons/fa'; 
import Skills from "./Skills";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
import Footer from "./Footer";

function Main() {
    return (
        <div className="bg-gradient-to-b from-gray-50 to-gray-200 min-h-screen">
            <Header />
            <div className="flex flex-col md:flex-row justify-around items-center mt-12 p-8">
             
                <div className="text-center md:text-left md:mt-16 max-w-md">
                    <p className="text-2xl text-gray-800 font-semibold">Hi,</p>
                    <p className="text-2xl text-gray-800 font-semibold">My name's Suheila</p>
                    <h1 className="text-4xl font-extrabold mt-3 text-blue-600">I'm</h1>
                    <p className="text-lg mt-4 text-gray-700">
                        a junior full-stack web developer with a passion for creating visually stunning and user-friendly websites.
                    </p>
                    <a href="MyCv.pdf" download>
                        <button className="mt-6 bg-blue-600 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105">
                            Download CV
                        </button>
                    </a>
                    <div className="mt-8 flex justify-center md:justify-start gap-6">
                        <a href="https://github.com/Suheila-77" target="_blank" rel="noopener noreferrer">
                            <FaGithub size={36} className="text-gray-700 hover:text-blue-600 transition-transform transform hover:scale-110" />
                        </a>
                        <a href="https://www.instagram.com/_dhool_" target="_blank" rel="noopener noreferrer">
                            <FaInstagram size={36} className="text-gray-700 hover:text-pink-600 transition-transform transform hover:scale-110" />
                        </a>
                        <a href="https://wa.me/252615557616" target="_blank" rel="noopener noreferrer">
                            <FaWhatsapp size={36} className="text-gray-700 hover:text-green-600 transition-transform transform hover:scale-110" />
                        </a>
                    </div>
                </div>

            
                <div className="flex justify-center mt-6 md:mt-0">
                    <img 
                        src="/images/mypic.jpg" 
                        alt="Your Name"
                        className="rounded-full shadow-xl w-80 h-auto md:w-96 border-4 border-blue-400 transform hover:scale-105 transition-transform duration-300"
                    />
                </div>
            </div>

            <div className="mt-16 space-y-16">
                <About />
                <Projects />
                <Skills />
                <Contact />
                <Footer />
            </div>
        </div>
    );
}

export default Main;
