# cookie

## feu.cookie.set(key,value[,options])

- Desc

  设置cookie

- Params

  - `key` {string}

  - `value` {string}
  
  - `options` {AnyJSON} 配置项

    - `expires` {string | number | Data} 有效期
    - `domain` {string}
    - `path` {string}
    - `secure` {boolean}

- Returns

  - {boolean} true设置成功 | false设置失败(可能参数有误)

- Usage

  ```javascript
  feu.cookie.set('foo','123',{expires: Infinity}) // 设置一个有效期永久的cookie
  ```

## feu.cookie.get(key)

 - Desc

   获取cookie

- Params

  - `key` {string}

- Returns

  - {string | null} 找到与key对应的值返回string | 找不到或传参错误返回null

- Usage

  ```javascript
  feu.cookie.get('foo')
  ```


## feu.cookie.del(key[,options])

- Desc

  删除cookie

- Params

  - `key` {string}

  - `options` {AnyJSON}

    - `domain` {string}
    - `path` {string}

- Returns

  - {boolean} true 删除成功 | false key不存在或参数有误

- Usage

  ```javascript
  feu.cookie.delete('foo',{path: '/'})
  ```


## feu.cookie.hasKey(key)

- Desc

  cookie中是否存在某个key

- Params

  - `key` {string}

- Returns

  - {boolean} true 存在 | false 不存在

- Usage

  ```javascript
  feu.cookie.hasKey('foo')
  ```


## feu.cookie.keys()

- Desc

  返回cookie中所有的key

- Params

- Returns

  - {Array<string>}

- Usage

  ```javascript
  feu.cookie.keys()
  ```