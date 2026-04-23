import { create } from "zustand";
type User = {
  id: string;
  name: string;
  email: string;
};

type AuthState = {
    user: User | null;
    isLoggedIn: boolean;

    login: (user: User) => void;
    logout:() => void;
};

export const useAuthStore = create<AuthState>((set) => ({
    user: null,
    isLoggedIn:false,

    login: (user) =>{
        localStorage.setItem("user",JSON.stringify(user));
        set({ user, isLoggedIn:true});
    },

    logout: () =>{
        localStorage.removeItem("user");
        set({user: null, isLoggedIn:false})
    },
}))