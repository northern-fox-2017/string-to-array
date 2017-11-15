function stringToArray (string){
  let arr = []
  let newString = string.split(',')
  for(let i = 0; i < newString.length; i++){
    arr.push(newString[i].split(''))
  }
  return arr

  console.log(newString[0].split(''));

}
console.log(stringToArray('hjfcb,jvQwo,pzxns'));
