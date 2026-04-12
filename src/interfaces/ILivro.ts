export interface ILivro {
  id: number;
  titulo: string;
  autor: string;
  categoria: string;
  imagem: string;
  status: "Disponível" | "Alugado";
}