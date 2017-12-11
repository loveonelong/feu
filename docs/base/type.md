# type

## feu.type(any)

- Desc

  检测数据类型

- Params

  - `any` {any}  需要检测的数据

- Returns
  
  - {String} 数据类型（小写）

- Usage

  ```javascript
  feu.type(1) // -> "number"
  feu.type(new Date) // -> "date"
  feu.type([]) // -> "array"
  ...
  ```