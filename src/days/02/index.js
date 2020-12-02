const fs = require('fs')
const path = require('path')

function task1 () {
  // const input = fs.readFileSync(path.join(__dirname, 'example_input.txt'), 'utf-8')
  const input = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf-8')
  const lines = input.split('\n')
  let validPasswords = 0
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]
    const policy = line.split(':')[0]
    const policyMin = policy.split('-')[0]
    const policyMax = policy.split('-')[1].split(' ')[0]
    const policyContent = policy.split('-')[1].split(' ')[1]
    const password = line.split(':')[1]
    let match = 0
    const passwordChars = password.split('')
    passwordChars.shift()
    for (let j = 0; j < passwordChars.length; j++) {
      const passwordChar = passwordChars[j]
      if (passwordChar === policyContent) {
        match++
      }
    }

    if (match >= policyMin && match <= policyMax) {
      validPasswords++
    }
  }
  console.log(validPasswords, 'passwords are valid (policy 1)')
}

function task2 () {
  // const input = fs.readFileSync(path.join(__dirname, 'example_input.txt'), 'utf-8')
  const input = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf-8')
  const lines = input.split('\n')
  let validPasswords = 0
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]
    const policy = line.split(':')[0]
    const policyMin = policy.split('-')[0]
    const policyMax = policy.split('-')[1].split(' ')[0]
    const policyContent = policy.split('-')[1].split(' ')[1]
    const password = line.split(':')[1]
    let match = 0
    const passwordChars = password.split('')
    passwordChars.shift()
    if (passwordChars[policyMin - 1] === policyContent) {
      match++
    }

    if (passwordChars[policyMax - 1] === policyContent) {
      match++
    }

    if (match === 1) {
      validPasswords++
    }
  }
  console.log(validPasswords, 'passwords are valid (policy 2)')
}

task1()
task2()
