// const obj = {
//     username0: "Santa",
//     username1: "Rudolf",
//     username2: "Mr.Grinch"
// }

// const x = Object.entries(obj).map((value, index) => {
//     return `${value[1]}` + index; 
// })

// console.log(x);
// expected output: => [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]
const myArray = [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20, 18 , 18, 18, 18, 22, 21, 22];


const sortedArray = (listItems) => {
    listItems.sort((value1, value2) => value1 - value2);
    
    return listItems;
}

const pushIfExisting = (value, existingContainer) => {
    return existingContainer.includes(value)
        && existingContainer.push(value);
}

const findingSimilarNumbers = () => {
    const container = [];
    const listItems = sortedArray(myArray);

    for (let [idx, value] of listItems.entries()) {
        if (listItems[idx + 1] === value) { // comparison
            container.push(value);
        } else {
            pushIfExisting(value, container);
        }
    }    
    
    return container;
}

const createHashes = (func1) => {
    const array = func1();
    const lastIndex = array.length - 1;
    let i = 0;
    const hash = Object.fromEntries(
        array.map(item => [item, new Array()])
    );

    while (i <= lastIndex) {
        hash[array[i]].push(array[i])
        i++;
    }
    
    return hash;
}

const makeArrayToSet = (arr) => {
    const arrString = arr.map(number => number.toString());
    const newSet = new Set(arrString);

    return Array.from(newSet);
}

const result = (array, hash) => {
    const newArray = makeArrayToSet(array);

    const replaced = newArray.map(stringNumber => {
        if (stringNumber in hash) {
            return hash[stringNumber];
        }
        return Number(stringNumber);
    })
    
    return replaced;
}

console.log(result(
    myArray,
    createHashes(findingSimilarNumbers)
));
