function totalPrice(arrOfObj) {
    let sum = 0;
    for (let i = 0; i < arrOfObj.length; i++) {
        sum += arrOfObj[i].price;
    }
    return sum;
}

console.log(totalPrice([
    {name: 'tomatoes', price: 4},
    {name: 'potatoes', price: 6},
    {name: 'wine', price: 16},
]));

