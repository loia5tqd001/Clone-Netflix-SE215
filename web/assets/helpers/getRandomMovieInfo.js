import { sample, random } from "lodash";

// https://stackoverflow.com/questions/11796093/is-there-a-way-to-provide-named-parameters-in-a-function-call-in-javascript
const getRandomMovieInfo = ({ percentMatch = 96 } = {}) => {

  const getRandomMovieLong = () => {
    const getRandomSeason = () => `${random(1, 6)} Season`
    const getRandomHour = () => `${random(1, 3)}h ${random(0, 59)}m`

    return sample([true, false]) ? getRandomSeason() : getRandomHour()
  };

  return [`${percentMatch}% Match`, getRandomMovieLong()]
}

export default getRandomMovieInfo