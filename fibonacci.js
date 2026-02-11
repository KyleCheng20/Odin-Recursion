function fibs(n){
    let result = [];

    for(let i = 0; i < n; i++){
        if(i === 0) result.push(0);
        else if(i === 1) result.push(1);
        else result.push(result[i - 2] + result[i - 1]);
    }

    return result;
}

console.log("Iterative Fibonacci");
console.log(`fibs(1): ${fibs(1)}`);
console.log(`fibs(4): ${fibs(4)}`);
console.log(`fibs(8): ${fibs(8)}`);


function fibsRec(n){
    let result = [];

    if(n === 0) return [];
    if(n === 1) return [0];
    if(n === 2) return [0, 1];

    let prev = fibsRec(n - 1);
    let next = prev[prev.length - 1] + prev[prev.length - 2];
    result.push(...prev, next);

    return result;
}

console.log("\nRecursive Fibonacci");
console.log(`fibsRec(1): ${fibsRec(1)}`);
console.log(`fibsRec(4): ${fibsRec(4)}`);
console.log(`fibsRec(8): ${fibsRec(8)}`);