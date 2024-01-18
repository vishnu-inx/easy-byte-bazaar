function Navbar() {
    return (
        <nav className="bg-gray-800 p-4 text-white fixed w-full top-0 z-10">
            <ul className="flex space-x-4">
                <li><a href="#" className="hover:text-gray-300">Home</a></li>
                <li><a href="#" className="hover:text-gray-300">Products</a></li>
                <li><a href="#" className="hover:text-gray-300">Categories</a></li>
                <li><a href="#" className="hover:text-gray-300">Contact</a></li>
            </ul>
        </nav>
    )
}

export default Navbar