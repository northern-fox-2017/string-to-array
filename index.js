function stringToArray(string){
	let splitString = string.split(',');
	let result = [];
	for(let i = 0; i < splitString.length; i++){
		result.push([]);
		for(let j = 0; j< splitString[i].length; j++){
			result[i].push(splitString[i][j]);
		}
	}
	return result;
}

console.log(stringToArray('ada,saja,jatuh,dari,langit,kenapa'))