function sameFrequency(num1, num2) {
  let str1 = num1.toString();
  let str2 = num2.toString();

  if (str1.length !== str2.length) {
    return false;
  }

  let obj = {};

  for (let i = 0; i < str1.length; i++) {
    let val = str1[i];
    obj[val] ? (obj[val] += 1) : (obj[val] = 1);
  }

  for (let i = 0; i < str2.length; i++) {
    let val = str2[i];
    if (!obj[val]) {
      return false;
    } else {
      obj[val]--;
    }
  }

  return true;
}

sameFrequency(182, 281);
