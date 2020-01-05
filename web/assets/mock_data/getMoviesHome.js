import moviesHome from "./movies_home.json";

import getRandomCategories from "../helpers/getRandomCategories";
import getRandomMovieInfo from "../helpers/getRandomMovieInfo";

const getMoviesHome = () => {
  return moviesHome.map((carousel, i) => {
    return {
      header: carousel.header,
      movies: carousel.movies.map((movie, j) => ({
        imgUrl: movie.imgSrc,
        name: movie.name,
        info: getRandomMovieInfo({ percentMatch: 95 - (i + j) }),
        categories: getRandomCategories()
      }))
    };
  });
};

export default getMoviesHome();
