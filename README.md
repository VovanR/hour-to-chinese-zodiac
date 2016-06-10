# hour-to-chinese-zodiac

[![Commitizen friendly][commitizen-image]][commitizen-url]
[![XO code style][codestyle-image]][codestyle-url]

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Coveralls Status][coveralls-image]][coveralls-url]
[![Dependency Status][depstat-image]][depstat-url]
[![DevDependency Status][depstat-dev-image]][depstat-dev-url]

> Convert hour to [chinese zodiac][wiki-chinese-zodiac] name: 8 → 'dragon'

Demo: [vovanr.github.io/hour-to-chinese-zodiac][demo]

## Install

```
npm install --save hour-to-chinese-zodiac
```

## Usage

```js
var hourToChineseZodiac = require('hour-to-chinese-zodiac');

hourToChineseZodiac(8);
//=> 'dragon'

hourToChineseZodiac(3);
//=> 'tiger'

hourToChineseZodiac();
//=> ''
```

## License
MIT © [Vladimir Rodkin](https://github.com/VovanR)

[wiki-chinese-zodiac]: https://en.wikipedia.org/wiki/Chinese_zodiac#Hours
[demo]: http://vovanr.github.io/hour-to-chinese-zodiac

[commitizen-url]: http://commitizen.github.io/cz-cli/
[commitizen-image]: https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square

[codestyle-url]: https://github.com/sindresorhus/xo
[codestyle-image]: https://img.shields.io/badge/code_style-XO-5ed9c7.svg?style=flat-square

[npm-url]: https://npmjs.org/package/hour-to-chinese-zodiac
[npm-image]: http://img.shields.io/npm/v/hour-to-chinese-zodiac.svg?style=flat-square

[travis-url]: https://travis-ci.org/VovanR/hour-to-chinese-zodiac
[travis-image]: http://img.shields.io/travis/VovanR/hour-to-chinese-zodiac.svg?style=flat-square

[coveralls-url]: https://coveralls.io/r/VovanR/hour-to-chinese-zodiac
[coveralls-image]: http://img.shields.io/coveralls/VovanR/hour-to-chinese-zodiac.svg?style=flat-square

[depstat-url]: https://david-dm.org/VovanR/hour-to-chinese-zodiac
[depstat-image]: https://david-dm.org/VovanR/hour-to-chinese-zodiac.svg?style=flat-square

[depstat-dev-url]: https://david-dm.org/VovanR/hour-to-chinese-zodiac
[depstat-dev-image]: https://david-dm.org/VovanR/hour-to-chinese-zodiac/dev-status.svg?style=flat-square
