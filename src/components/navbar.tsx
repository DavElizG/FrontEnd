import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthProvider'; // Asegúrate de importar el contexto de autenticación correctamente

const Navbar = () => {
    const { user, setToken } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        setToken(null);
        navigate('/Login');
    };

    return (
        <nav className="bg-sky-400 p-4 fixed w-full top-0 z-10">
            <div className="container mx-auto flex justify-between items-center">
                <a href="/" className="text-white text-lg font-bold">Appointment Scheduler</a>
                <ul className="flex space-x-4">
                {user ? (
                       <li className="text-white">
                         {`${user["Name"]} (${user["Email"]}) - ${user["MobilePhone"]}`}
                         </li>
                    ) : (
                        <li className="text-white">Not logged in</li>
                    )}
                    
                    
                    <li>
                        <Link to="/" className="text-white hover:text-gray-300"> Home </Link>
                    </li>
                    <li>
                        <Link to="/Appointments" className="text-white hover:text-yellow-300"> Appointments </Link>
                    </li>

                    {user ?(<button onClick={handleLogout} className="text-white hover:text-gray-300">
                        Logout
                    </button>
                    ):<li className="text-white"></li>}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
