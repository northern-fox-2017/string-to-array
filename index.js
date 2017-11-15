function stringToArray(str) {
    var result = [];

    var splittedWords = str.split(',').join('').split(' '); //remove ',' sign and space
    for (var i = 0; i < splittedWords.length; i++) {
        result.push([]);
    }

    for (var j = 0; j < splittedWords.length; j++) {
        for (var k = 0; k < splittedWords[0].length; k++) {
            result[j].push(splittedWords[j][k]);
        }
    }
    return result;
}

console.log(stringToArray("aqrst, ukaei, ffooo"));
console.log(stringToArray("qwer, tyui, asdf, ghjk"));