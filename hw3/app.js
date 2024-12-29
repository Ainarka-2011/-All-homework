///////////// 1
let grades = [5, 4, 3, 5, 4, 3, 2, 4, 5, 4];
for (let grade of grades) {
  switch (grade) {
    case 5:
      console.log("A - " + grade);
      break;
    case 4:
      console.log("B - " + grade);
      break;
    case 3:
      console.log("C - " + grade);
      break;
    case 2:
      console.log("D - " + grade);
      break;
    case 1:
      console.log("F - " + grade);
      break;
    default:
      console.log("Нет такой оценки");
  }
}

////////////////2
const currencys = [50000, 20000, 15000];

for (const currency of currencys) {
  switch (currency) {
    case currency:
      console.log(currency + " сом = " + (currency / 87).toFixed(0) + "$");
      break;
    case currency:
      console.log(currency + " сом = " + (currency / 87).toFixed(0) + "$");
      break;
    case currency:
      console.log(currency + " сом = " + (currency / 87).toFixed(0) + "$");
      break;
  }
}

////////////////3
let inns = [
  "21212201212345",
  "11212201212345",
  "21212201212345",
  "11212201212345",
  "11212201212345",
  "11212201212345",
  "21212201212345",
];

let men = 0;
let women = 0;
for (const inn of inns) {
  switch (inn[0]) {
    case "1":
      women++;
      break;
    case "2":
      men++;
      break;
    default:
      console.log("takih dannih net");
      break;
  }
}

console.log("Men" + men + " " + "Women" + women);
