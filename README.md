# @depeng9527/tools

[![npm version](https://badge.fury.io/js/%40depeng9527%2Ftools.svg)](https://badge.fury.io/js/%40depeng9527%2Ftools)

Opinionated collection of common JavaScript / TypeScript utils by [Depeng0929](https://github.com/Depeng0929).



## Is
包括常用的数据类型判断。

```js
import {
  isRegExp,
  isFunction,
  isString,
  isNumber,
  isObject,
  isDate,
  isSymbol,
  isSet,
  isMap,
  isNull,
  isUndefined,
} from '@depng9527/tools'
```

* `isNil`: 是否是`undefined`或`null`
* `notNil`: 与`isNill`相反
* `isBrowser`：是否在游览器中

## String

* `ensurePrefix`

* `ensureSuffix`


## Math

常用的数学运算
```js
import {
  add, divide, subtract, multiply 
} from '@depng9527/tools'
```

* `sum`: 求数组的和
* `clamp`: `clamp(n, min, max)`返回n到min,max之间最近的点

## Array

* `range`

* `uniq`

* `at`

* `last`

* `head`

* `remove`

* `move`
*  `toArray`

## Object

* `deepClone`

* `deepMerge`

* `objectMap`

```js
// { b: 2 }
objectMap({ a: 1, b: 2 }, (k, v) => k === 'a' ? undefined : [k, v])
```


## Function
* `tap`: 通常执行一些副作用

```js
  function createUser(name: string): User {
    return tap(new User, user => {
      user.name = name
    })
  }
```

* `assert`: 断言

* `debug`: debug

## Vendor

* `throttle`

* `debounce`

* `findValueByKey`

* `isEmpty`


## time
* `formateTime`

* `relativeTime`

## pLimit
* `p`
