function isNumber(input){
    return (typeof input !== "string"
        && typeof input !== "boolean"
        && typeof input !== "object"
        && typeof input !== "undefined"
        && !isNaN(input))
}