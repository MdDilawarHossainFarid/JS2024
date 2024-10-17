// using literal notaion

const fruits = ["Apple","Banana"];
// console.log(fruits)
// console.log(fruits.length)

// using Array Construtor

const fruits1 = new Array("Apple","Banana");
// console.log(fruits1)
// console.log(fruits1.length);

// Access an array 

// console.log(fruits[0]);

// console.log(fruits[fruits.length - 1]);

// find index of an item
// console.log(fruits.indexOf("Banana"));
// console.log(fruits.indexOf("Apple"));

// Check item present or not

// console.log(fruits.includes("Banana"));
// console.log(fruits.includes("Banana1"));

// push and pop method

// fruits.push("Orange");

// fruits.pop("Apple");

// fruits.shift();

const fruits2 = ["Apple", "Mango","Cherry"]

// for(const x of fruits2){
//     console.log(x);
// }

// const fruits3 = [];
// fruits3.push("Banana","Apple")
// console.log(fruits3.length)
// console.log(Object.keys(fruits3));
// fruits3[4] = "Mango";
// console.log(Object.keys(fruits3));
// console.log(fruits3.length)
// console.log(fruits3[1]);

// const fruits4 = ["Strawberry","Mango"];

// const fruitsShallowCopy = [...fruits4];

// const fruitsCopy1 = Array.from(fruits2)

// console.log(fruitsCopy == fruits4);
// console.log(fruitsCopy1 == fruits4 )

const fruitsDeepCopy = JSON.parse(JSON.stringify(fruits2)); ;
console.log( fruitsDeepCopy == fruits2)



