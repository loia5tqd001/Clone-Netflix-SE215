import _ from 'lodash'

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
  const headers = [
    'Continue watching for Loi',
    'Popular on Netflix',
    'Trending Now',
    'New Releases',
    'Top Picks for Loi',
    'Because you watched Vegabond',
    'Netflix Originals',
    'Comedies',
  ]

  return headers.map((header, i) => {
    const movies = Array.from({ length: _.random(4, 10) }).map((_, j) => {
      return {
        imgUrl: `../thumbnail-horizontal/${i * 10 + j}.jpg`,
        name: "Romance Is a Bonus Book",
        info: getRandomMovieInfo({ percentMatch: 100 - (i*10+j) }),
        categories: getRandomCategories()
      }
    })

    return {
      header,
      movies
    }
  })
}

export const carousels = getCarousels()

// export const carousels = [
//   {
//     header: "Continue watching for Loi",
//     movies: [
//       {
//         imgUrl: "../thumbnail-horizontal/2.jpg",
//         name: "Romance Is a Bonus Book",
//         info: ["98% Match", "1 Season"],
//         categories: ["Sentimental", "Romantic", "Dramedy"]
//       },
//       {
//         imgUrl: "../thumbnail-horizontal/2.jpg",
//         name: "Romance Is a Bonus Book",
//         info: ["98% Match", "1 Season"],
//         categories: ["Sentimental", "Romantic", "Dramedy"]
//       },
//       {
//         imgUrl: "../thumbnail-horizontal/2.jpg",
//         name: "Romance Is a Bonus Book",
//         info: ["98% Match", "1 Season"],
//         categories: ["Sentimental", "Romantic", "Dramedy"]
//       },
//       {
//         imgUrl: "../thumbnail-horizontal/2.jpg",
//         name: "Romance Is a Bonus Book",
//         info: ["98% Match", "1 Season"],
//         categories: ["Sentimental", "Romantic", "Dramedy"]
//       }
//     ]
//   },
//   {
//     header: "Popular on Netflix",
//     movies: [
//       {
//         imgUrl: "../thumbnail-horizontal/2.jpg",
//         name: "Romance Is a Bonus Book",
//         info: ["98% Match", "1 Season"],
//         categories: ["Sentimental", "Romantic", "Dramedy"]
//       },
//       {
//         imgUrl: "../thumbnail-horizontal/2.jpg",
//         name: "Romance Is a Bonus Book",
//         info: ["98% Match", "1 Season"],
//         categories: ["Sentimental", "Romantic", "Dramedy"]
//       },
//       {
//         imgUrl: "../thumbnail-horizontal/2.jpg",
//         name: "Romance Is a Bonus Book",
//         info: ["98% Match", "1 Season"],
//         categories: ["Sentimental", "Romantic", "Dramedy"]
//       },
//       {
//         imgUrl: "../thumbnail-horizontal/2.jpg",
//         name: "Romance Is a Bonus Book",
//         info: ["98% Match", "1 Season"],
//         categories: ["Sentimental", "Romantic", "Dramedy"]
//       }
//     ]
//   },
//   {
//     header: "Trending Now",
//     movies: [
//       {
//         imgUrl: "../thumbnail-horizontal/2.jpg",
//         name: "Romance Is a Bonus Book",
//         info: ["98% Match", "1 Season"],
//         categories: ["Sentimental", "Romantic", "Dramedy"]
//       },
//       {
//         imgUrl: "../thumbnail-horizontal/2.jpg",
//         name: "Romance Is a Bonus Book",
//         info: ["98% Match", "1 Season"],
//         categories: ["Sentimental", "Romantic", "Dramedy"]
//       },
//       {
//         imgUrl: "../thumbnail-horizontal/2.jpg",
//         name: "Romance Is a Bonus Book",
//         info: ["98% Match", "1 Season"],
//         categories: ["Sentimental", "Romantic", "Dramedy"]
//       },
//       {
//         imgUrl: "../thumbnail-horizontal/2.jpg",
//         name: "Romance Is a Bonus Book",
//         info: ["98% Match", "1 Season"],
//         categories: ["Sentimental", "Romantic", "Dramedy"]
//       }
//     ]
//   },
//   {
//     header: "New Releases",
//     movies: [
//       {
//         imgUrl: "../thumbnail-horizontal/2.jpg",
//         name: "Romance Is a Bonus Book",
//         info: ["98% Match", "1 Season"],
//         categories: ["Sentimental", "Romantic", "Dramedy"]
//       },
//       {
//         imgUrl: "../thumbnail-horizontal/2.jpg",
//         name: "Romance Is a Bonus Book",
//         info: ["98% Match", "1 Season"],
//         categories: ["Sentimental", "Romantic", "Dramedy"]
//       },
//       {
//         imgUrl: "../thumbnail-horizontal/2.jpg",
//         name: "Romance Is a Bonus Book",
//         info: ["98% Match", "1 Season"],
//         categories: ["Sentimental", "Romantic", "Dramedy"]
//       },
//       {
//         imgUrl: "../thumbnail-horizontal/2.jpg",
//         name: "Romance Is a Bonus Book",
//         info: ["98% Match", "1 Season"],
//         categories: ["Sentimental", "Romantic", "Dramedy"]
//       }
//     ]
//   },
//   {
//     header: "Top Picks for Loi",
//     movies: [
//       {
//         imgUrl: "../thumbnail-horizontal/2.jpg",
//         name: "Romance Is a Bonus Book",
//         info: ["98% Match", "1 Season"],
//         categories: ["Sentimental", "Romantic", "Dramedy"]
//       },
//       {
//         imgUrl: "../thumbnail-horizontal/2.jpg",
//         name: "Romance Is a Bonus Book",
//         info: ["98% Match", "1 Season"],
//         categories: ["Sentimental", "Romantic", "Dramedy"]
//       },
//       {
//         imgUrl: "../thumbnail-horizontal/2.jpg",
//         name: "Romance Is a Bonus Book",
//         info: ["98% Match", "1 Season"],
//         categories: ["Sentimental", "Romantic", "Dramedy"]
//       },
//       {
//         imgUrl: "../thumbnail-horizontal/2.jpg",
//         name: "Romance Is a Bonus Book",
//         info: ["98% Match", "1 Season"],
//         categories: ["Sentimental", "Romantic", "Dramedy"]
//       }
//     ]
//   },
//   {
//     header: "Because you watched Vegabond",
//     movies: [
//       {
//         imgUrl: "../thumbnail-horizontal/2.jpg",
//         name: "Romance Is a Bonus Book",
//         info: ["98% Match", "1 Season"],
//         categories: ["Sentimental", "Romantic", "Dramedy"]
//       },
//       {
//         imgUrl: "../thumbnail-horizontal/2.jpg",
//         name: "Romance Is a Bonus Book",
//         info: ["98% Match", "1 Season"],
//         categories: ["Sentimental", "Romantic", "Dramedy"]
//       },
//       {
//         imgUrl: "../thumbnail-horizontal/2.jpg",
//         name: "Romance Is a Bonus Book",
//         info: ["98% Match", "1 Season"],
//         categories: ["Sentimental", "Romantic", "Dramedy"]
//       },
//       {
//         imgUrl: "../thumbnail-horizontal/2.jpg",
//         name: "Romance Is a Bonus Book",
//         info: ["98% Match", "1 Season"],
//         categories: ["Sentimental", "Romantic", "Dramedy"]
//       }
//     ]
//   }
// ];
