// src/components/Navbar.tsx
import React from 'react';

const Navbar = () => {
    return (
        <nav className="bg-blue-600 p-4 fixed w-full top-0 z-10">
            <div className="container mx-auto flex justify-between items-center">
                <a href="/" className="text-white text-lg font-bold">Appointment Scheduler</a>
                <ul className="flex space-x-4">
                    <li>
                        <a href="/" className="text-white hover:text-gray-300">Home</a>
                    </li>
                    <li>
                        <a href="/login" className="text-white hover:text-gray-300">Login</a>
                    </li>
                    <li>
                        <a href="/register" className="text-white hover:text-gray-300">Register</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
