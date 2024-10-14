import { Routes, Route } from "react-router-dom";

import Home from "../pages/home/home";
import Events from "../pages/events/events";
import Points from "../pages/points/points";
import Admin from "../pages/admin/admin";
import Signup from "../pages/signup/signup";
import Login from "../pages/login/login";
import ProtectedRoute from "../security/protectedRouteAdmin";
import { AuthProvider } from "../context/authContext";
import { ProfileProvider } from "../context/profileContext";
import { EventsProvider } from "../context/eventsContext";
import { PointsProvider } from "src/context/pointsContext.jsx";


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
