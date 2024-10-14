import { Routes, Route } from "react-router-dom";

import Home from "../pages/home/home";
import Events from "../pages/events/events";
import Points from "../pages/points/points";
import Admin from "../pages/admin/admin";
import Signup from "../pages/signup/signup";
import Login from "../pages/login/login";
import { AuthProvider } from "../context/AuthContext";
import ProtectedRoute from "../security/protectedRouteAdmin";
import { ProfileProvider } from "../context/ProfileContext";
import { PointsProvider } from "../context/PointsContext";
import { EventsProvider } from "../context/EventsContext";


const AppRoutes = () => {
  return (
    <AuthProvider>
      <ProfileProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={
            <EventsProvider>
              <Events />
            </EventsProvider>
          } />

          <Route
            path="/points"
            element={
              <PointsProvider>
                <Points />
              </PointsProvider>
            }
          />

          <Route
            path="/admin"
            element={<ProtectedRoute element={<Admin />} adminOnly={true} />}
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </ProfileProvider>
    </AuthProvider>
  );
};

export default AppRoutes;
