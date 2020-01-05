import getRandomCategories from "../helpers/getRandomCategories";
import getRandomMovieInfo from "../helpers/getRandomMovieInfo";

const getMoviesHistory = () => {
  return Array.from({ length: 40 }).map((_, i) => {
    return {
      imgUrl: `../thumbnail-horizontal/${i}.jpg`,
      name: "Romance Is a Bonus Book",
      info: getRandomMovieInfo(),
      categories: getRandomCategories()
    };
  });
};

export default getMoviesHistory();
