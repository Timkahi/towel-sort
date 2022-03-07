
// You should implement your task here.

module.exports = function towelSort (matrix = 1) {
    if (matrix.length === 0 ) {
      return []
    }
    if(matrix != 1) {
        let finisArray = []
        let imptyLine = []
        const r = matrix.map((el, id) => {
          if (id % 2 === 0) {
            imptyLine.push(matrix[id])
          } else if (id % 2 === 1) {
            const t = matrix[id]
            const y = imptyLine.push(t.reverse())
          }
         return imptyLine
         });
         
         const extrs = r[0]
         const u = extrs.map(inter => {
           inter.forEach(integ => {
             finisArray.push(integ)
           });
           return finisArray
         })
         return finisArray
  } else {return []}
}
