
function ContactUs() {
    return (
        <>
            <h2 className="text-3xl font-semibold mt-8 mb-6 text-center">Contact Us</h2>
            <div className="flex items-center justify-center p-8 bg-white">
                <div className="container mx-auto flex flex-wrap justify-center">
                    <div className="w-full md:w-1/2 lg:w-1/3 p-4">
                        <AboutUs />
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/3 p-4">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactUs;

const AboutUs = () => {
    return (
        <div className="h-full flex flex-col items-center justify-center">
            <img
                src="/images/logo.jpeg" // Placeholder logo image URL
                alt="Fake Logo"
                className="mb-4 rounded-full border-2 object-contain h-24 w-24"
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
        </div>
    );
};

const ContactForm = () => {
    return (
        <div className="h-full flex flex-col items-center justify-center">
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