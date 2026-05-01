import { useEffect } from "react";
import { useAuthStore } from "./store/authStore";
import AppLayout from "./routes/AppLayout";
import AppRoutes from "./routes/routes";
import { BrowserRouter } from "react-router-dom";
import { useThemeStore } from "./store/themeStore";
function App() {
  const login = useAuthStore((state) => state.login);
  const theme = useThemeStore((state) => state.theme);
  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      login(JSON.parse(storedUser));
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);
  console.log("App theme:", theme);
  return (
    <BrowserRouter>
      <AppLayout>
        <AppRoutes />
      </AppLayout>
    </BrowserRouter>
  );
}

export default App;
