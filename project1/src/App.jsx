import "./App.css";
import AnimeCard from "./AnimeCard";

const animeList = [
  {
    title: "Attack on Titan",
    genre: "Action, Drama",
    image: "https://cdn.myanimelist.net/images/anime/10/47347.jpg",
    link: "https://myanimelist.net/anime/16498/Shingeki_no_Kyojin"
  },
  {
    title: "Demon Slayer",
    genre: "Adventure, Supernatural",
    image: "https://cdn.myanimelist.net/images/anime/1264/111392.jpg",
    link: "https://myanimelist.net/anime/38000/Kimetsu_no_Yaiba"
  },
  {
    title: "Death Note",
    genre: "Mystery, Thriller",
    image: "https://upload.wikimedia.org/wikipedia/en/6/6f/Death_Note_Vol_1.jpg",
    link: "https://myanimelist.net/anime/1535/Death_Note"
  },
  {
    title: "One Piece",
    genre: "Adventure, Fantasy",
    image: "https://cdn.myanimelist.net/images/anime/1386/100624.jpg",
    link: "https://myanimelist.net/anime/21/One_Piece"
  },
  {
    title: "Jujutsu Kaisen",
    genre: "Action, Supernatural",
    image: "https://cdn.myanimelist.net/images/anime/1171/109222.jpg",
    link: "https://myanimelist.net/anime/40748/Jujutsu_Kaisen"
  },
  {
    title: "Solo Leveling",
    genre: "Comedy, Action",
    image: "https://cdn.myanimelist.net/images/manga/1/227594.jpg",
    link: "https://myanimelist.net/manga/121496/Solo_Leveling"
  },
  {
    title: "Steins;Gate",
    genre: "Sci-Fi, Thriller",
    image: "https://cdn.myanimelist.net/images/anime/8/35137.jpg",
    link: "https://myanimelist.net/anime/9253/Steins_Gate"
  },
  {
    title: "Naruto",
    genre: "Action, Adventure",
    image: "https://upload.wikimedia.org/wikipedia/en/9/94/NarutoCoverTankobon1.jpg",
    link: "https://myanimelist.net/anime/20/Naruto"
  },
  {
    title: "Vinland Saga",
    genre: "Action, Historical",
    image: "https://cdn.myanimelist.net/images/anime/1048/102249.jpg",
    link: "https://myanimelist.net/anime/37521/Vinland_Saga"
  },
  {
    title: "Tokyo Ghoul",
    genre: "Horror, Supernatural",
    image: "https://cdn.myanimelist.net/images/anime/1498/134443.jpg",
    link: "https://myanimelist.net/anime/22319/Tokyo_Ghoul"
  }
];

const App = () => {
  return (
    <div className="container">
      <h1>Anime Favorites</h1>
      <div className="anime-grid">
        {animeList.map((anime, index) => (
          <AnimeCard
            key={index}
            image={anime.image}
            title={anime.title}
            genre={anime.genre}
            link={anime.link}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
