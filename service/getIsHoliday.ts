const requestURL = "https://holidays-jp.github.io/api/v1/date.json";

export const getIsHoliday = async (): Promise<boolean | undefined> => {
  const nowDate = new Date();
  const nowDay = nowDate.getDay();

  const responseJson = await fetch(requestURL)
    .then((response) => response.json())
    .catch((error) => {
      alert("ERROR: " + error);
      return undefined;
    });

  const isWeekend = nowDay === 0 || nowDay === 6;
  const isPublicHoliday = formatDate(nowDate) in responseJson;

  return isWeekend || isPublicHoliday ? true : false;
};

const formatDate = (date: Date) => {
  const y = date.getFullYear();
  const m = ("00" + (date.getMonth() + 1)).slice(-2);
  const d = ("00" + date.getDate()).slice(-2);
  return y + "-" + m + "-" + d;
};
