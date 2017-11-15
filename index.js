function toArray(str){
  let split=str.split(',')
  // console.log(split);
  let board=[]

  for(let i=0;i<split.length;i++){
    board.push([])
    for(let j=0;j<split[i].length;j++){
      board[i].push(split[i][j])
    }
  }
  return board
// console.log(board);
}



//driver code
console.log(toArray('abhvshvde,vghfygyew,vhfhdgtd'));
