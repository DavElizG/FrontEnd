import React from 'react';
import { Link } from 'react-router-dom';
import './AuthForm.css';

const Login: React.FC = () => {
    return (
        <div className="container">
            <form>
                <h2>Login</h2>
                <input type="email" placeholder="Enter your email" required />
                <input type="password" placeholder="Enter your password" required />
                <button type="submit">Login</button>
                <p>Don't have an account? <Link to="/register">Register</Link></p>
            </form>
        </div>
    );
}

export default Login;
