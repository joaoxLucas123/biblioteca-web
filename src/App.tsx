import { useState } from "react";
import type { ILivro } from "./interfaces/ILivro";
import { livrosIniciais } from "./data/livrosIniciais";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import ListaLivros from "./components/ListaLivros";
import Footer from "./components/Footer";
import FormLivro from "./components/FormLivro";

function App() {
  const [livros, setLivros] = useState<ILivro[]>(livrosIniciais);

  const totalLivros = livros.length;
  const livrosDisponiveis = livros.filter(
    (livro) => livro.status === "Disponível"
  ).length;
  const livrosAlugados = livros.filter(
    (livro) => livro.status === "Alugado"
  ).length;

  const alugarLivro = (id: number) => {
    setLivros(
      livros.map((livro) =>
        livro.id === id && livro.status === "Disponível"
          ? { ...livro, status: "Alugado" }
          : livro
      )
    );
  };

  const devolverLivro = (id: number) => {
    setLivros(
      livros.map((livro) =>
        livro.id === id ? { ...livro, status: "Disponível" } : livro
      )
    );
  };

  const adicionarLivro = (livro: ILivro) => {
    setLivros([...livros, livro]);
  };

  const excluirLivro = (id: number) => {
    setLivros(livros.filter((livro) => livro.id !== id));
  };

  return (
    <>
      <Header />

      <div className="container my-4">
        <div className="row">
          <Dashboard
            totalLivros={totalLivros}
            livrosDisponiveis={livrosDisponiveis}
            livrosAlugados={livrosAlugados}
          />

          <div className="col-12 col-md-9">
            <FormLivro adicionarLivro={adicionarLivro} />

            <ListaLivros
              livros={livros}
              alugarLivro={alugarLivro}
              devolverLivro={devolverLivro}
              excluirLivro={excluirLivro}
            />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;