let string_to_array = (input,newArr = []) => {
  arrInput = input.split(',')
  if(input == ''){
    console.log(newArr);
    return newArr
  }else{
    let arrPush = arrInput[0].split('')
    newArr.push(arrPush);
    arrInput.splice(0,1)
    return string_to_array(arrInput.join(','),newArr)

  }
}

string_to_array('aqrst,ukaei,ffooo')
//f('aqrst,ukaei,ffooo')
