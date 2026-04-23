import { useEffect } from "react";
import { useAuthStore } from "./store/authStore";
import AppLayout from "./routes/AppLayout";
import AppRoutes from "./routes/routes";
import { BrowserRouter } from "react-router-dom";
function App() {
  const login = useAuthStore((state)=>state.login);
   useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      login(JSON.parse(storedUser));
    }
  }, []);
  return (
    <AppLayout>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AppLayout>
  );
}

export default App;
