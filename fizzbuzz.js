fruits = ["Apple", "Banana", "Pineapple"];

animals = ["Lion", "Tiger", "Rabbit"];

Clubs = ["ManU", "ManC"];

function fizzbuzz(n) {
  n.forEach((num) => {
    for (let i = 1; i <= num; i++) {
      let fizzbuzz = "";

      // 3의 배수일땐 'fizz'
      if (i % 3 === 0) fizzbuzz += "fizz";

      // 5의 배수일땐 'buzz'
      if (i % 5 === 0) fizzbuzz += "buzz";

      // 나머지 경우엔 숫자
      console.log(fizzbuzz === "" ? i : fizzbuzz);
    }
    console.log();
  });
}

const n = [31, 100];

fizzbuzz(n);
