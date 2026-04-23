import { Route, Routes } from "react-router-dom";
import { Pages_Routes } from "../utils/pages-routes";
import SignINPage from "../home/page/SigninPage";
// import SignINPage from "../home/page/SigninPage";
import CreateAccount from "../home/page/CreateAccount";
import HomePage from "../home/page/HomePage";
import ProtectedRoute from "../Users/ProtectedRoute";
import Dashboard from "../Users/Dashboard";
const AppRoutes = () => {
  return (
    <Routes>
      <Route
        key={"urlhomepage"}
        path={Pages_Routes.home}
        element={<HomePage />}
      />
      <Route
        key={"urlsignuppage"}
        path={Pages_Routes.sign_up}
        element={<CreateAccount />}
      />
      <Route
        key={"urlsigninpage"}
        path={Pages_Routes.sign_in}
        element={<SignINPage />}
      />
      <Route
        key={"urldashboard"}
        path={Pages_Routes.dashboard}
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};
export default AppRoutes;
