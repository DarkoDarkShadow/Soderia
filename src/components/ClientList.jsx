import { useHttp } from '../hooks/useHttp';

function ClientList() {
  const { data: clients, loading, error } = useHttp('clients', 'GET');

  return (
    <div>
      {error && <div className="alert alert-danger">{error}</div>}
      {loading && <div className="spinner-border" role="status"></div>}
      <ul className="list-group">
        {clients &&
          clients.map((client) => (
            <li key={client.id} className="list-group-item">
              {client.name} - {client.email} - {client.phone}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default ClientList;