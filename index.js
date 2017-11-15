function stringToArray(input){
	
	var kata = input.split(',')
	var arr = [];
	for(var i = 0; i < kata.length; i++){
		arr.push(kata[i].trim().split(''))
	}
	return arr
}

console.log(stringToArray('aqrst, ukaei, ffooo'))
console.log(stringToArray('qwer, tyui, asdf, ghjk'))
