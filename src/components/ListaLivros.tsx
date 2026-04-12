import type { ILivro } from "../interfaces/ILivro";
import LivroCard from "./LivroCard";

interface ListaLivrosProps {
  livros: ILivro[];
  alugarLivro: (id: number) => void;
  devolverLivro: (id: number) => void;
  excluirLivro: (id: number) => void;
}

function ListaLivros({
  livros,
  alugarLivro,
  devolverLivro,
  excluirLivro,
}: ListaLivrosProps) {
  return (
    <main>
      <section>
        <h2 className="h4 mb-3 text-center">Lista de Livros</h2>
        <div className="row">
          {livros.map((livro) => (
            <LivroCard
              key={livro.id}
              livro={livro}
              alugarLivro={alugarLivro}
              devolverLivro={devolverLivro}
              excluirLivro={excluirLivro}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default ListaLivros;