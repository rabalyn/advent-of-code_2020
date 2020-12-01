const fs = require('fs')
const path = require('path')

function task1 () {
  const input = fs.readFileSync(path.join(__dirname, 'example_input.txt'), 'utf-8')
  // const input = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf-8')
  const lines = input.split('\n')
  console.log(lines)
}

function task2 () {
  const input = fs.readFileSync(path.join(__dirname, 'example_input.txt'), 'utf-8')
  // const input = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf-8')
  const lines = input.split('\n')
  console.log(lines)
}

task1()
// task2()
