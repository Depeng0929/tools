# @depeng9527/tools

[![npm version](https://badge.fury.io/js/%40depeng9527%2Ftools.svg)](https://badge.fury.io/js/%40depeng9527%2Ftools)

Opinionated collection of common JavaScript / TypeScript utils by [Depeng0929](https://github.com/Depeng0929).



## Base

* `processIsNode`: 当前环境是否是Node
* `processIsBrowser`: 当前环境是否是游览器
* `isNumber`, `isStringNumber`, `isString`,`isPlainObject`,`isDate`,`isSet`, `isMap`
* `isNull`, `isUndefined`---`isNil`,`notNil`
* `getUrlParams`:获取URL参数
* `getHost`:当前域名



## Array

* `range`:自动生成数组
* `uniq`: 数组去重
* `sum`: 数组相加



## Node

* `isPortFree`: 当前端口是否空闲
* `findFreePort`: 返回可用端口



## Date

* `formatTime`:格式化日期



## Function

* `tap`:打印函数结果
* `assert`: 断言
* `debug`: console.log
* `debonce`,`throttle`



## Math

* `toFixed`: 浮点数
* `baseConvert`: 进制转换
* `add`,`subtract`,`multiply`,`divide`



## Object

* `isObject`: 判断是否是对象和数组
* `objectMap(obj, (key, value)=>[keyEnrich,valueEnrich])`: 过滤和map对象的key,value
* `deepMerge`
* `hasOwnProperty`
* `getSingleInstance`:单例模式
* `deepClone`



## Promise

* `timeSliceByGenerator`:时间切片
* `deferRender`: 延迟渲染
* `sleep`:
* `asyncPool`: 请求池







## Other

* `debugFirstPaint`: 首屏时间
* `findValueByKey`:

