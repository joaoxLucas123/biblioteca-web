import type { ILivro } from "../interfaces/ILivro";

export const livrosIniciais: ILivro[] = [
  {
    id: 1,
    titulo: "Dom Casmurro",
    autor: "Machado de Assis",
    categoria: "Romance",
    imagem: "/imagens/dom-casmurro.jpg",
    status: "Disponível",
  },
  {
    id: 2,
    titulo: "1984",
    autor: "George Orwell",
    categoria: "Ficção",
    imagem: "/imagens/1984.jpg",
    status: "Alugado",
  },
  {
    id: 3,
    titulo: "O Pequeno Príncipe",
    autor: "Antoine de Saint-Exupéry",
    categoria: "Infantil",
    imagem: "/imagens/pequeno-principe.jpg",
    status: "Disponível",
  },
];