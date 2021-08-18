function Rectangle(a: number, b: number): any {
  if (a >= 1 && a <= 100 && b >= 1 && b <= 100) {
    const perimeter = 2 * (a + b);
    const area = a * b;

    const myobj: any = {
      length: a,
      width: b,
      perimeter: 2 * (a + b),
      area: a * b,
    };

    return `the perimeter of the rectangle ${perimeter} and area of the rectangle is ${area}`;
  }
}

console.log(Rectangle(6, 5));
