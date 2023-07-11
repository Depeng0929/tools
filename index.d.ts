type Arrayable<T> = T | Array<T>;
type Nullable<T> = T | null | undefined;
type numberLike = string | number;
type Fn<T = void> = () => T;
type MergeInsertions<T> = T extends object ? {
    [K in keyof T]: MergeInsertions<T[K]>;
} : T;
type DeepMerge<F, S> = MergeInsertions<{
    [K in keyof F | keyof S]: K extends keyof S & keyof F ? DeepMerge<F[K], S[K]> : K extends keyof S ? S[K] : K extends keyof F ? F[K] : never;
}>;
type ReturnType<T> = T extends ((...args: any[]) => infer P) ? P : never;
type DeepPartial<T> = {
    [U in keyof T]: T[U] extends object ? DeepPartial<T[U]> : T[U];
};
type Intersection<T extends object, U extends object> = Pick<T, Extract<keyof T, keyof U> & Extract<keyof U, keyof T>>;

declare const isRegExp: (p: unknown) => boolean;
declare const isFunction: (p: unknown) => boolean;
/**
 * 是否是string,注意'1'是number而不是string
 */
declare const isString: (p: unknown) => p is string;
/**
 * 是否是number, '1'是number而不是string
 */
declare const isNumberLike: (p: unknown) => p is number;
/**
 * is plainObject,不包括Null
 */
declare const isNumber: (p: unknown) => p is number;
declare const isObject: (p: unknown) => p is Object;
declare const isDate: (p: unknown) => p is Date;
declare const isSymbol: (p: unknown) => p is symbol;
declare const isSet: (p: unknown) => boolean;
declare const isMap: (p: unknown) => boolean;
declare const isNull: (p: unknown) => p is null;
declare const isUndefined: (p: unknown) => p is undefined;
/**
 * 检测是否为null或undefined
 */
declare const isNil: (p: unknown) => boolean;
/**
 * 不是null或undefined
 */
declare function notNil<T>(v: T | null | undefined): v is NonNullable<T>;
declare const isBrowser: boolean;

declare function add(...nums: numberLike[]): number;
declare function subtract(...nums: numberLike[]): number;
declare function multiply(...nums: numberLike[]): number;
declare function divide(...nums: numberLike[]): number;
declare function numberLikeEqual(a: numberLike, b: numberLike): boolean;
declare function toFixed(num: numberLike, bit: number): number;

/**
 * @example
 * ```
 * sum([1, 2, 3])    // 6
 * ```
 */
declare function sum(...args: numberLike[]): numberLike;
/**
 * the Nearest number for first params between second and third
 */
declare function clamp(n: number, min: number, max: number): number;

/**
 * Pass the value through the callback, and return the value
 *
 * @example
 * ```
 * function createUser(name: string): User {
 *   return tap(new User, user => {
 *     user.name = name
 *   })
 * }
 * ```
 */
declare function tap<T>(value: T, callback: (value: T) => void): T;
/**
  * assert(boolean, message)
  * @param condition {boolean}
  * @param message {string} error message
  */
declare const assert: (condition: boolean, message?: string) => boolean;
/**
  * like console.log
  */
declare function debug(val: unknown): void;

/**
 * Genrate a range array of numbers. The `stop` is exclusive
 */
declare function range(stop: number): number[];
declare function range(start: number, stop: number, step?: number): number[];
declare function uniq<T>(array: readonly T[]): T[];
declare function toArray<T = unknown>(array?: Nullable<Arrayable<T>>): Array<T>;
/**
 * Get nth item of Array. Negative for backward
 */
declare function at(array: readonly [], index: number): undefined;
declare function at<T>(array: readonly T[], index: number): T;
/**
 * Get last item of Array.
 */
declare function last(array: readonly []): undefined;
declare function last<T>(array: readonly []): T;
/**
 * Get First item of Array
 */
declare function head(array: readonly []): undefined;
declare function head<T>(array: readonly []): T;
declare function remove<T>(array: T[], value: T): boolean;
declare function removeElement<T>(value: T, arr: Array<T>): boolean;
declare function move<T>(arr: T[], from: number, to: number): T[];

