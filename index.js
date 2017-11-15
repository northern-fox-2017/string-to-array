var stringToArr = (str) => {
  let strRow = str.split(',');
  let arr = [];
  let letters;

  // console.log(strRow);
  for(let i = 0; i < strRow.length; i++) {
    arr.push(strRow[i].split(''));
  }

  return arr;
}

console.log(stringToArr('aqrst,ukaei,ffooo'));
console.log(stringToArr('qwer,tyui,asdf,ghjk'));
