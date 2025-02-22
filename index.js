let array = ["HELLO", 122, -10, "Java", "JavaScript", 500, "Nodejs"];
function compNumStr(e1, e2) {
  const isE1Number = typeof e1 === "number";
  const isE2Number = typeof e2 === "number";
  let result;
  if (isE1Number && isE2Number) {
    result = compareNumbers(e1, e2);
  } else if (!isE1Number && !isE2Number) {
    result = comapareStr(e1, e2);
  } else {
    result = isE1Number ? -1 : 1;
  }
  return result;
}

function compareNumbers(a, b) {
  return b - a;
}

function comapareStr(str1, str2) {
  let result = 0;
  if (str1 < str2) {
    result = -1;
  }
  if (str1 > str2) {
    result = 1;
  }
  return result;
}

const sorted = array.sort(compNumStr);
console.log(sorted);
