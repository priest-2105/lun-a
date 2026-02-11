import React, { createContext, useContext, useState, ReactNode } from 'react';

interface User {
    name: string;
    email: string;
}

interface AuthContextType {
    isAuthenticated: boolean;
    user: User | null;
    login: (email: string, password: string) => Promise<void>;
    signUp: (name: string, email: string, password: string) => Promise<void>;
    logout: () => void;
    isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const login = async (email: string, password: string) => {
        setIsLoading(true);
        // Mock API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        setUser({ name: 'Lunea User', email });
        setIsAuthenticated(true);
        setIsLoading(false);
    };

    const signUp = async (name: string, email: string, password: string) => {
        setIsLoading(true);
        // Mock API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        setUser({ name, email });
        setIsAuthenticated(true);
        setIsLoading(false);
    };

    const logout = () => {
        setUser(null);
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, user, login, signUp, logout, isLoading }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
