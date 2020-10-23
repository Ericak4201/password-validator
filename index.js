function isLowerCase(password, i) {
  return password.charCodeAt(i) >= 97 && password.charCodeAt(i) <= 122
}

function isUpperCase(password, i) {
  return password.charCodeAt(i) >= 65 && password.charCodeAt(i) <= 90
}

function isNum(password, i) {
  return !isNaN(password[i])
}


function validatePassword(password) {
  if (password.length < 8) {
    return false
  }


  let upper = 0
  let lower = 0
  let num = 0
  let special = 0

  for (let i = 0; i < password.length; i++) {
    if (isLowerCase(password, i)) {
      lower++
    } else if (isUpperCase(password, i)) {
      upper++
    } else if (isNum(password, i)) {
      num++
    } else special++
  }

  return lower > 0 && upper > 0 && num > 0 && special > 0
}
module.exports = validatePassword