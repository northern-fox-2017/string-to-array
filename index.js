var stringToArray = (str) =>{
  var result = []
  var arr = str.split(',')
  for (let i = 0; i < arr.length; i++) {
    let row = []
    for (let j = 0; j < arr[i].length; j++) {
      row.push(arr[i][j])      
    }
    result.push(row)
  }
  return result
}

console.log(stringToArray('aqrst,ukaei,ffooo'))
console.log(stringToArray('qwer,tyui,asdf,ghjk'))