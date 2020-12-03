const fs = require('fs')
const path = require('path')

const treeSymbol = '#'

function task1 (columnStepsize, rowStepsize) {
  // const input = fs.readFileSync(path.join(__dirname, 'example_input.txt'), 'utf-8')
  const input = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf-8')
  const lines = input.split('\n')

  // map layout: map[y][x] or map [row][col]
  const map = lines.map(line => line.split(''))
  // map[0][0] // top-left
  // map[yMax][xMax] // bottom-right

  const rows = map.length
  let treeCounter = 0
  let columnIndex = columnStepsize
  for (let rowIndex = rowStepsize; rowIndex < rows; rowIndex += rowStepsize) {
    const row = map[rowIndex]
    if (columnIndex >= row.length) {
      columnIndex = columnIndex % row.length
    }

    const symbol = row[columnIndex]
    if (symbol === treeSymbol) {
      treeCounter++
    }

    columnIndex += columnStepsize
  }

  return treeCounter
}

function task2 () {
  const treesSlope1 = task1(1, 1)
  const treesSlope2 = task1(3, 1)
  const treesSlope3 = task1(5, 1)
  const treesSlope4 = task1(7, 1)
  const treesSlope5 = task1(1, 2)

  return treesSlope1 * treesSlope2 * treesSlope3 * treesSlope4 * treesSlope5
}

// console.log('hit', task1(3, 1), 'trees')
console.log('multiply result of slopes: ', task2())
