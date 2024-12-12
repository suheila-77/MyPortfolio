import { FaLaptopCode, FaDatabase, FaProjectDiagram, FaRocket, FaLightbulb, FaHandshake } from 'react-icons/fa';

function About() {
    return (
        <div className="mt-28 flex justify-center px-4">
            <div className="bg-gradient-to-br from-blue-50 via-white to-blue-100 p-10 rounded-2xl shadow-2xl max-w-[900px] text-center transition-transform transform hover:scale-105 duration-300">
                <h2 className="text-5xl font-extrabold text-blue-700 mb-6">
                    About Me
                </h2>
                <p className="text-lg mt-6 text-gray-700 leading-relaxed border-l-4 border-blue-500 pl-4">
                    <span className="font-semibold text-blue-600">
                        As a dedicated and passionate student
                    </span>{' '}
                    at Jamhuria University, majoring in Information Technology, I bring a robust skill set that merges technical proficiency with exceptional leadership and project management capabilities.
                </p>
                <p className="text-lg mt-4 text-gray-700 leading-relaxed">
                    My journey in IT has equipped me with hands-on experience in web development, where I specialize in crafting visually appealing and user-friendly websites using modern technologies such as HTML, CSS, JavaScript, React, and Tailwind CSS. I have a sharp eye for design and always aim to create interfaces that not only look amazing but also offer seamless user experiences.
                </p>
                <p className="text-lg mt-4 text-gray-700 leading-relaxed">
                    Additionally, my expertise in database administration ensures efficient and secure data management, utilizing platforms like SQL, MongoDB, and MySQL. I excel at organizing and analyzing data to provide meaningful insights that drive informed decisions.
                </p>
                <p className="text-lg mt-4 text-gray-700 leading-relaxed">
                    I have a natural inclination for problem-solving and innovation. Whether it’s debugging a complex issue or creating a new application, I thrive on challenges that require critical thinking and creative solutions.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                    {/* Web Development */}
                    <div className="flex items-center gap-4 bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
                        <FaLaptopCode size={36} className="text-blue-600" />
                        <div className="text-left">
                            <h3 className="text-xl font-bold text-gray-800">
                                Web Development
                            </h3>
                            <p className="text-sm text-gray-600">
                                Crafting visually stunning and functional websites with a focus on user experience and performance.
                            </p>
                        </div>
                    </div>
                    {/* Database Administration */}
                    <div className="flex items-center gap-4 bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
                        <FaDatabase size={36} className="text-blue-600" />
                        <div className="text-left">
                            <h3 className="text-xl font-bold text-gray-800">
                                Database Administration
                            </h3>
                            <p className="text-sm text-gray-600">
                                Designing efficient, secure, and scalable database solutions using platforms like MongoDB and MySQL.
                            </p>
                        </div>
                    </div>
                    {/* Leadership and Project Management */}
                    <div className="flex items-center gap-4 bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
                        <FaProjectDiagram size={36} className="text-blue-600" />
                        <div className="text-left">
                            <h3 className="text-xl font-bold text-gray-800">
                                Leadership & Management
                            </h3>
                            <p className="text-sm text-gray-600">
                                Leading projects with confidence, ensuring timely delivery and effective teamwork.
                            </p>
                        </div>
                    </div>
                    {/* Passion for Innovation */}
                    <div className="flex items-center gap-4 bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
                        <FaLightbulb size={36} className="text-blue-600" />
                        <div className="text-left">
                            <h3 className="text-xl font-bold text-gray-800">
                                Innovation & Creativity
                            </h3>
                            <p className="text-sm text-gray-600">
                                Thriving on solving complex problems and building creative solutions that make a real impact.
                            </p>
                        </div>
                    </div>
                    {/* Collaboration */}
                    <div className="flex items-center gap-4 bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
                        <FaHandshake size={36} className="text-blue-600" />
                        <div className="text-left">
                            <h3 className="text-xl font-bold text-gray-800">
                                Team Collaboration
                            </h3>
                            <p className="text-sm text-gray-600">
                                Enjoy working with like-minded individuals, sharing knowledge, and fostering a collaborative environment.
                            </p>
                        </div>
                    </div>
                    {/* Passion for Learning */}
                    <div className="flex items-center gap-4 bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
                        <FaRocket size={36} className="text-blue-600" />
                        <div className="text-left">
                            <h3 className="text-xl font-bold text-gray-800">
                                Lifelong Learning
                            </h3>
                            <p className="text-sm text-gray-600">
                                Constantly exploring new programming languages, tools, and trends to stay ahead in the tech world.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
