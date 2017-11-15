function stringArray(array) {
    let newArr = []
    let splitArray = array.split(',')
    for(let i=0;i<splitArray.length;i++){
        let row = []
        for(let j=0; j<splitArray[i].length;j++){
            row.push(splitArray[i][j])
        }
        newArr.push(row)
    }
    return newArr
}
console.log(stringArray('aqrst,ukaei,ffooo'))