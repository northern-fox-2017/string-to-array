function toArray(str) {

  let array = [];
  let word = str.split(',');

  for(let i=0; i<word.length; i++) {
    array.push(word[i].split(''))
  }
  return array
}

console.log(toArray('aqrst,ukaei,ffooo'));
console.log(toArray('qwer,tyui,asdf,ghjk'));
