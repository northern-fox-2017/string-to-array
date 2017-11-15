function string_to_array(str) {
  let merge = str.split(',');
  let result = [];
  for (var i = 0; i < merge.length; i++) {
    result.push([]);
    // console.log(merge[i].length)
  for (var j = 0; j < merge[i].length; j++) {
    result[i].push(merge[i][j])
  }
}return result;
}
console.log(string_to_array('aqrst,ukaei,ffooo'));
