# cookie

## feu.cookie.set(key,value,expires)

- Desc

  设置cookie

- Params

  - `key` {String}  键
  - `value` {String}  值
  - `expires` {Number}  有效时长

  !> 注意有效时长单位为ms

- Usage

  ```javascript
  feu.cookie.set('name','val',10000) // 设置一个有效期10s的cookie
  ```

## feu.cookie.get(key)

 - Desc

   获取cookie

- Params

  - `key` {String} 键

- Returns

  - {String} 返回相应的值，如果没找到返回`''`

- Usage

  ```javascript
  feu.cookie.get('name')
  ```


## feu.cookie.delete(key)

- Desc

  删除某个cookie

- Params

  - `key` {String} 键

- Usage

  ```javascript
  feu.cookie.delete('name')
  ```