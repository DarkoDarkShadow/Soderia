import { useAuthStore } from '../store/authStore';
import ProductList from '../components/ProductList';

function ClientDashboard() {
  const { cart } = useAuthStore();

  return (
    <div>
      <h2>Bienvenido, Cliente</h2>
      <h4>Productos Disponibles</h4>
      <ProductList isClient={true} />
      <h4>Carrito</h4>
      {cart.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <ul className="list-group">
          {cart.map((item, index) => (
            <li key={index} className="list-group-item">
              {item.name} - ${item.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ClientDashboard;