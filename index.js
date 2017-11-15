function strToArr(str) {
  var arrayKoma = str.split(',')
  var result = [];
  for (var i = 0; i < arrayKoma.length; i++) {
    var arrayTanpaSpasi = arrayKoma[i].split('');
    result.push([]);
    for (var j = 0; j < arrayTanpaSpasi.length; j++) {
      result[i].push(arrayTanpaSpasi[j]);
    }
  }
  return result;
}

console.log(strToArr('asd,dfg,hjk,qwer'));
