
// rekursif
//
let nestedArray = (str,arr =[])=>{
  // let index = str.indexOf(',')
  // console.log(str.slice(index));
  let newStr = str.split(',')
  if (str.length < 1){
    return arr
  }

  let array = []

  for (var i = 0; i < newStr[0].length; i++) {
    array.push(newStr[0][i])
  }
  arr.push(array)

  newStr = newStr.splice(1,newStr.length).join(',');




  return nestedArray(newStr,arr)
}

console.log(nestedArray('agung,sajsh,asjks'));





// let nestedArray = (str)=>{
//   let newStr = str.split(',')
//   if (newStr.length === 0){
//     arr.push(array)
//     return array
//   }
//   // let arr = []
//   let array = []
//
//   for (var i = 0; i < newStr[0].length; i++) {
//     array.push(newStr[0][i])
//   }
//   // arr.push(array)
//
//   newStr = newStr.splice(1,newStr.length).join(',');
//   if (str.length>1){
//     // console.log('test');
//     let arr = array
//     // console.log(arr);
//     return [arr + [nestedArray(newStr)]]
//   }
//
//
//
//   // return nestedArray(newStr)
// }
//
// console.log(nestedArray('agung,sajsh,asjks'));
// Biasa



//
// let nestedArray = (str)=>{
//   let arr = str.split(',')
//   console.log(arr);
//   let array = []
//   for (var i = 0; i < arr.length; i++) {
//     array.push([])
//     for (var j = 0; j < arr[i].length; j++) {
//       array[i].push(arr[i][j])
//     }
//   }
//
//   return array
// }
//
// console.log(nestedArray('akasj,sajsh,asjks'));
