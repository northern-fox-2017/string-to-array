function strToArr(arr) {
  // your code here
let split = arr.split(',')
let board = []

  for (let i = 0; i < split.length; i++) {
    board.push([])
    for (let j = 0; j < split[i].length; j++) {
      board[i].push(split[i][j])
    }
  }
    return board
}

console.log(strToArr('aqrst,ukaei,ffooo'));
