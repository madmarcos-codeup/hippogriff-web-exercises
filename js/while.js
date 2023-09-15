//create a variable to hold a number = 1
let num = 1;
//create a while loop <65536
while(num < 65536){
    num*=2;
    console.log(num);
}
//num*=2


//create a variable to hold a random int between 50 and 100. this is the number of cones she has to sell
let totalCones = getRandomInt(50,100);

//create another uninitialized variable to hold how many cones a customer will buy
let wantToBuy;

//create a do while(totalCones >0)
do{
    //reassign the wantToBuy variable with a random number 1-5
    wantToBuy = getRandomInt(1,5);
    //if the customer wants to buy fewer or the same number of cones than available,
    // log `a customer wants to buy x cones.
    // decrement totalCones by how many cones they bought
    if(wantToBuy <= totalCones){
        console.log(`a customer buys ${wantToBuy} cones.`)
        totalCones -= wantToBuy;
    } else{
        //otherwise, log `A customer tries to buy x cones but you only have x left`
        console.log(`A customer tries to buy ${wantToBuy} cones but you only have ${totalCones} left`)
    }
    console.log(`You now have ${totalCones} cones remaining.`)

    if(totalCones === 0){
        console.log(`You sold all your cones! You can go home now.`)
    }
    //log `You now have x cones remaining.`
    //if cones === 0 `You sold them all`

}while(totalCones > 0)