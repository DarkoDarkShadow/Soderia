import { useHttp } from '../hooks/useHttp';

function SaleList() {
  const { data: sales, loading, error } = useHttp('sales', 'GET');

  return (
    <div>
      {error && <div className="alert alert-danger">{error}</div>}
      {loading && <div className="spinner-border" role="status"></div>}
      <ul className="list-group">
        {sales &&
          sales.map((sale) => (
            <li key={sale.id} className="list-group-item">
              Venta #{sale.id} - Cliente ID: {sale.clientId} - Producto ID: {sale.productId} - Total: ${sale.total}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default SaleList;