function isNumber(input){
    return (typeof input !== "string"
        && typeof input !== "boolean"
        && typeof input !== "object"
        && typeof input !== "undefined"
        && !isNaN(input))
}

function isNumberOrNumericString(input){
    return (typeof input !== "boolean"
        && typeof input !== "object"
        && typeof input !== "undefined"
        && !isNaN(parseFloat(input))
    );
}

function arrayOfUniqueRandomNumbers(size, max){
    let array = [];
    for (let i = 0; i < size; i++){
        let num = Math.floor(Math.random() * max) + 1;
        while(array.includes(num)){
            num = Math.floor(Math.random() * max) + 1;
        }
        array.push(num);
    }
    return array;
}