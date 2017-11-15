function stringToArray(str){

  let arrResult = [];
  str = str.split(',');
  //console.log(str);

  for (let i = 0; i < str.length; i++){
    arrResult.push([]);
    for (let j=0; j < str[i].length; j++){
      arrResult[i].push(str[i][j]);
    }
  }
  return arrResult;
}

//DRIVER
console.log(stringToArray('aqrst,ukaei,ffooo'));
console.log(stringToArray('qwer,tyui,asdf,ghjk'));