/**
 * Map key/value pairs for an object, and construct a new one
 *
 *
 * Transform:
 * @example
 * ```
 * objectMap({ a: 1, b: 2 }, (k, v) => [k.toString().toUpperCase(), v.toString()])
 * // { A: '1', B: '2' }
 * ```
 *
 * Swap key/value:
 * @example
 * ```
 * objectMap({ a: 1, b: 2 }, (k, v) => [v, k])
 * // { 1: 'a', 2: 'b' }
 * ```
 *
 * Filter keys:
 * @example
 * ```
 * objectMap({ a: 1, b: 2 }, (k, v) => k === 'a' ? undefined : [k, v])
 * // { b: 2 }
 * ```
 */
declare function objectMap<K extends string, V, NK = K, NV = V>(obj: Record<K, V>, fn: (key: K, value: V) => [NK, NV] | undefined): Record<K, V>;
/**
 * Strict typed `Object.keys`
 *
 * @category Object
 */
declare function objectKeys<T extends object>(obj: T): (keyof T)[];
declare function deepMerge<T extends object = object, S extends object = T>(target: T, ...sources: S[]): DeepMerge<T, S>;
type RenameByT<T, U> = {
    [K in keyof U as K extends keyof T ? T[K] extends string ? T[K] : never : K]: K extends keyof U ? U[K] : never;
};
/**
 * 重命名对象的属性名字
 * @param keysMap {string: string} 映射数组
 * @param obj {object} obj
 * @returns obj
 *
 * @example
 * ```
 *    renameKeys({ name: 'name1', age: 'age1'} as const, {name: 'kdp', age: 12} as const)
 * ```
 */
declare const renameKeys: <K extends Record<keyof V, string>, V extends object>(keysMap: K, obj: V) => RenameByT<K, V>;

/**
 * Promised `setTimeout`
 */
declare function sleep(ms: number, callback?: Fn<any>): Promise<void>;

/**
 * Ensure prefix of a string
 *
 */
declare function ensurePrefix(prefix: string, str: string): string;
/**
 * Ensure suffix of a string
 *
 */
declare function ensureSuffix(suffix: string, str: string): string;
/**
 * Generate a random string
 * @category String
 */
declare function randomStr(size?: number, dict?: string): string;
declare function pascalCase(str: string): string;
declare function camelCase(str: string): string;
declare function kebabCase(key: string): string;
declare function capitalize(str: string): string;

declare const timeStamp: () => number;

/**
 * Give a function, return a function.
 * you can clear this closure by closureFunction = null
 */
declare function createSingle<T extends (...args: any[]) => any>(fn: T): (...args: Parameters<T>) => ReturnType<T>;
/**
 * 创建一个对象池，create方法用于创建一个纯内部状态对象，必须使用额外方法赋予create的对象外部状态
 * @param fn return object or class
 * @returns create equal to fn excute, recover must excute in clear methods
 */
declare function createPool<T extends (...args: any[]) => any>(fn: T): {
    create(...args: Parameters<T>): ReturnType<T>;
    recover(item: ReturnType<T>): void;
};

// Type definitions for throttle-debounce 5.0


interface CancelOptions {
    upcomingOnly?: boolean;
}

interface Cancel {
    cancel: (options?: CancelOptions) => void;
}

interface NoReturn<T extends (...args: any[]) => any> {
    (...args: Parameters<T>): void;
}

interface ThrottleOptions {
    noTrailing?: boolean;
    noLeading?: boolean;
    debounceMode?: boolean;
}

interface DebounceOptions {
    atBegin?: boolean;
}

type throttle<T extends (...args: any[]) => any> = NoReturn<T> & Cancel;

