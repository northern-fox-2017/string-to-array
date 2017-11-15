function strToArray(str) {
  let strSplit = str.split(',');

  let newArr = []

  for (let i = 0; i < strSplit.length; i++) {
    newArr.push(strSplit[i].split(''));
  }

  return newArr;
}

console.log(strToArray('aqrst,ukaei,ffooo'));

console.log('\n ------------------------------ \n');
console.log(strToArray('qwer,tyui,asdf,ghjk'));
