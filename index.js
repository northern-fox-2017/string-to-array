let strArr = (input)=>{
    newArr = []
    split = input.split(',')
    for (let i = 0; i < split.length; i++) {
        pisah = split[i].split('')
        newArr.push(pisah)
        
    }
    
    return newArr
}

console.log(strArr('aqrst,ukdkasld,ffdfdsknlooo'))