/**
 * Throttle execution of a function. Especially useful for rate limiting
 * execution of handlers on events like resize and scroll.
 *
 * @param delay
 * A zero-or-greater delay in milliseconds. For event callbacks, values around
 * 100 or 250 (or even higher) are most useful.
 *
 * @param callback
 * A function to be executed after delay milliseconds. The `this` context and
 * all arguments are passed through, as-is, to `callback` when the
 * throttled-function is executed.
 *
 * @param options
 * An object to configure options.
 *
 * @param options.noTrailing
 * Optional, defaults to false. If noTrailing is true, callback will only execute
 * every `delay` milliseconds while the throttled-function is being called. If
 * noTrailing is false or unspecified, callback will be executed one final time
 * after the last throttled-function call. (After the throttled-function has not
 * been called for `delay` milliseconds, the internal counter is reset)
 *
 * @param options.noLeading
 * Optional, defaults to false. If noLeading is false, the first throttled-function
 * call will execute callback immediately. If noLeading is true, the first the
 * callback execution will be skipped. It should be noted that callback will never
 * executed if both noLeading = true and noTrailing = true.
 *
 * @param options.debounceMode If `debounceMode` is true (at begin), schedule
 * `callback` to execute after `delay` ms. If `debounceMode` is false (at end),
 * schedule `callback` to execute after `delay` ms.
 *
 * @return
 * A new, throttled, function.
 */
declare function throttle<T extends (...args: any[]) => any>(
    delay: number,
    callback: T,
    options?: ThrottleOptions,
): throttle<T>;
type debounce<T extends (...args: any[]) => any> = NoReturn<T> & Cancel;

/**
 * Debounce execution of a function. Debouncing, unlike throttling,
 * guarantees that a function is only executed a single time, either at the
 * very beginning of a series of calls, or at the very end.
 *
 * @param delay
 * A zero-or-greater delay in milliseconds. For event callbacks, values around
 * 100 or 250 (or even higher) are most useful.
 *
 * @param callback
 * A function to be executed after delay milliseconds. The `this` context and
 * all arguments are passed through, as-is, to `callback` when the
 * debounced-function is executed.
 *
 * @param options
 * An object to configure options.
 *
 * @param options.atBegin
 * If atBegin is false or unspecified, callback will only be executed `delay`
 * milliseconds after the last debounced-function call. If atBegin is true,
 * callback will be executed only at the first debounced-function call. (After
 * the throttled-function has not been called for `delay` milliseconds, the
 * internal counter is reset).
 *
 * @return
 * A new, debounced function.
 */
declare function debounce<T extends (...args: any[]) => any>(
    delay: number,
    callback: T,
    options?: DebounceOptions,
): debounce<T>;

/**
 * It returns a partial copy of an `input` containing only `propsToPick` properties.
 * 
 * `input` can be either an object or an array.
 * 
 * String annotation of `propsToPick` is one of the differences between `Rambda` and `Ramda`.
 */
declare function pick$1<T, K extends string | number | symbol>(propsToPick: K[], input: T): Pick<T, Exclude<keyof T, Exclude<keyof T, K>>>;
declare function pick$1<K extends string | number | symbol>(propsToPick: K[]): <T>(input: T) => Pick<T, Exclude<keyof T, Exclude<keyof T, K>>>;
declare function pick$1<T, U>(propsToPick: string, input: T): U;
declare function pick$1<T, U>(propsToPick: string): (input: T) => U;
declare function pick$1<T>(propsToPick: string, input: object): T;
declare function pick$1<T>(propsToPick: string): (input: object) => T;

/**
 * deepclone
 *
 * @see https://ramda.cn/docs/#clone
 * @category Object
 * @param val - Target object
 *
 */
declare function deepClone<T>(val: T): T;
/**
 * equal
 *
 * @category Logic
 * @see https://ramda.cn/docs/#equals
 * @param a - The first input number
 * @param b - The second input number
 * @returns boolean
 * @example
 * ```
 * const isEqual = equal(1, '1')  // true
 * ```
 */
declare function equal(a: unknown, b: unknown): boolean;
/**
 * find value by key
 *
 * @category Array
 * @example
 * ```
 * const arr = [{ name: 'k', age: 12 }, { name: 'kdp', age: 13 }]
 *
 * const find = findValueByKey('name', 'age')
 * find('kdp', arr)     // 13
 * ```
 */
declare function findValueByKey<T extends object>(keyName: keyof T, valueName: keyof T): (key: T[keyof T], list: T[]) => T[keyof T] | undefined;
/**
 * Empty Array, Empty Object, Empty String, Not includes null
 *
 * @see https://ramda.cn/docs/#isEmpty
 * @category Logic
 * @param val - val
 */
