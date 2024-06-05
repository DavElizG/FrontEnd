
import Navbar from '../components/navbar'
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div>
        <Navbar />
            
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="text-center max-w-md">
                <h1 className="text-4xl font-bold text-sky-4000 mb-4">Welcome to the Appointment Scheduler</h1>
                <p className="text-lg text-sky-400 mb-4">Please login or register to manage your appointments.</p>
                <div className="space-x-4">
                <Link to="/login" className=" bg-sky-400 text-white px-4 py-2 rounded hover:bg-blue-500"> Login </Link>
                <Link to="/register" className=" bg-sky-400 text-white px-4 py-2 rounded hover:bg-blue-500"> Register </Link>
                </div>
            </div>
        </div>
    </div>
    );

};

export default HomePage;
