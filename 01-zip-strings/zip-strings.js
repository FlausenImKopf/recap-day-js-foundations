function zipStrings(strA, strB) {
  let zippedString = "";
  let aCount = 0;
  let bCount = 0;
  if (strA.length === 0) {
    zippedString = strB;
  } else if (strB.length === 0) {
    zippedString = strA;
  } else {
    while (aCount < strA.length || bCount < strB.length) {
      if (aCount < strA.length && bCount < strB.length) {
        zippedString += strA[aCount] + strB[bCount];
        aCount++;
        bCount++;
      } else if (aCount < strA.length) {
        zippedString += strA[aCount];
        aCount++;
      } else if (bCount < strB.length) {
        zippedString += strB[bCount];
        bCount++;
      }
    }
  }
  return zippedString;
}
