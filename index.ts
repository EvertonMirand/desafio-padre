import { addDays } from "date-fns";

const days = { 0: true, 1: true, 2: true, 3: true, 4: true };

const getDaysOfInterval = (
  initialDateString: string = "2022-06-07T03:00:00.000Z",
  maxCount = 1000,
  daysOfWeekInObjcNumber: { [key: number]: boolean } = days
) => {
  const initialDate = new Date(initialDateString);

  const initialCount = 290;

  let count = initialCount;
  let curentDate = initialDate;
  const arrayOfEpisodes: { episode: number; day: Date }[] = [];
  while (count <= maxCount) {
    if (daysOfWeekInObjcNumber[curentDate.getDay()]) {
      arrayOfEpisodes.push({ episode: count, day: curentDate });

      count++;
    }

    curentDate = addDays(curentDate, 1);
  }
  return arrayOfEpisodes;
};

const arrayOfEpisodes = getDaysOfInterval();

console.table(arrayOfEpisodes);
