import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Signin from './pages/Signin';
import Confirmation from './pages/Confirm';
import CRMProduct from './pages/CRM';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Confirm" element={<Confirmation />} />
        <Route path="/CRM" element={<CRMProduct />} />
      </Routes>
    </Router>
  );
}

export default App;
