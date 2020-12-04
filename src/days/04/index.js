const fs = require('fs')
const path = require('path')

function task1 () {
  // const input = fs.readFileSync(path.join(__dirname, 'example_input.txt'), 'utf-8')
  const input = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf-8')
  const lines = input.split('\n')

  const passports = []
  for (let i = 0; i < lines.length; i++) {
    const passport = []
    let line
    let lineContents
    do {
      line = lines[i]
      if (!line) break
      lineContents = line.split(' ')

      passport.push(...lineContents)

      i++
    } while (lineContents[0] !== '')

    passports.push(passport)
  }

  let validPassports = 0
  for (let j = 0; j < passports.length; j++) {
    const passportEntries = passports[j]
    const passportObj = {}
    for (let k = 0; k < passportEntries.length; k++) {
      const passportEntry = passportEntries[k]
      const entryId = passportEntry.split(':')[0]
      const entryValue = passportEntry.split(':')[1]
      passportObj[entryId] = entryValue
    }

    if (passportObj.cid) {
      delete passportObj.cid
    }

    if (Object.keys(passportObj).length >= 7) {
      validPassports++
    }
  }

  console.log(validPassports, 'passports are valid')
}

function validatePassport (passport) {
  if (!passport.byr) return false
  if (!(passport.byr >= 1920 && passport.byr <= 2002)) {
    return false
  }

  if (!passport.iyr) return false
  if (!(passport.iyr >= 2010 && passport.iyr <= 2020)) {
    return false
  }

  if (!passport.eyr) return false
  if (!(passport.eyr >= 2020 && passport.eyr <= 2030)) {
    return false
  }

  if (!passport.hgt) return false
  if (passport.hgt.includes('cm')) {
    const height = passport.hgt.split('cm')[0]
    if (!(height >= 150 && height <= 193)) {
      return false
    }
  } else if (passport.hgt.includes('in')) {
    const height = passport.hgt.split('in')[0]
    if (!(height >= 59 && height <= 76)) {
      return false
    }
  } else {
    return false
  }

  if (!passport.hcl) return false
  if (!passport.hcl.match(/#([0-9a-f]){6}/)) {
    return false
  }

  const validEyeColors = [
    'amb',
    'blu',
    'brn',
    'gry',
    'grn',
    'hzl',
    'oth'
  ]
  if (!passport.ecl) return false
  if (!validEyeColors.includes(passport.ecl)) {
    return false
  }

  if (!passport.pid) return false
  if (!(passport.pid.length === 9)) {
    return false
  }

  return true
}

function task2 () {
  // const input = fs.readFileSync(path.join(__dirname, 'example_input.txt'), 'utf-8')
  const input = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf-8')
  const lines = input.split('\n')

  const passports = []
  for (let i = 0; i < lines.length; i++) {
    const passport = []
    let line
    let lineContents
    do {
      line = lines[i]
      if (!line) break
      lineContents = line.split(' ')

      passport.push(...lineContents)

      i++
    } while (lineContents[0] !== '')

    passports.push(passport)
  }

  let validPassports = 0
  for (let j = 0; j < passports.length; j++) {
    const passportEntries = passports[j]
    const passportObj = {}
    for (let k = 0; k < passportEntries.length; k++) {
      const passportEntry = passportEntries[k]
      const entryId = passportEntry.split(':')[0]
      const entryValue = passportEntry.split(':')[1]
      passportObj[entryId] = entryValue
    }

    if (passportObj.cid) {
      delete passportObj.cid
    }

    if (validatePassport(passportObj)) {
      validPassports++
    }
  }

  console.log(validPassports, 'passports are valid')
}

// task1()
task2()