declare function isEmpty(val: unknown): boolean;
/**
 * Like sql select
 *
 * @category Array
 * @param keys string keys Array
 * @param arr - object array
 * @returns new array filter keys
 * @example
 * ```
 * const abby = { name: 'Abby', age: 7, hair: 'blond', grade: 2 }
 * const fred = { name: 'Fred', age: 12, hair: 'brown', grade: 7 }
 * const kids = [abby, fred]
 *
 * const arr = select(['age', 'name'], kids)
 * ```
 */
declare function select<T extends object, U extends keyof T>(keys: Array<U>, arr: T[]): Pick<T, Exclude<keyof T, Exclude<keyof T, U>>>[];
/**
 * 返回对象的部分拷贝，其中仅包含指定键对应的属性。如果某个键不存在，则忽略该属性。
 *
 * @see https://ramda.cn/docs/#pick
 * @category Object
 * @param keys - object keys array
 * @param object - object
 * @returns The object filter keys
 * @example
 * ```
 * pick(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1, d: 4}
 * ```
 */
declare const pick: typeof pick$1;
declare const entries: {
    <T>(o: {
        [s: string]: T;
    } | ArrayLike<T>): [string, T][];
    (o: {}): [string, any][];
};
declare const fromEntries: {
    <T = any>(entries: Iterable<readonly [PropertyKey, T]>): {
        [k: string]: T;
    };
    (entries: Iterable<readonly any[]>): any;
};

declare function formateTime(time: number | Date, format?: string): string;

interface POptions {
    /**
     * How many promises are resolved at the same time.
     */
    concurrency?: number | undefined;
}
declare class PInstance<T = any> extends Promise<Awaited<T>[]> {
    items: Iterable<T>;
    options?: POptions | undefined;
    private promises;
    get promise(): Promise<Awaited<T>[]>;
    constructor(items?: Iterable<T>, options?: POptions | undefined);
    add(...args: (T | Promise<T>)[]): void;
    map<U>(fn: (value: Awaited<T>, index: number) => U): PInstance<Promise<U>>;
    filter(fn: (value: Awaited<T>, index: number) => boolean | Promise<boolean>): PInstance<Promise<T>>;
    forEach(fn: (value: Awaited<T>, index: number) => void): Promise<void>;
    reduce<U>(fn: (previousValue: U, currentValue: Awaited<T>, currentIndex: number, array: Awaited<T>[]) => U, initialValue: U): Promise<U>;
    clear(): void;
    then(fn?: () => PromiseLike<any>): Promise<any>;
    catch(fn?: (err: unknown) => PromiseLike<any>): Promise<any>;
    finally(fn?: () => void): Promise<Awaited<T>[]>;
}
/**
 * Utility for managing multiple promises.
 *
 * @category Promise
 * @note please use babel for /node_modules\/(?!p-queue)/
 * @example
 * ```
 *
 * const items = [1, 2, 3, 4, 5]
 *
 * await p(items)
 *   .map(async i => await multiply(i, 3))
 *   .filter(async i => await isEven(i))
 * // [6, 12]
 * ```
 */
declare function p<T = any>(items?: Iterable<T>, options?: POptions): PInstance<T>;

export { Arrayable, DeepMerge, DeepPartial, Fn, Intersection, MergeInsertions, Nullable, ReturnType, add, assert, at, camelCase, capitalize, clamp, createPool, createSingle, debounce, debug, deepClone, deepMerge, divide, ensurePrefix, ensureSuffix, entries, equal, findValueByKey, formateTime, fromEntries, head, isBrowser, isDate, isEmpty, isFunction, isMap, isNil, isNull, isNumber, isNumberLike, isObject, isRegExp, isSet, isString, isSymbol, isUndefined, kebabCase, last, move, multiply, notNil, numberLike, numberLikeEqual, objectKeys, objectMap, p, pascalCase, pick, randomStr, range, remove, removeElement, renameKeys, select, sleep, subtract, sum, tap, throttle, timeStamp, toArray, toFixed, uniq };
