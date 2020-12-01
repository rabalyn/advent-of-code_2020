const fs = require('fs')
const path = require('path')

for (let i = 1; i < 25; i++) {
  const x = i < 10 ? `0${i}` : `${i}`
  if (i < 24) {
    console.log(`"start:${x}": "node src/days/${x}/index.js",`)
  } else {
    console.log(`"start:${x}": "node src/days/${x}/index.js"`)
  }
  fs.mkdirSync(path.join(__dirname, 'src', 'days', x), { recursive: true })
  fs.writeFileSync(path.join(__dirname, 'src', 'days', x, 'index.js'),
`const fs = require('fs')
const path = require('path')

function task1 () {
  const input = fs.readFileSync(path.join(__dirname, 'example_input.txt'), 'utf-8')
  // const input = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf-8')
  const lines = input.split('\\n')
  console.log(lines)
}

function task2 () {
  const input = fs.readFileSync(path.join(__dirname, 'example_input.txt'), 'utf-8')
  // const input = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf-8')
  const lines = input.split('\\n')
  console.log(lines)
}

task1()
// task2()
`)
  fs.writeFileSync(path.join(__dirname, 'src', 'days', x, 'input.txt'), '')
  fs.writeFileSync(path.join(__dirname, 'src', 'days', x, 'example_input.txt'), '')
}
