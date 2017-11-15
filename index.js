function stringToArray(input){
  let splitComma = input.split(',')
  let stringsInArray = []
  for (var i = 0; i < splitComma.length; i++) {
    stringsInArray.push(splitComma[i].split(''))
  }
  return stringsInArray
}

console.log(stringToArray('aqrst,ukaei,ffoo'));
console.log(stringToArray('qwer,tyui,asdf,ghjk'));