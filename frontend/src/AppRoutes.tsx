import { Route, Routes, Navigate } from "react-router-dom"
import Layout from "./layouts/layout";
import Homepage from "./pages/Homepage";
import AuthCallbackPage from "./pages/AuthCallbackPage";
import UserProfilePage from "./pages/UserProfilePage";

const AppRoutes = ()=>{
  return(
    <Routes>
      <Route path="/" element={<Layout><Homepage /></Layout>} />
      <Route path="/user-profile" element={<Layout showHero><UserProfilePage/></Layout>} />
      <Route path="/auth-callback" element={< AuthCallbackPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRoutes;