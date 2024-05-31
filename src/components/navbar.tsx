import {  useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const handleLogout = () => {  
      
        localStorage.removeItem('token');
         navigate('/Login'); 
    };



    return (
        <nav className="bg-sky-400 p-4 fixed w-full top-0 z-10">
            <div className="container mx-auto flex justify-between items-center">
                <a href="/" className="text-white text-lg font-bold">Appointment Scheduler</a>

                
                <ul className="flex space-x-4">
                    <li>
                    <Link to="/" className="text-white hover:text-gray-300"> Home </Link>
                    </li>
                    <li>
                    <Link to="/Appointments" className="text-white hover:text-yellow-300"> Appointments </Link>
                    </li>
                    <button onClick={handleLogout} className="text-white hover:text-gray-300">
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;



