function stringToArray(str) {
  let arr = [];
  let spl = str.split(',');

  for(let i = 0 ; i < spl.length ; i++) {
    arr.push([]);
      for(let j = 0 ; j < spl[i].length ; j++) {
        arr[i].push(spl[i][j]);
      }
  }
  return arr;
}


console.log(stringToArray("aqrst,ukaei,ffooo"));
console.log('==============================');
console.log(stringToArray("qwert,asdfg,zxcvb"));
console.log('==============================');
console.log(stringToArray("qwer,asdf,zxcv"));
console.log('==============================');
console.log(stringToArray("qwerop,asdffg,zxcver,jhgsdf"));
