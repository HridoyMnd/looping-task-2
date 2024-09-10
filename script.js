// looping tast 2

const numbers = [12, 98, 5, 41, 23, 78, 46];
let evenNumbers = [];
for( let even of numbers){
    if(even % 2 === 0){
        evenNumbers.push(even);
    }
}
console.log(evenNumbers);
