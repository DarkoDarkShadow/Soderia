import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import { useHttp } from '../hooks/useHttp';
import { ROUTES } from '../constants/routes';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuthStore();
  const navigate = useNavigate();
  const { data, loading, error } = useHttp('users', 'GET');

  const handleLogin = (e) => {
    e.preventDefault();
    if (data) {
      const user = data.find((u) => u.email === email && u.password === password);
      if (user) {
        login(user);
        navigate(user.role === 'admin' ? ROUTES.ADMIN : ROUTES.CLIENT);
      } else {
        alert('Credenciales incorrectas');
      }
    }
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-6">
        <div className="card">
          <div className="card-header">Iniciar Sesión</div>
          <div className="card-body">
            <form onSubmit={handleLogin}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Contraseña</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              {error && <div className="alert alert-danger">{error}</div>}
              <button type="submit" className="btn btn-primary" disabled={loading}>
                {loading ? 'Cargando...' : 'Iniciar Sesión'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;