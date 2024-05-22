import React from 'react';
import { Link } from 'react-router-dom';
import './AuthForm.css'; // Asegúrate de que esta es la importación correcta del archivo CSS

const Register: React.FC = () => {
    return (
        <div className="container">
            <form>
                <h2>Register Now</h2>
                <input type="text" placeholder="Username" required />
                <input type="email" placeholder="Enter your email" required />
                <input type="password" placeholder="Create a password" required />
                <button type="submit">Signup</button>
                <p>Already have an account? <Link to="/login">Login</Link></p>
            </form>
        </div>
    );
}

export default Register;


