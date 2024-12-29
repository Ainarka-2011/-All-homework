/////////////////1
let celebrity = {
    name: 'Kendall',
    surname: 'Jenner',
    age: 29,
    profession: 'model',
    height: '1.79см'
}
// console.log(celebrity);

////////////////2
let temp = prompt("Введи градус погоды")
if(temp >= -20 && temp < 0){
    alert("холод")
}else if(temp >= 0 && temp < 15){
    alert("прохладно")
}else if(temp >= 15 && temp < 28){
    alert("тепло")
}else{
    alert('жарко')
}
