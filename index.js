module.exports = function negate(string) {
  if (string.startsWith('is')) {
    if (string.startsWith('not', 3)) {
      return string
    }
    return string.substr(0, 2) + ' not ' + string.substr(3)
  } else if (string.startsWith('are')) {
    return string.substr(0, 3) + ' not ' + string.substr(4)
  }
  return string
}
