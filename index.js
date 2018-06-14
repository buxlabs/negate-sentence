module.exports = function negate(string) {
  if (string.startsWith('is')) {
    if (string.startsWith('not', 3)) {
      return string
    }
    return string.substr(0, 2) + ' not ' + string.substr(3)
  }
  return string
}
