import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiTailwindcss, SiExpress, SiMongodb } from 'react-icons/si';

function Skills() {
    return (
        <div className="mt-10 flex flex-col items-center">
            <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">My Technical Skills</h1>
            <div className="flex flex-col md:flex-row justify-center gap-8">
                {/* Frontend Skills */}
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-6 rounded-lg shadow-xl md:w-[500px] h-auto transition-transform transform hover:scale-105">
                    <h2 className="text-3xl font-bold mb-6 text-white text-center">Frontend Skills</h2>
                    <div className="flex flex-wrap gap-6 justify-center">
                        <SkillItem icon={<FaHtml5 />} name="HTML" bgColor="bg-red-500" />
                        <SkillItem icon={<FaCss3Alt />} name="CSS" bgColor="bg-blue-600" />
                        <SkillItem icon={<FaJs />} name="JavaScript" bgColor="bg-yellow-400" />
                        <SkillItem icon={<SiTailwindcss />} name="Tailwind CSS" bgColor="bg-cyan-400" />
                        <SkillItem icon={<FaReact />} name="ReactJS" bgColor="bg-blue-500" />
                    </div>
                </div>

                {/* Backend Skills */}
                <div className="bg-gradient-to-r from-green-500 to-teal-500 p-6 rounded-lg shadow-xl md:w-[500px] h-auto transition-transform transform hover:scale-105">
                    <h2 className="text-3xl font-bold mb-6 text-white text-center">Backend Skills</h2>
                    <div className="flex flex-wrap gap-6 justify-center">
                        <SkillItem icon={<FaNodeJs />} name="Node.js" bgColor="bg-green-600" />
                        <SkillItem icon={<SiExpress />} name="Express" bgColor="bg-gray-600" />
                        <SkillItem icon={<SiMongodb />} name="MongoDB" bgColor="bg-green-700" />
                    </div>
                </div>
            </div>
        </div>
    );
}

const SkillItem = ({ icon, name, bgColor }) => {
    return (
        <div className="flex flex-col items-center justify-center p-4 w-28 h-28 rounded-full shadow-lg transition-transform transform hover:scale-110 bg-white">
            <div className={`text-4xl ${bgColor} text-white p-3 rounded-full`}>{icon}</div>
            <span className="mt-3 font-semibold text-gray-800 text-center">{name}</span>
        </div>
    );
};

export default Skills;
