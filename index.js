function convert(str) {
  let arr = []
  let pecah = str.split(',')
  for (var i = 0; i < pecah.length; i++) {
    arr.push(pecah[i].split(''))
  }
  return arr
}

console.log(convert('aqrst,ukaei,ffooo'));
console.log(convert('qwer,tyui,asdf,ghjk'));
