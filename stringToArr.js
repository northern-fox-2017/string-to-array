'use strict';

function stringToArr(str) {
    let splitStr = str.split('');
    let idxComma = -1;
    let newStr = [];
    let remvComma = [];
    let tempStr = '';

    while (splitStr.length !== 0) {
        idxComma = splitStr.indexOf(',');
        tempStr = splitStr.splice(0, idxComma);
        newStr.push(tempStr.join(''));
        remvComma = splitStr.splice(0, 2);

        if (splitStr.indexOf(',') === -1) {
            tempStr = splitStr.splice(0);
            newStr.push(tempStr.join(''));
        }
    }

    let jumlahRow = newStr.length;
    // let subLength = -1;
    // let jumlahCol = [];
    // for (let i = 0; i < jumlahRow; i++) {
    //     subLength = newStr[i].length;
    //     jumlahCol.push(subLength);
    // }

    let result = [];
    let splitArr = "";

    for (let j = 0; j < jumlahRow; j++) {
        result.push([]);
        for (let k = 0; k < newStr[j].length; k++) {
            splitArr = newStr[j].split('');
            result[j].push(splitArr[k]);
        }
        
    }
    console.log(result);
}

    stringToArr("aqrst, ukaei, ffooo");
    stringToArr("qwer, tyui, asdf, ghjk");
    stringToArr("qwr, tyui, df, ghjkm");