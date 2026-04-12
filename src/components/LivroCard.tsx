import type { ILivro } from "../interfaces/ILivro";

interface LivroCardProps {
  livro: ILivro;
  alugarLivro: (id: number) => void;
  devolverLivro: (id: number) => void;
  excluirLivro: (id: number) => void;
}

function LivroCard({
  livro,
  alugarLivro,
  devolverLivro,
  excluirLivro,
}: LivroCardProps) {
  return (
    <div className="col-12 col-md-6 col-lg-4 mb-4">
      <div className="card shadow-sm border-0 h-100">

        {/* IMAGEM */}
        <img
          src={livro.imagem}
          alt={livro.titulo}
          className="card-img-top"
          style={{ height: "280px", objectFit: "cover" }}
          onError={(e) => {
            e.currentTarget.src = "/imagens/sem-capa.jpg";
          }}
        />

        {/* CONTEÚDO */}
        <div className="card-body d-flex flex-column text-center">
          <h3 className="h5 mb-3">{livro.titulo}</h3>

          <p className="mb-2">
            <strong>Autor:</strong> {livro.autor}
          </p>

          <p className="mb-2">
            <strong>Categoria:</strong> {livro.categoria}
          </p>

          <p className="mb-3">
            <strong>Status:</strong>{" "}
            <span
              className={
                livro.status === "Disponível"
                  ? "badge bg-success"
                  : "badge bg-danger"
              }
            >
              {livro.status}
            </span>
          </p>

          {/* BOTÕES */}
          <div className="mt-auto d-flex flex-wrap gap-2 justify-content-center">
            <button
              className="btn btn-primary"
              onClick={() => alugarLivro(livro.id)}
              disabled={livro.status === "Alugado"}
            >
              Alugar
            </button>

            <button
              className="btn btn-success"
              onClick={() => devolverLivro(livro.id)}
            >
              Devolver
            </button>

            <button
              className="btn btn-danger"
              onClick={() => excluirLivro(livro.id)}
              disabled={livro.status === "Alugado"}
            >
              Excluir
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LivroCard;