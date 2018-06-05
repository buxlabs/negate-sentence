module.exports = function negate(string) {
  if (string === 'is positive') return 'is not positive'
  if (string === 'responds to') return 'does not respond to'
  return string
}
