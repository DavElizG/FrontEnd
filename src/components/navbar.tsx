import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthProvider'; 


import Logo2 from '../assets/Logo2.png';

const Navbar = () => {
    const { user, setToken } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        setToken(null);
        navigate('/');
    };
    const handleLogoClick = () => {
        navigate('/');
    };

    return (
        <nav className="bg-gray-900 bg-opacity-50 fixed w-full top-0 z-10">
            <div className="container mx-auto flex justify-between items-center">
                
            
                    <img src={Logo2} alt="Logo" className="h-12 mr-4 -ml-20" onClick={handleLogoClick}/>
               
                
                <ul className="flex space-x-4">
                    {user ? (
                        <li className="text-white">
                            {`${user["Name"]} (${user["Email"]}) - ${user["MobilePhone"]}`}
                        </li>
                    ) : (
                        <li className="text-white">
                        <Link to="/login">Inicie Sesión</Link>
                    </li>
                    )}
                    
                    
                    
                    <li>
                        {user && (<Link to="/Appointments" className="text-white hover:text-yellow-300"> Citas </Link>)}
                    </li>
                    
                    <li>
                        {user && (<Link to="/admin" className="text-white hover:text-yellow-300">Admin</Link>)}
                    </li>

                    {user ? (
                        <button onClick={handleLogout} className="text-white hover:text-gray-300">
                            Logout
                        </button>
                    ) : (
                        <li className="text-white"></li>
                    )}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
