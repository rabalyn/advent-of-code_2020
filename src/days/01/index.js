const path = require('path')
const fs = require('fs')

function task1 () {
  const input = fs.readFileSync(path.join(__dirname, './input.txt'), 'utf-8')
  const lines = input.split('\n')

  for (let i = 0; i < lines.length; i++) {
    const a = parseInt(lines[i])
    for (let j = i; j < lines.length; j++) {
      const b = parseInt(lines[j])
      if (a + b === 2020) {
        return console.log('a: ', a, 'b: ', b, 'a * b = ', a * b)
      }
    }
  }
}

function task2 () {
  const input = fs.readFileSync(path.join(__dirname, './input.txt'), 'utf-8')
  const lines = input.split('\n')

  for (let i = 0; i < lines.length; i++) {
    const a = parseInt(lines[i])
    for (let j = i; j < lines.length; j++) {
      const b = parseInt(lines[j])
      for (let k = j; k < lines.length; k++) {
        const c = parseInt(lines[k])
        if (a + b + c === 2020) {
          return console.log('a: ', a, 'b: ', b, 'c: ', c, 'a * b * c = ', a * b * c)
        }
      }
    }
  }
}

task1()
task2()
