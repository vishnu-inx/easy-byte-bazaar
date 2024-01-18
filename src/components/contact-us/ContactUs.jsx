
function ContactUs() {
    return (
        <div className="flex items-center justify-center">
            <div className="container mx-auto flex flex-wrap justify-center">
                <div className="w-full md:w-1/2 lg:w-1/3 p-4">
                    <AboutUs />
                </div>
                <div className="w-full md:w-1/2 lg:w-1/3 p-4">
                    <ContactForm />
                </div>
            </div>
        </div>
    )
}

export default ContactUs;

const AboutUs = () => {
    return (
        <div className="bg-white p-8 rounded-lg shadow-md h-full flex flex-col items-center justify-center">
            <h2 className="text-3xl font-semibold mb-4">About Us</h2>
            <img
                src="https://via.placeholder.com/100" // Placeholder logo image URL
                alt="Fake Logo"
                className="mb-4 rounded-full"
            />
            <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </p>
            <p className="text-gray-600 mb-4">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
            </p>
            <p className="text-gray-600 mb-4">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
            </p>
            <p className="text-gray-600 mb-4"></p>
        </div>
    );
};

const ContactForm = () => {
    return (
        <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-semibold mb-6 text-center">Contact Us</h2>
            <form>
                <div className="mb-4">
                    <label className="block text-gray-600 text-sm font-semibold mb-2" htmlFor="name">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Your Name"
                        className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-600 text-sm font-semibold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Your Email"
                        className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-600 text-sm font-semibold mb-2" htmlFor="subject">
                        Subject
                    </label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        placeholder="Subject"
                        className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-600 text-sm font-semibold mb-2" htmlFor="message">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Your Message"
                        rows="4"
                        className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 text-white w-full px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};