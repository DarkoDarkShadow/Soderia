import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthStore } from './store/authStore';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import AdminDashboard from './pages/AdminDashboard';
import ClientDashboard from './pages/ClientDashboard';
import { ROUTES } from './constants/routes';

const ProtectedRoute = ({ children, allowedRole }) => {
  const { user } = useAuthStore();
  if (!user) return <Navigate to={ROUTES.LOGIN} />;
  if (allowedRole && user.role !== allowedRole) return <Navigate to={ROUTES.HOME} />;
  return children;
};

function App() {
  const { user } = useAuthStore();

  return (
    <BrowserRouter>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path={ROUTES.HOME} element={<LandingPage />} />
          <Route path={ROUTES.LOGIN} element={<LoginPage />} />
          <Route
            path={ROUTES.ADMIN}
            element={
              <ProtectedRoute allowedRole="admin">
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path={ROUTES.CLIENT}
            element={
              <ProtectedRoute allowedRole="cliente">
                <ClientDashboard />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Navigate to={ROUTES.HOME} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;