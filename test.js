const { equal } = require('assert')
const negate = require('.')

equal(negate('is positive'), 'is not positive')
equal(negate('responds to'), 'does not respond to')
