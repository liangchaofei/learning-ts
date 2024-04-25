type a = Promise<"curry">;
type GetValType<T> = T extends Promise<infer U> ? U : never;
type b = GetValType<a>; // "curry"

// [1, 2,3]
// 提取第一个
type First<T extends unknown[]> = T extends [infer U, ...unknown[]] ? U : never;
type c = First<[1, 2, 3]>; // 1
type d = First<[]>; // never

// 提取最后一个
type Last<T extends unknown[]> = T extends [...unknown[], infer U] ? U : never;
type e = Last<[1, 2, 3]>; // 3

// 取去掉了最后一个元素的数组
type Pop<T extends unknown[]> = T extends [...infer U, unknown] ? U : never;
type f = Pop<[1, 2, 3]>; // [1, 2]
type g = Pop<[1]>; // []
type h = Pop<[]>; // never

// 取去掉了第一个元素的数组
type Shift<T extends unknown[]> = T extends [unknown, ...infer U] ? U : never;
type i = Shift<[1, 2, 3]>; // [2, 3]
type j = Shift<[1]>; // []
type k = Shift<[]>; // never

// 判断字符串是否以某个前缀开头
type StartsWith<T extends string, U extends string> = T extends `${U}${infer _}`
  ? true
  : false;
type l = StartsWith<"abc", "a">; // true
type m = StartsWith<"abc", "b">; // false

// 字符串替换
type Replace<
  T extends string,
  U extends string,
  V extends string
> = T extends `${infer L}${U}${infer R}` ? `${L}${V}${R}` : T;
type n = Replace<"abc", "b", "d">; // adc
type o = Replace<"abc", "d", "d">; // abc

// 去掉空白字符
type Trim<T extends string> = T extends `${infer L} ${infer R}`
  ? Trim<`${L}${R}`>
  : T;
type p = Trim<" a b c ">; // abc

// 获取函数的参数
type Params<T> = T extends (...args: infer U) => any ? U : never;
type q = Params<() => void>; // []
type r = Params<(a: number, b: string) => void>; // [number, string]

// 获取函数的返回值
type Return<T> = T extends (...args: unknown[]) => infer U ? U : never;
type s = Return<() => void>; // void
type t = Return<(a: number, b: string) => number>; // number
