const requestURL = "/api/timetable";

export const getTimetable = async (
  stationIndex: number,
  isForSeishin: boolean
): Promise<object | undefined> => {
  const response = await fetch(requestURL, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      stationIndex: stationIndex,
      isForSeishin: isForSeishin,
    }),
  })
    .then((response) => response.json())
    .catch((error) => {
      alert("ERROR: " + error);
      return undefined;
    });

  return response;
};
