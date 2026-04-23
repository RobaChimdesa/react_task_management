import { useState } from "react";
import { useAuthStore } from "../store/authStore";

const Logout = () => {
    const logout = useAuthStore((state) => state.logout)
return(
    <button onClick={logout}>  
        Logout
    </button>
)
}

export default Logout