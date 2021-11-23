function fizzbuzz(n) {
  for (let i = 1; i <= n; i++) {
    let fizzbuzz = "";

    // 3의 배수일땐 'fizz'
    if (i % 3 === 0) fizzbuzz += "fizz";

    // 5의 배수일땐 'buzz'
    if (i % 5 === 0) fizzbuzz += "buzz";

    // 나머지 경우엔 숫자
    if (fizzbuzz === "") {
      console.log(i);
    } else {
      console.log(fizzbuzz);
    }
  }
}

const n = 31;

fizzbuzz(n);
