function stringToArray(input){
    
    var pisah = input.split(",");
    var tampungTotal = []
    for(var i=0; i<pisah.length; i++){
        var tampungAwal = [];
        for(var j=0; j<pisah[i].length; j++){
            tampungAwal.push(pisah[i][j]);
        }
        tampungTotal.push(tampungAwal);
    }
    return tampungTotal;
}

console.log(stringToArray("aqrst,ukaei,ffooo"));