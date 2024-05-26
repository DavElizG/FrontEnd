import React from 'react';
import Navbar from '../components/navbar'

const HomePage = () => {
    return (
        <div>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="text-center max-w-md">
                <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to the Appointment Scheduler</h1>
                <p className="text-lg text-blue-600 mb-4">Please login or register to manage your appointments.</p>
                <div className="space-x-4">
                    <a href="/login" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500">Login</a>
                    <a href="/register" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500">Register</a>
                </div>
            </div>
        </div>
    </div>
    );

};

export default HomePage;
