import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.png';
import Navbar from '../components/navbar';


const HomePage = () => {
    return (
        <div>
            <Navbar />
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-sky-100 via-teal-300 to-sky-600">
                <div className="bg-gray-700 bg-opacity-50 text-center max-w-md p-8 rounded-lg">
                    <h1 className="text-5xl font-bold text-white mb-6">Bienvenido al sistema</h1>
                    <img src={Logo} alt="Logo" className="mx-auto mb-6 w-40 h-40 object-contain" />
                    <p className="text-lg text-white mb-8">Por favor inicie sesión para manejar sus citas.</p>
                    <div className="space-x-4">
                        <Link to="/login" className="inline-block bg-sky-400 text-white px-6 py-3 rounded-full hover:bg-blue-500 transition duration-300">Login</Link>
                        <Link to="/register" className="inline-block bg-sky-400 text-white px-6 py-3 rounded-full hover:bg-blue-500 transition duration-300">Registro</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
