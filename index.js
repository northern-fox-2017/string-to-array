const arrayOfString = (str) => {
  str = str.split(',');
  const arrayResult = [];

  for (let i = 0; i < str.length; i++) {
    arrayResult.push(str[i].split(''));
  }

  return arrayResult;
}

console.log(arrayOfString('aqrst,ukaei,ffooo'));