/* Task 1.1. Add your movie data here 
   and export it so it's available in server.js */

const movies = {
   tt9426210: {
      imdbID: "tt9426210",
      Title: "Weathering with You",
      Released: "2020-01-17",
      Runtime: 112,
      Genres: ["Animation", "Drama", "Fantasy"],
      Directors: ["Makoto Shinkai"],
      Writers: ["Makoto Shinkai"],
      Actors: ["Kotaro Daigo", "Nana Mori", "Tsubasa Honda"],
      Plot: "Set during a period of exceptionally rainy weather, high-school boy Hodaka Morishima runs away from his troubled rural home to Tokyo and befriends an orphan girl who can manipulate the weather.",
      Poster: "https://m.media-amazon.com/images/M/MV5BMmJiYWI4ZjktMzgyZS00MjBiLThmOTYtZWJmOTUzOTFkMTFiXkEyXkFqcGc@._V1_SX300.jpg",
      Metascore: 72,
      imdbRating: 7.5,
   },
   tt32820897: {
      imdbID: "tt32820897",
      Title: "Demon Slayer: Kimetsu no Yaiba Infinity Castle",
      Released: "2025-09-12",
      Runtime: 155,
      Genres: ["Animation", "Action", "Adventure"],
      Directors: ["Haruo Sotozaki", "Hikaru Kondô"],
      Writers: ["Koyoharu Gotouge", "Hikaru Kondô"],
      Actors: ["Zach Aguilar", "Saeko Akiho", "Yôhei Azakami"],
      Plot: "The Demon Slayer Corps are drawn into the Infinity Castle, where Tanjiro and the Hashira face terrifying Upper Rank demons in a desperate fight as the final battle against Muzan Kibutsuji begins.",
      Poster: "https://m.media-amazon.com/images/M/MV5BOGQ3YWUzYjEtMTJiYy00ZjQ0LWI0YjktYjhiNGVhNGExYTM3XkEyXkFqcGc@._V1_SX300.jpg",
      Metascore: 67,
      imdbRating: 8.4,
   },
   tt30472557: {
      imdbID: "tt30472557",
      Title: "Chainsaw Man - The Movie: Reze Arc",
      Released: "2025-10-24",
      Runtime: 100,
      Genres: ["Animation", "Action", "Adventure"],
      Directors: ["Tatsuya Yoshihara"],
      Writers: ["Tatsuki Fujimoto", "Hiroshi Seko"],
      Actors: ["Kikunosuke Toya", "Shiori Izawa", "Tomori Kusunoki"],
      Plot: "Denji encounters a new romantic interest, Reze, who works at a coffee café.",
      Poster: "https://m.media-amazon.com/images/M/MV5BZmMzNGVhODktYmU5MS00MDg1LThlNTEtNTMyYTg5MDA0Njk4XkEyXkFqcGc@._V1_SX300.jpg",
      Metascore: 71,
      imdbRating: 8.4,
   },
};

module.exports = movies;