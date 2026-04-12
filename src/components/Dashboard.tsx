interface DashboardProps {
  totalLivros: number;
  livrosDisponiveis: number;
  livrosAlugados: number;
}

function Dashboard({
  totalLivros,
  livrosDisponiveis,
  livrosAlugados,
}: DashboardProps) {
  return (
    <aside className="col-12 col-md-3 mb-4">
      <div className="card p-4 shadow-sm border-0">
        <h2 className="h4 text-center mb-4">Dashboard</h2>

        <div className="card bg-primary text-white mb-3 border-0">
          <div className="card-body text-center">
            <h3 className="h6">Total de Livros</h3>
            <p className="fs-3 fw-bold mb-0">{totalLivros}</p>
          </div>
        </div>

        <div className="card bg-success text-white mb-3 border-0">
          <div className="card-body text-center">
            <h3 className="h6">Disponíveis</h3>
            <p className="fs-3 fw-bold mb-0">{livrosDisponiveis}</p>
          </div>
        </div>

        <div className="card bg-danger text-white border-0">
          <div className="card-body text-center">
            <h3 className="h6">Alugados</h3>
            <p className="fs-3 fw-bold mb-0">{livrosAlugados}</p>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Dashboard;