"use client"
import React, {
    createContext,
    useState,
    useEffect,
    useContext,
    ReactNode,
    ReactElement,
} from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { useLoginMutation } from '@/services/user';

export interface AuthContextType {
    isAuthenticated: boolean;
    login: ({ username, password }: { username: string; password: string }) => Promise<void>;
    logout: () => void;
    loading: boolean;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider = ({ children }: { children: ReactNode }): ReactElement => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);
    const router = useRouter();
    const loginMutation = useLoginMutation();

    // useEffect(() => {
    //     const loadUserFromLocalStorage = async () => {
    //         const token = localStorage.getItem('access_token');
    //         if (token) {
    //             axios.defaults.headers.Authorization = `Bearer ${token}`;
    //             try {
    //                 const { data } = await axios.get('http://localhost:8080/profile');
    //                 setUser(data);
    //             } catch (error) {
    //                 console.error('Error loading user from localStorage', error);
    //                 logout();
    //             }
    //         }
    //         setLoading(false);
    //     };
    //     loadUserFromLocalStorage();
    // }, []);

    useEffect(() => {
        const setAuthentication = () => {
            const token = localStorage.getItem('access_token');
            if (token) {
                setIsAuthenticated(true);
            }
        }
        setAuthentication();
    }, []);

    const login = async ({ username, password }: { username: string; password: string }) => {
        try {
            if (username === 'max' && password === 'password') {
                const access_token = 'user_logged_in';
                const refresh_token = 'user_logged_in';
                localStorage.setItem('access_token', access_token);
                localStorage.setItem('refresh_token', refresh_token);
            router.back();
            } else {
                console.error('Login failed');
            }
        } catch (error) {
            console.error('Login failed', error);
            throw error;
        }
    };

    const logout = () => {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        delete axios.defaults.headers.Authorization;
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = (): AuthContextType => useContext(AuthContext);
