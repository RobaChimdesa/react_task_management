import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";
import { Pages_Routes } from "../utils/pages-routes";

const ProtectedRoute = ({ children }: any) => {
    const navigate = useNavigate();
    const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
    const [isChecking, setIsChecking] = useState(true);

    useEffect(() => {
        // Small delay to ensure auth state is loaded
        const checkAuth = setTimeout(() => {
            if (!isLoggedIn) {
                navigate(Pages_Routes.sign_in);
            }
            setIsChecking(false);
        }, 100);
        
        return () => clearTimeout(checkAuth);
    }, [isLoggedIn, navigate]);

    // Show loading spinner while checking authentication
    if (isChecking) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
                    <p className="mt-4 text-gray-600">Loading...</p>
                </div>
            </div>
        );
    }
    
    if (!isLoggedIn) {
        return null;
    }
    
    return children;
};

export default ProtectedRoute;