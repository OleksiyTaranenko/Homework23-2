let arr = [11, 22, 13, 46, 33, 78, 101, 22, 200];
let arrLength = arr.length;

let collection = new Set();

for (let i = 0; i < arrLength; i++) {
    collection.add(arr[i]);    
}

console.log(collection);


let collection2 = new Set();

for (let i = 0; i < arrLength; i++) {
    let item = arr[i];
    if (item % 2 === 0) {
        collection2.add(arr[i]);        
    };
}

console.log(collection2);


let collection3 = Array.from(collection2.values());
console.log(collection3);

let sum = collection3.reduce(function(a, b) { 
    return a + b; 
}, 0);

console.log(sum);