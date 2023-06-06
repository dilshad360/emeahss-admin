import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/ManagementDashboard";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import PrivateRoutes from "./utils/PrivateRoutes";
import CommunityDashboard from "./pages/CommunityDashboard";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/management-dashboard" element={<Dashboard />} exact />
          <Route path="/community-dashboard" element={<CommunityDashboard />} exact />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
