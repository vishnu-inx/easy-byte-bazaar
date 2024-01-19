import ContactForm from "../../components/contact-form/ContactForm";

function ContactUs() {
    return (
        <>
            <h2 className="text-3xl font-semibold mt-8 mb-6 text-center">Contact Us</h2>
            <div className="flex items-center justify-center p-8 bg-white">
                <div className="container mx-auto flex flex-wrap justify-center">
                    <div className="w-full md:w-1/2 lg:w-1/3 p-4">
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