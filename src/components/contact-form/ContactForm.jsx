import { useState } from 'react'

function ContactForm() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission with formData
        alert('Your response is submitted :) ', formData);
        setFormData({
            name: '',
            email: '',
            message: ''
        })
    };

    return (
        <div className="h-full flex flex-col items-center justify-center">
            <form onSubmit={handleSubmit}>
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
                        value={formData.name}
                        onChange={handleInputChange}
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
                        value={formData.email}
                        onChange={handleInputChange}
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
                        value={formData.message}
                        onChange={handleInputChange}
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 text-white w-full px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
                    disabled={formData.email === ''}
                >
                    Submit
                </button>
            </form>
        </div>
    )
}

export default ContactForm;