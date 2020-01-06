import { sample } from "lodash";

const getRandomMovieNames = () => {
  const movieNames = [
    'The King',
    'Alter',
    'The Princess switch',
    'Designated survivor',
    'Lucifer',
    'Stranger things',
    'Peaky Blinders',
    'Sand Castle',
    'Let it Snow',
    'The worst witch',
    'Shaft',
    'Daybreak',
    'Dynasty',
    'Wounds',
    'Anglela Chrismas',
    'Eli',
    'Sex Education',
    'The umbrella Academy',
  ];

  return sample(movieNames);
};

export default getRandomMovieNames;
