export interface Movie {
  id: number;
  title: string;
  year: number;
  genre: string[];
  image: string;
  link: string;
  description: string;
  rating: string;
  duration: string;
}

export const movies: Movie[] = [
  {
    id: 1,
    title: "El Padrino",
    year: 1972,
    genre: ["Drama", "Crimen"],
    image: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    link: "https://disk.yandex.com/example1",
    description: "La saga épica de una familia mafiosa italiana en América.",
    rating: "9.2",
    duration: "2h 55min"
  },
  {
    id: 2,
    title: "Inception",
    year: 2010,
    genre: ["Ciencia Ficción", "Acción", "Thriller"],
    image: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    link: "https://disk.yandex.com/example2",
    description: "Un ladrón que roba secretos a través de sueños recibe una misión imposible.",
    rating: "8.8",
    duration: "2h 28min"
  },
  {
    id: 3,
    title: "Interstellar",
    year: 2014,
    genre: ["Ciencia Ficción", "Drama", "Aventura"],
    image: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    link: "https://disk.yandex.com/example3",
    description: "Un equipo de exploradores viaja a través de un agujero de gusano en el espacio.",
    rating: "8.7",
    duration: "2h 49min"
  },
  {
    id: 4,
    title: "Pulp Fiction",
    year: 1994,
    genre: ["Crimen", "Drama", "Thriller"],
    image: "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    link: "https://disk.yandex.com/example4",
    description: "Las vidas de criminales se entrelazan en esta historia no lineal.",
    rating: "8.9",
    duration: "2h 34min"
  },
  {
    id: 5,
    title: "El Rey León",
    year: 1994,
    genre: ["Animación", "Drama", "Familia"],
    image: "https://m.media-amazon.com/images/M/MV5BYTYxNGMyZTYtMDZmMC00NTQ2LTk4ZTUtNTk4ZjE4MmNhZWVkXkEyXkFqcGdeQXVyNjY5NDU4NjI@._V1_SX300.jpg",
    link: "https://disk.yandex.com/example5",
    description: "El príncipe Simba debe reclamar su lugar como rey de la Tierra de los Leones.",
    rating: "8.5",
    duration: "1h 28min"
  },
  {
    id: 6,
    title: "Matrix",
    year: 1999,
    genre: ["Ciencia Ficción", "Acción"],
    image: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVlLTM5YTUtZjk4ZjU2MDg3YmE1XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
    link: "https://disk.yandex.com/example6",
    description: "Un hacker descubre que la realidad tal como la conocemos es una simulación.",
    rating: "8.7",
    duration: "2h 16min"
  },
  {
    id: 7,
    title: "Titanic",
    year: 1997,
    genre: ["Drama", "Romance"],
    image: "https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NTY3MQ@@._V1_SX300.jpg",
    link: "https://disk.yandex.com/example7",
    description: "Un amor épico a bordo del barco más famoso de la historia.",
    rating: "7.9",
    duration: "3h 14min"
  },
  {
    id: 8,
    title: "Avengers: Endgame",
    year: 2019,
    genre: ["Acción", "Aventura", "Ciencia Ficción"],
    image: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
    link: "https://disk.yandex.com/example8",
    description: "Los Vengadores se unen para revertir el chasquido de Thanos.",
    rating: "8.4",
    duration: "3h 1min"
  },
  {
    id: 9,
    title: "Joker",
    year: 2019,
    genre: ["Crimen", "Drama", "Thriller"],
    image: "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
    link: "https://disk.yandex.com/example9",
    description: "El origen del villano más icónico del cómic se cuenta de forma perturbadora.",
    rating: "8.4",
    duration: "2h 2min"
  },
  {
    id: 10,
    title: "El Señor de los Anillos",
    year: 2001,
    genre: ["Aventura", "Drama", "Fantasía"],
    image: "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
    link: "https://disk.yandex.com/example10",
    description: "Un hobbit emprende un viaje épico para destruir el Anillo Único.",
    rating: "8.8",
    duration: "2h 58min"
  },
  {
    id: 11,
    title: "Parasite",
    year: 2019,
    genre: ["Thriller", "Drama", "Comedia"],
    image: "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
    link: "https://disk.yandex.com/example11",
    description: "Una familia pobre se infiltra en la vida de una adinerada.",
    rating: "8.5",
    duration: "2h 12min"
  },
  {
    id: 12,
    title: "Spirited Away",
    year: 2001,
    genre: ["Animación", "Aventura", "Fantasía"],
    image: "https://m.media-amazon.com/images/M/MV5BMjlmZmI5MDctNDE2YS00YWdjLWJkZDItZTE5MThiNGZhYzIyXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    link: "https://disk.yandex.com/example12",
    description: "Una niña queda atrapada en un mundo de espíritus y debe trabajar para salvar a sus padres.",
    rating: "8.6",
    duration: "2h 5min"
  }
];

export const genres = [...new Set(movies.flatMap(m => m.genre))].sort();
