import { useState } from 'react';
import { useHttp } from '../hooks/useHttp';
import { useAuthStore } from '../store/authStore';

function ProductList({ isClient = false }) {
  const { data: products, loading, error } = useHttp('products', 'GET');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [stock, setStock] = useState('');
  const { addToCart } = useAuthStore();
  const { data: postData, loading: postLoading } = useHttp('products', 'POST', { name, price: parseFloat(price), stock: parseInt(stock) }, [name, price, stock].filter(Boolean));

  const handleAddProduct = (e) => {
    e.preventDefault();
    if (name && price && stock) {
      setName('');
      setPrice('');
      setStock('');
    }
  };

  return (
    <div>
      {error && <div className="alert alert-danger">{error}</div>}
      {loading && <div className="spinner-border" role="status"></div>}
      {!isClient && (
        <form onSubmit={handleAddProduct} className="mb-4">
          <div className="row">
            <div className="col-md-4">
              <input
                type="text"
                className="form-control"
                placeholder="Nombre"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="col-md-3">
              <input
                type="number"
                className="form-control"
                placeholder="Precio"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div className="col-md-3">
              <input
                type="number"
                className="form-control"
                placeholder="Stock"
                value={stock}
                onChange={(e) => setStock(e.target.value)}
              />
            </div>
            <div className="col-md-2">
              <button type="submit" className="btn btn-primary" disabled={postLoading}>
                Agregar
              </button>
            </div>
          </div>
        </form>
      )}
      <ul className="list-group">
        {products &&
          products.map((product) => (
            <li key={product.id} className="list-group-item d-flex justify-content-between align-items-center">
              {product.name} - ${product.price} (Stock: {product.stock})
              {isClient && (
                <button
                  className="btn btn-success btn-sm"
                  onClick={() => addToCart(product)}
                >
                  Añadir al Carrito
                </button>
              )}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default ProductList;