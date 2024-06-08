
import React, { useState, useEffect, useMemo, useContext, ReactNode } from 'react';
import axios from 'axios';
import {jwtDecode} from 'jwt-decode'; 
import { User } from '../types/Types'; 

interface AuthContextProps {
    token: string | null;
    user: User | null;
    setToken: (token: string | null) => void;
}

const AuthContext = React.createContext<AuthContextProps | undefined>(undefined);

const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [token, setToken_] = useState<string | null>(localStorage.getItem("token"));
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const storedToken = localStorage.getItem("token");
        if (storedToken) {
            setToken_(storedToken);
        }

        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            try {
                setUser(JSON.parse(storedUser));
            } catch (error) {
                console.error("Error parsing user from localStorage", error);
                localStorage.removeItem("user");
            }
        }
    }, []);

    const setToken = (newToken: string | null) => {
        setToken_(newToken);
        if (newToken) {
            const decodedToken: any = jwtDecode(newToken);
            console.log("Decoded token:", decodedToken);
            const userId = decodedToken.userId || decodedToken.sub; // Extract userId
            const roleId = decodedToken.RoleId; // Extract RoleID if present
            const user = { ...decodedToken, userId, RoleId: roleId }; // Include RoleID
            setUser(user);
            localStorage.setItem('user', JSON.stringify(user));
            console.log("User set in context:", user);
        } else {
            setUser(null);
            localStorage.removeItem('user');
        }
    };

    useEffect(() => {
        if (token) {
            axios.defaults.headers.common["Authorization"] = "Bearer " + token;
            localStorage.setItem('token', token);
        } else {
            delete axios.defaults.headers.common["Authorization"];
            localStorage.removeItem('token');
        }
    }, [token]);

    const contextValue = useMemo(() => ({
        token,
        user,
        setToken,
    }), [token, user]);

    return (
        <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};

export default AuthProvider;
