type res = 1 extends 2 ? true : false;
type isTwo<T> = T extends 2 ? true : false;

type a = isTwo<1>; // false
type b = isTwo<2>; // true

type First<T extends unknown[]> = T extends [infer U, ...infer R] ? U : never;
type c = First<[1, 2, 3]>; // 1

type Union = 1 | 2 | 3;
type ObjType = { a: number } & { b: string };
type d = { a: number } & { b: string } extends ObjType ? true : false; // true
type e = "a" & 2;

type MapType<T> = {
  [K in keyof T]: [T[K], T[K], T[K]];
};
type f = MapType<{ a: 1; b: 2 }>;

type MapType2<T> = {
  [Key in keyof T as `${Key & string}${Key & string}${Key & string}`]: [
    T[Key],
    T[Key],
    T[Key]
  ];
};
type g = MapType2<{ a: 1; b: 2 }>;
