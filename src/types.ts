export type Arrayable<T> = T | Array<T>
export type Nullable<T> = T | null | undefined

export type numberLike = string | number
export type Fn<T = void> = () => T

export type MergeInsertions<T> =
  T extends object
    ? { [K in keyof T]: MergeInsertions<T[K]> }
    : T

export type DeepMerge<F, S> = MergeInsertions<{
  [K in keyof F | keyof S]: K extends keyof S & keyof F
    ? DeepMerge<F[K], S[K]>
    : K extends keyof S
      ? S[K]
      : K extends keyof F
        ? F[K]
        : never;
}>

export type ReturnType<T> = T extends ((...args: any[]) => infer P) ? P : never

export type DeepPartial<T> = {
  [U in keyof T]: T[U] extends object
    ? DeepPartial<T[U]>
    : T[U]
}

export type Intersection<T extends object, U extends object> = Pick<
T,
Extract<keyof T, keyof U> & Extract<keyof U, keyof T>
>
