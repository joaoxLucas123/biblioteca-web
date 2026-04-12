import { useState } from "react";
import type { ILivro } from "../interfaces/ILivro";

interface FormLivroProps {
  adicionarLivro: (livro: ILivro) => void;
}

function FormLivro({ adicionarLivro }: FormLivroProps) {
  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");
  const [categoria, setCategoria] = useState("");
  const [imagem, setImagem] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const novoLivro: ILivro = {
      id: Date.now(),
      titulo,
      autor,
      categoria,
      imagem,
      status: "Disponível",
    };

    adicionarLivro(novoLivro);

    setTitulo("");
    setAutor("");
    setCategoria("");
    setImagem("");
  };

  return (
    <section className="mb-4">
      <div className="card p-4 shadow-sm border-0">
        <h2 className="h4 mb-3 text-center">Cadastrar Livro</h2>

        <form onSubmit={handleSubmit}>
          <input
            className="form-control mb-3"
            placeholder="Título"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            required
          />

          <input
            className="form-control mb-3"
            placeholder="Autor"
            value={autor}
            onChange={(e) => setAutor(e.target.value)}
            required
          />

          <input
            className="form-control mb-3"
            placeholder="Categoria"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
            required
          />

          <input
            className="form-control mb-3"
            placeholder="URL da imagem da capa"
            value={imagem}
            onChange={(e) => setImagem(e.target.value)}
            required
          />

          <button className="btn btn-dark w-100">Cadastrar Livro</button>
        </form>
      </div>
    </section>
  );
}

export default FormLivro;