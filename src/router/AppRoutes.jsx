import { Routes, Route } from 'react-router-dom';

import Home from '../pages/home/home';
import Events from '../pages/events/events';
import Points from '../pages/points/points';
import Admin from '../pages/admin/admin';
import Signup from '../pages/signup/signup';
import Login from '../pages/login/login';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/events" element={<Events />} />
      <Route path="/points" element={<Points />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default AppRoutes;
