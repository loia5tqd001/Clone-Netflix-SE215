import { sampleSize, random } from "lodash";

const getRandomCategories = () => {
  const categories = [
    "Sentimental",
    "Romantic",
    "Dramedy",
    "Exciting",
    "Fantasy Movie",
    "Slick",
    "Psychological",
    "Dark",
    "Intimate",
    "Emotional",
    "Teen",
    "Offbeat",
    "Absurb",
    "Chilling",
    "Children & Family",
    "Action",
    "Suspenseful",
    "Mistery",
    "Violen"
  ];

  return sampleSize(categories, random(3, 4));
};

export default getRandomCategories