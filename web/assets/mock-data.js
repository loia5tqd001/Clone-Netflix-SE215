import _ from 'lodash'

import scrappedMovies from './scrapped-movies.json'

const getRandomCategories = () => {
  const categories = [
    'Sentimental',
    'Romantic',
    'Dramedy',
    'Exciting',
    'Fantasy Movie',
    'Slick',
    'Psychological',
    'Dark',
    'Intimate',
    'Emotional',
    'Teen',
    'Offbeat',
    'Absurb',
    'Chilling',
    'Children & Family',
    'Action',
    'Suspenseful',
    'Mistery',
    'Violen'
  ]
    
  return _.sampleSize(categories, _.random(3, 4))
}

// https://stackoverflow.com/questions/11796093/is-there-a-way-to-provide-named-parameters-in-a-function-call-in-javascript
const getRandomMovieInfo = ({ percentMatch = 96 } = {}) => {

  const getRandomMovieLong = () => {
    const getRandomSeason = () => `${_.random(1, 6)} Season`
    const getRandomHour = () => `${_.random(1, 3)}h ${_.random(0, 59)}m`

    return _.sample([true, false]) ? getRandomSeason() : getRandomHour()
  };

  return [`${percentMatch}% Match`, getRandomMovieLong()]
}

const getCarousels = () => {
  return scrappedMovies.map((carousel, i) => {

    return {
      header: carousel.header,
      movies: carousel.movies.map((movie, j) => ({
        imgUrl: movie.imgSrc,
        name: movie.name,
        info: getRandomMovieInfo({ percentMatch: 95 - (i + j) }),
        categories: getRandomCategories()
      }))
    }
  })
}

export const carousels = getCarousels()



const getHistory = () => {
  return Array.from({ length: 40 }).map((_, i) => {
    return {
      imgUrl: `../thumbnail-horizontal/${i}.jpg`,
      name: 'Romance Is a Bonus Book',
      info: getRandomMovieInfo(),
      categories: getRandomCategories()
    }
  })
};

export const history = getHistory()



const getWatchingCarousel = () => {
  return {
    header: "Related to THE BOSS BABY",
    movies: Array.from({ length: 4 }).map((_, i) => {
      return {
        imgUrl: `../thumbnail-horizontal/${i}.jpg`,
        name: "The Boss Baby",
        info: getRandomMovieInfo(),
        categories: getRandomCategories()
      };
    })
  };
};

export const watchingCarousel = getWatchingCarousel();
