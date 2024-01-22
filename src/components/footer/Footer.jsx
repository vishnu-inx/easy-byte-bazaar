
function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-800 p-4 text-white text-center fixed w-full bottom-0">
            <p>&copy; {currentYear} Store App. All rights reserved.</p>
        </footer>
    )
}

export default Footer;