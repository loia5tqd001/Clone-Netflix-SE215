import getRandomCategories from "../helpers/getRandomCategories";
import getRandomMovieInfo from "../helpers/getRandomMovieInfo";

const getMoviesRelatedWatching = () => {
  return {
    header: "Related to THE NUCRAKER AND THE FOUR REALMS",
    movies: Array.from({ length: 5 }).map((_, i) => {
      return {
        imgUrl: `../thumbnail-horizontal/${i}.jpg`,
        name: "The Boss Baby",
        info: getRandomMovieInfo(),
        categories: getRandomCategories()
      };
    })
  };
};

export default getMoviesRelatedWatching();
