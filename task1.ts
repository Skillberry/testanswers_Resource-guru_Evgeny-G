/* Part 1 */
type Flatten<T> = T extends [infer H, ...infer R]
  ? [...H extends any[] ? Flatten<H> : [H], ...Flatten<R>]
  : T;

type FlatArr = Flatten<[1, [2, [], [6, 3]], 4]>;

const flatten = (xs: any[]): Flatten<any> =>
  xs.reduce(
    (acc, x) =>
      acc.concat(Array.isArray(x) ? flatten(x) : x),
    [],
  );

console.log(flatten(
  [1, [[2, [3]], [], 5], 3],
));

console.log(flatten(
  [],
));

console.log(flatten(
  [null],
));

console.log(flatten(
  [undefined],
));
