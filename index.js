module.exports = function negate(string) {
  const SIMPLE_CONDITIONS = ['gt', 'lt', 'gte', 'lte']
  if (SIMPLE_CONDITIONS.includes(string)) return 'n' + string
  if (string.startsWith('is')) {
    if (string.startsWith('not', 3)) return string
    return string.substr(0, 2) + ' not ' + string.substr(3)
  } else if (string.startsWith('are')) {
    return string.substr(0, 3) + ' not ' + string.substr(4)
  } else if (string.startsWith('has')) {
    return 'does not ' + string.replace('has', 'have')
  } else if (string.startsWith('have')) {
    return 'do not ' + string
  } else if (string.startsWith('bitwise')) {
    return 'not ' + string
  } else if (string.endsWith('with') || string.endsWith('to')) {
    string = string.split(' ')
    string[0] = string[0].slice(0, string[0].length - 1)
    return 'does not ' + string.join(' ')
  } else if (string === 'equals' || string === 'contains') {
    return 'does not ' + string.substring(0, string.length - 1)
  } else if (string === 'matches') {
    return 'does not match'
  } else if (string === 'includes') {
    return 'does not include'
  }
  return string
}
