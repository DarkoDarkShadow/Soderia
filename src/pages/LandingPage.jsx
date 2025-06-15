function LandingPage() {
  return (
    <div className="text-center">
      <div className="jumbotron bg-light p-5 rounded">
        <h1 className="display-4">Bienvenido</h1>
        <p className="lead">Una solución para gestionar tus pedidos de sodas.</p>
        <hr className="my-4" />
        <p>Inicia sesión para comenzar.</p>
        <a className="btn btn-primary btn-lg" href="/login" role="button">Iniciar Sesión</a>
      </div>
    </div>
  );
}

export default LandingPage;