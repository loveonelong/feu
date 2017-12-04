# FEU

> Font-End Utils 前端工具类库

<p>
<a href="https://github.com/loveonelong/feu">
<img src="https://travis-ci.org/loveonelong/feu.svg?branch=master">
</a>
<a href="https://www.npmjs.com/package/feu">
<img src="https://img.shields.io/npm/l/feu.svg?style=flat-square" alt>
</a>
<a href="https://www.npmjs.com/package/feu">
<img src="https://img.shields.io/npm/v/feu.svg?style=flat-square" alt>
</a>
<a href="https://www.npmjs.com/package/feu">
<img src="https://img.shields.io/npm/dm/feu.svg?style=flat-square" alt>
</a>
<a href="https://www.npmjs.com/package/feu">
<img src="https://img.shields.io/npm/dt/feu.svg?style=flat-square" alt>
</a>
</p>

!> 这还是一个非常简单的版本,api可能会随时有变动,可以拿来学习参考

- Version Status: Alpha
- 目前兼容仅限于chrome >= 40、IE >= 9
- 尽可能使用最新的版本！

## Docs

Language:

  - [Chinese-中文文档](https://loveonelong.github.io/feu)

## Usage

> 为了兼容ie <= 11, chrome < 45,无论使用哪种方式引入，都需要提前引入babel-polyfill

### Browser

下载`/dist/feu.min.js`，遵循umd模块规范
```html
<script src="feu.min.js"></script>
<script>
  feu.doSomething()
</script>引入项目
```

### Npm

Install（注意，仅能用于前端项目）

```shell
$ npm install --save-dev feu
```

Include

```javascript
var feu = require('feu')
feu.doSomething()
```

如果你在项目里使用了es6/7语法，并配置了babel，推荐下面的写法，以便于获得IDE的提示

```javascript
const feu = require('feu/main')
feu.doSomething()
```

## Dev

### Build

```shell
$ npm run build
```

### Test

> mocha-phantomjs、chai

```shell
$ npm run test
```
