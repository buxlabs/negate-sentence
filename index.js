const { string: { singularize, pluralize } } = require('pure-utilities')

module.exports = function negate(string) {
  if (['gt', 'lt', 'gte', 'lte'].includes(string)) return `n${string}`

  const firstWord = string.split(' ')[0]
  if (firstWord === 'is' || firstWord === 'are') {
    return `${string.substr(0, firstWord.length)} not ${string.substr(firstWord.length + 1)}`
  }
  if (firstWord === 'has' || firstWord === 'have') {
    return firstWord[firstWord.length - 1] === 's' ? `does not ${string.replace('has', 'have')}` : `do not ${string}`
  }
  if (firstWord === 'bitwise') {
    return `not ${string}`
  }
  if (string.endsWith('with') || string.endsWith('to')) {
    string = string.split(' ')
    string[0] = string[0].slice(0, string[0].length - 1)
    return 'does not ' + string.join(' ')
  }

  let singular = singularize(firstWord)
  let pluaral = pluralize(singular)

  if (pluaral !== firstWord) {
    singular += 'e'
    return string
  }

  return `does not ${singular}`
}
