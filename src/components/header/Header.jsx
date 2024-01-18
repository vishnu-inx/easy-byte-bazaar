import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <nav className="bg-gray-800 p-4 text-white fixed w-full top-0 z-10">
            <ul className="flex space-x-4">
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-white-700"} hover:text-orange-700`
                        }>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/products"
                        className={({ isActive }) =>
                            `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-white-700"} hover:text-orange-700`
                        }>
                        Products
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/categories"
                        className={({ isActive }) =>
                            `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-white-700"} hover:text-orange-700`
                        }>
                        Categories
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/contact-us"
                        className={({ isActive }) =>
                            `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-white-700"} hover:text-orange-700`
                        }>
                        Contact
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Header