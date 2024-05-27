// src/components/Navbar.tsx

import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-blue-600 p-4 fixed w-full top-0 z-10">
            <div className="container mx-auto flex justify-between items-center">
                <a href="/" className="text-white text-lg font-bold">Appointment Scheduler</a>
                <ul className="flex space-x-4">
                    <li>
                    <Link to="/" className="text-white hover:text-gray-300"> Home </Link>
                    </li>
                    <li>
                    <Link to="/login" className="text-white hover:text-gray-300"> Login </Link>
                    </li>
                    <li>
                    <Link to="/register" className="text-white hover:text-gray-300"> Register </Link>
                    </li>
                    <li>
                    <Link to="/Appointments" className="text-white hover:text-gray-300"> Appointments </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;



