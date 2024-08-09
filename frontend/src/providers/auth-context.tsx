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
    user: { userID: string};
    login: ({ username, password }: { username: string; password: string }) => Promise<void>;
    logout: () => void;
    loading: boolean;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider = ({ children }: { children: ReactNode }): ReactElement => {
    const [user, setUser] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();
    const loginMutation = useLoginMutation();

    useEffect(() => {
        const loadUserFromLocalStorage = async () => {
            const token = localStorage.getItem('access_token');
            if (token) {
                axios.defaults.headers.Authorization = `Bearer ${token}`;
                try {
                    const { data } = await axios.get('http://localhost:8080/profile');
                    setUser(data);
                } catch (error) {
                    console.error('Error loading user from localStorage', error);
                    logout();
                }
            }
            setLoading(false);
        };
        loadUserFromLocalStorage();
    }, []);

    const login = async ({ username, password }: { username: string; password: string }) => {
        try {
            const { access_token, refresh_token, userid } = await loginMutation.mutateAsync({ username, password });
            localStorage.setItem('access_token', access_token);
            localStorage.setItem('refresh_token', refresh_token);
            axios.defaults.headers.Authorization = `Bearer ${access_token}`;
            const { data } = await axios.get('http://localhost:8080/profile');
            setUser(data);
            router.push('/');
        } catch (error) {
            console.error('Login failed', error);
            throw error;
        }
    };

    const logout = () => {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        setUser(null);
        delete axios.defaults.headers.Authorization;
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated: !!user, user, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = (): AuthContextType => useContext(AuthContext);
