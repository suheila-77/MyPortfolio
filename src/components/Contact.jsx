import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaTwitter } from 'react-icons/fa';

function Contact() {
    return (
        <div className="flex flex-col md:flex-row justify-around mt-10 p-8 bg-gradient-to-br from-blue-50 to-gray-100">
            {/* Contact Information */}
            <div className="md:w-1/3 mb-8 md:mb-0 bg-white p-6 rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <h2 className="text-4xl font-bold mb-4 text-blue-600">Contact Me</h2>
                <div className="space-y-4">
                    <div className="flex items-center bg-blue-100 p-4 rounded-lg shadow-md transition hover:shadow-lg">
                        <FaEnvelope className="text-blue-600 mr-4" size={30} />
                        <span className="text-lg font-medium text-gray-800">zuheilaupdalla7@gmail.com</span>
                    </div>
                    <div className="flex items-center bg-blue-100 p-4 rounded-lg shadow-md transition hover:shadow-lg">
                        <FaPhoneAlt className="text-blue-600 mr-4" size={30} />
                        <span className="text-lg font-medium text-gray-800">+252615557616</span>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mt-6 text-gray-700">Follow Me:</h3>
                        <div className="flex gap-6 mt-4">
                            <a
                                href="https://www.linkedin.com/in/suheila-56b728288"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:text-blue-800 transition-colors"
                            >
                                <FaLinkedin size={30} />
                            </a>
                            <a
                                href="https://twitter.com/Svh4y1a"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:text-blue-800 transition-colors"
                            >
                                <FaTwitter size={30} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Form */}
            <div className="md:w-1/2 bg-white p-8 rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <h2 className="text-4xl font-bold mb-6 text-blue-600">Get in Touch</h2>
                <form className="space-y-6">
                    <div>
                        <label className="block text-lg font-medium text-gray-700" htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            className="w-full mt-2 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                        />
                    </div>
                    <div>
                        <label className="block text-lg font-medium text-gray-700" htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="w-full mt-2 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                        />
                    </div>
                    <div>
                        <label className="block text-lg font-medium text-gray-700" htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="5"
                            required
                            className="w-full mt-2 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 rounded-lg text-lg font-bold hover:bg-blue-700 shadow-md hover:shadow-lg transition duration-200"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Contact;
