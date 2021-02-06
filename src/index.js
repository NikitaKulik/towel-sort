
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let rev = false
  var arr = []

  if(matrix == undefined) {
    return []
  }

  for(let i=0; i<matrix.length; i++) {
    if(!rev) {
      arr = arr.concat(matrix[i])
      rev = true
    } else {
      arr = arr.concat(matrix[i].reverse())
      rev = false  
    }
  }

  return arr
}
