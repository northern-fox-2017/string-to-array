'use strict'

function stringToArray(str) {
  let arr = [],
      row = str.split(',').length

  for (let i = 0; i < row; i++) {
    arr.push([])
    let col = str.split(',')[i].length

    for (let j = 0; j < col; j++) {
      arr[i].push(str.split(',')[i][j])
    }
  }
  console.log(arr);
}

stringToArray('aqrst,ukaei,ffooo')
stringToArray('kamyu,kookk,kayak,gyitu,cyihh')
stringToArray('saya,ganteng,ga,sihh,?')
stringToArray('.,..,...,....,.....,......,.......,........,.........,..........')
