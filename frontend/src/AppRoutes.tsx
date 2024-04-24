import { Route, Routes, Navigate } from "react-router-dom"
import Layout from "./layouts/layout";
import Homepage from "./pages/Homepage";
import AuthCallbackPage from "./pages/AuthCallbackPage";
import UserProfilePage from "./pages/UserProfilePage";
import ProtectedRoute from "./auth/ProtectedRoute";
import ManageRestaurantPage from "./pages/ManageRestaurantPage";

const AppRoutes = ()=>{
  return(
    <Routes>
      <Route path="/" element={<Layout><Homepage /></Layout>} />
      
      <Route element={<ProtectedRoute/>}>
        <Route path="/user-profile" element={<Layout showHero><UserProfilePage/></Layout>} />
        <Route path="/manage-restaurant" element={<Layout showHero><ManageRestaurantPage/></Layout>} />
      </Route>
      <Route path="/auth-callback" element={< AuthCallbackPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRoutes;