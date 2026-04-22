import AppLayout from "./routes/AppLayout";
import AppRoutes from "./routes/routes";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <AppLayout>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AppLayout>
  );
}

export default App;
