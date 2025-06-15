import ProductList from '../components/ProductList';
import ClientList from '../components/ClientList';
import SaleList from '../components/SaleList';

function AdminDashboard() {
  return (
    <div>
      <h2>Panel de Administración</h2>
      <div className="accordion" id="adminAccordion">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingProducts">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseProducts"
              aria-expanded="true"
              aria-controls="collapseProducts"
            >
              Gestionar Productos
            </button>
          </h2>
          <div
            id="collapseProducts"
            className="accordion-collapse collapse show"
            aria-labelledby="headingProducts"
            data-bs-parent="#adminAccordion"
          >
            <div className="accordion-body">
              <ProductList />
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingClients">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseClients"
              aria-expanded="false"
              aria-controls="collapseClients"
            >
              Gestionar Clientes
            </button>
          </h2>
          <div
            id="collapseClients"
            className="accordion-collapse collapse"
            aria-labelledby="headingClients"
            data-bs-parent="#adminAccordion"
          >
            <div className="accordion-body">
              <ClientList />
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingSales">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSales"
              aria-expanded="false"
              aria-controls="collapseSales"
            >
              Gestionar Ventas
            </button>
          </h2>
          <div
            id="collapseSales"
            className="accordion-collapse collapse"
            aria-labelledby="headingSales"
            data-bs-parent="#adminAccordion"
          >
            <div className="accordion-body">
              <SaleList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;