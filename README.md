# negate-sentence

## How does it work?

It takes a sentence, e.g. `is positive` and returns the negation `is not positive`.

## Installation

```bash
npm install negate-sentence
```

## Usage

```js
const negate = require('negate-sentence')
const sentence = negate('is negative')
console.log(sentence) // 'is not negative'
```

## How does it work?

It's based on simple string manipulation, nothing fancy, it wasn't tested on more complex sentences. It was created to remove some repetition in a template engine.

Please feel free to send PRs that improve the lib.
