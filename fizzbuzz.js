function fizzbuzz(n) {
  for (let i = 1; i <= n; i++) {
    let fizzbuzz = "";

    if (i % 3 === 0) fizzbuzz += "fizz";
    // 3의 배수일땐 'fizz'
    // 5의 배수일땐 'buzz'
    // 15의 배수일땐 'fizzbuzz'
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
