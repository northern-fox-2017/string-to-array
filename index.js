function stringToArray(words){
  let kata = words.split(',');
  let arr = [];
  for (var i = 0; i < kata.length; i++) {
    arr.push(kata[i].split(''));
 }
 return arr;
}

console.log(stringToArray('aqrst,ukaei,ffooo'))
