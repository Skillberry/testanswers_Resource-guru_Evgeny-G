/* Part 2 */
abstract class Expr<A> {
  abstract result(): A;
  abstract toString(): string;
}

class Value extends Expr<number> {
  private constructor(
    private value: number,
  ) {
    super();
  }

  result = () =>
    this.value;

  toString = () =>
    `${this.value}`;

  static of = (value: number) =>
    new this(value);
}

class Add extends Expr<number> {
  private constructor(
    private left: Expr<number>,
    private right: Expr<number>,
  ) {
    super();
  }

  result = () =>
    this.left.result() + this.right.result();

  toString = () =>
    `(${this.left.toString()} + ${this.right.toString()})`;

  static of = (
    left: Expr<number>,
    right: Expr<number>,
  ) => new this(left, right);
}

class Subtract extends Expr<number> {
  private constructor(
    private left: Expr<number>,
    private right: Expr<number>,
  ) {
    super();
  }

  result = () =>
    this.left.result() - this.right.result();

  toString = () =>
    `(${this.left.toString()} - ${this.right.toString()})`;

  static of = (
    left: Expr<number>,
    right: Expr<number>,
  ) => new this(left, right);
}

class Multiply extends Expr<number> {
  private constructor(
    private left: Expr<number>,
    private right: Expr<number>,
  ) {
    super();
  }

  result = () =>
    this.left.result() * this.right.result();

  toString = () =>
    `(${this.left.toString()} x ${this.right.toString()})`;

  static of = (
    left: Expr<number>,
    right: Expr<number>,
  ) => new this(left, right);
}

class Divide extends Expr<number> {
  private constructor(
    private left: Expr<number>,
    private right: Expr<number>,
  ) {
    super();
  }

  result = () =>
    this.left.result() / this.right.result();

  toString = () =>
    `(${this.left.toString()} ÷ ${this.right.toString()})`;

  static of = (
    left: Expr<number>,
    right: Expr<number>,
  ) => new this(left, right);
}

const tree = Divide.of(
  Add.of(
    Value.of(7),
    Multiply.of(
      Subtract.of(Value.of(3), Value.of(2)),
      Value.of(5),
    ),
  ),
  Value.of(6),
);

console.log(
  "((7 + ((3 - 2) x 5)) ÷ 6)" === tree.toString(),
);

console.log(
  2 === tree.result(),
);
