function stringToArray(str){
  let arrStr = str.split(',');
  let arr = []

  arrStr.forEach((nestedArr) => {
    arr.push(nestedArr.split(''))
  })
  return arr
}
console.log(stringToArray('aqrst,ukaei,ffooo'))
console.log(stringToArray('qwer,tyui,asdf,ghjk'))
