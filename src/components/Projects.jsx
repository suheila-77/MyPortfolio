import React, { useState } from 'react';

function Projects() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');

    const handleImageClick = (image) => {
        setSelectedImage(image);
        setIsOpen(true);
    };

    const handleCloseModal = () => {
        setIsOpen(false);
        setSelectedImage('');
    };

    return (
        <div className="p-8 bg-gray-50 text-center">
            <h1 className="text-3xl font-bold text-blue-600 mb-10">My Main Projects</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
                    <img 
                        src="/images/image.png" 
                        alt="Job Hunting App" 
                        className="w-full h-48 object-cover cursor-pointer" 
                        onClick={() => handleImageClick("/images/image.png")}
                    />
                    <div className="p-5">
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">Job Hunting Web Application</h2>
                        <p className="text-gray-600">
                            A comprehensive platform I built to connect job seekers with exciting opportunities across various industries. 
                            With a user-friendly interface, powerful search bar, and advanced filtering options, users can easily find jobs that match their skills. 
                            Visitors can upload resumes, supporting their journey to landing their dream job!
                        </p>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
                    <img 
                        src="\images\eccomerce.jpg" 
                        alt="Project 2" 
                        className="w-full h-48 object-cover cursor-pointer" 
                        onClick={() => handleImageClick("/images/eccomerce.jpg")}
                    />
                    <div className="p-5">
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">Ecomerce website</h2>
                        <p className="text-gray-600">An eCommerce website designed to provide users with a seamless online shopping experience. The platform features a clean, user-friendly interface that allows customers to browse products easily, create wish lists, and manage their shopping carts effortlessly.</p>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
                    <img 
                        src="\images\examcenter.jpg" 
                        alt="Project 3" 
                        className="w-full h-48 object-cover cursor-pointer" 
                        onClick={() => handleImageClick("/images/examcenter.jpg")}
                    />
                    <div className="p-5">
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">Exam Center</h2>
                        <p className="text-gray-600">An Exam Center website designed to streamline the examination process for addministration and educators. The platform features an intuitive interface that allows addministrations to easily register for exams, schedule test dates, and access resources. With functionalities like Admin dashboard and real-time , it ensures a smooth and efficient experience for all stakeholders involved in the examination process.</p>                    

                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-5 rounded-lg">
                        <button 
                            className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
                            onClick={handleCloseModal}
                        >
                            &times;
                        </button>
                        <img src={selectedImage} alt="Full View" className="max-w-full h-auto" />
                    </div>
                </div>
            )}
        </div>
    );
}

export default Projects;
