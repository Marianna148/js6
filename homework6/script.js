vegetList = ['cabbage','avocado','tomato'];
fruitsList = ['grapes','raspberry','coconut'];
vegetPriceList = [8, 30, 10]; 
fruitsPriceList = [20, 25, 50];  

do{
    timeOfYear = prompt("Winter or summer period?").replaceAll(" ", "");
} while(timeOfYear.toLowerCase() !== "summer" && timeOfYear.toLowerCase() !== "winter");

console.log(timeOfYear.toLowerCase());

if(timeOfYear === "summer") {
    koef = 0.8
} else { koef = 2
}

console.log(koef);

do{
    category = prompt("you want to buy fruits or vegetables?").replaceAll(" ", "");
} while (category.toLowerCase() !== "fruits" && category.toLowerCase() !== "vegetables");

console.log(category);

switch(category) {
    case('vegetables') :

    do {
        veget = prompt(`Choose products from category vegetables: cabbage, avocado or tomato`).trim().replaceAll(" ","").toLowerCase();
        vegetMiddle = vegetList.indexOf(veget);
        productPrice = vegetPriceList[vegetMiddle];
    } while(vegetList.indexOf(veget) < 0)
    console.log(veget);
    break;

    case('fruits') :

    do {
        fruits = prompt(`Choose products from category fruits: grapes, raspberry or coconut`).trim().replaceAll(" ","").toLowerCase();
        productPrice = fruitsPriceList[fruitsList.indexOf(fruits)];
    } while (fruitsList.indexOf(fruits) === -1);
    console.log(fruits);
    break;
}

do {
    amount = prompt(`Enter the quantity of goods`).replaceAll(" ", "");
} while(amount < 1);

console.log(amount);

finalPrice = productPrice * koef * amount;

console.log(finalPrice);

if(category == 'vegetables') {
    document.write(`
        <div class="product" align="center">
         <img src="../homework6/images/vegetables/${vegetables}.svg" alt="${vegetables}" width="100" height="100">
         <p>Selected product: <b>${vegetables}</b></p>
        <p>Count of ${vegetables}: <b>${amount}</b></p>
        <p>Selected period: <b>${timeOfYear}</b></p>
        <p>Selected category: <b>${category}</b></p>
        <p>Final sum: <b>${finalPrice} UAH</b></p>
        </div>
      `);} else 
    document.write(`
        <div class="product" align="center">
        <img src="../homework6/images/fruits/${fruits}.svg" alt="${fruits}" width="100" height="100">
        <p>Selected product: <b>${fruits}</b></p>
        <p>Count of ${fruits}: <b>${amount}</b></p>
        <p>Selected period: <b>${timeOfYear}</b></p>
        <p>Selected category: <b>${category}</b></p>
        <p>Final sum: <b>${finalPrice} UAH</b></p>
      `)


