function extractClassName(sessionTitle) {
  let result = "";
  const months = {
    Januar: "01",
    Februar: "02",
    März: "03",
    Maerz: "03",
    April: "04",
    Mai: "05",
    Juni: "06",
    Juli: "07",
    August: "08",
    September: "09",
    Oktober: "10",
    November: "11",
    Dezember: "12",
  };
  const sessArray = sessionTitle.split(" ");
  const monthsKey = sessArray[3];
  const monthInNumber = months[monthsKey];
  if (
    sessionTitle.includes("Live-Session Class") &&
    sessArray[2].length === 4 &&
    monthInNumber !== undefined
  ) {
    result += sessArray[2] + "-" + monthInNumber;
  } else {
    result = null;
  }
  return result;
}
