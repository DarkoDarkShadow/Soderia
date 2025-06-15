import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import { ROUTES } from '../constants/routes';

function Navbar() {
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate(ROUTES.HOME);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href={ROUTES.HOME}>Sodería App</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {!user && (
              <>
                <li className="nav-item">
                  <a className="nav-link" href={ROUTES.HOME}>Inicio</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href={ROUTES.LOGIN}>Login</a>
                </li>
              </>
            )}
            {user && user.role === 'cliente' && (
              <li className="nav-item">
                <a className="nav-link" href={ROUTES.CLIENT}>Mis Pedidos</a>
              </li>
            )}
            {user && user.role === 'admin' && (
              <li className="nav-item">
                <a className="nav-link" href={ROUTES.ADMIN}>Admin</a>
              </li>
            )}
            {user && (
              <li className="nav-item">
                <button className="nav-link btn btn-link" onClick={handleLogout}>Logout</button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;