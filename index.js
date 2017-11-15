function stringToArray(arr) {
    let array = [];
    let arrPemisah = arr.split(',')
    for (let i = 0; i < arrPemisah.length; i++) {
        array.push([]);
        for (j = 0; j < arrPemisah[i].length; j++) {
            array[i].push(arrPemisah[i][j])
        }
    }
    return array;
}
console.log(stringToArray('asdasd,zxczxc,qweqwe'))
console.log(stringToArray('arief,manda'))