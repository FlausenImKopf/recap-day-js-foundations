function filterApiData(apiData, mandatoryKeys) {
  let result = [];
  for (let eachObject of apiData) {
    let count = 0;
    for (let eachKey of mandatoryKeys) {
      let keyCheck = eachObject[eachKey];
      if (keyCheck !== undefined && mandatoryKeys.length === 1) {
        result.push(eachObject);
      } else if (keyCheck !== undefined && count < mandatoryKeys.length - 1) {
        count++;
      } else if (keyCheck !== undefined && count === mandatoryKeys.length - 1) {
        result.push(eachObject);
      }
    }
  }
  return result;
}
