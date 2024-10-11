import './App.css'
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './router/AppRoutes';
import Notification from './components/notifications';

function App() {
  return (
    <Router>
      <AppRoutes />
      <Notification />
    </Router>
  )
}

export default App
