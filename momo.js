function findNumber(numbers, target) {
    for (let num of numbers) {
        if (num < 0) {
            continue;
        }
        if (num === target) {
            return "Found";
        }
    }
    return "Not Found";
}    

console.log(findNumber([1,2,-7,8,7,90], 7));
console.log(findNumber([1, 2, 3, -4, 5], 6));