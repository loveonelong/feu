# FEU
> Font-End Utils 前端工具类库

<p>
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

- 这还是一个非常简单的版本
- Version Status: Alpha
- 目前兼容有可能仅限于chrome 40+
- 尽可能使用相同大版本号的最新的版本！

## Use

### Browser

下载`dist`目录下的`feu-[version].min.js`，遵循umd模块规范
```html
<script src="feu.min.js"></script>
<script>
  feu.doSomething()
</script>
```

### Npm

安装（注意，仅能用于前端项目）
```shell
$ npm install --save-dev feu
```
引入项目
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

### 构建

```shell
$ npm run build
```
### 测试

> mocha-phantomjs、chai
```shell
$ npm run test
```
## Doc

*稍后更新

