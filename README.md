# FEU

[![Greenkeeper badge](https://badges.greenkeeper.io/loveonelong/feu.svg)](https://greenkeeper.io/)

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

!> 这还是一个非常简单的版本,api可能会随时有变动,也可能潜在很大的风险/bug,建议拿来学习参考

以后会发布0.1.0正式版

- 当前处于测试版本
- 兼容仅限于chrome >= 40、IE >= 9

## Docs

Language:

  - [Chinese-中文文档](https://loveonelong.github.io/feu)

## Usage

> 为了兼容ie <= 11, chrome < 45,无论使用哪种方式引入，都需要在项目里提前引入babel-polyfill

```html
<!-- example -->
<script src="//cdn.bootcss.com/babel-polyfill/7.0.0-beta.3/polyfill.min.js"></script>
```

### Npm

> 推荐使用，以便获得ide的智能提示

Install（注意，仅能用于前端项目）

```shell
$ npm install --save feu
```

Include

```javascript
var feu = require('feu')
feu.doSomething()
```

### Browser

下载`/dist/feu.min.js`，遵循umd模块规范

```html
<script src="feu.min.js"></script>
<script>
  feu.doSomething()
</script>引入项目
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
