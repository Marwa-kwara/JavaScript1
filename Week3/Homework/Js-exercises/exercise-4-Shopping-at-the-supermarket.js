const shoppingCart = ["bananas", "milk"];
function addToShoppingCart (groceryItem) {
    do {
        shoppingCart.push(groceryItem);
        if (shoppingCart.length > 3) {
            shoppingCart.shift();
        }
        console.log("You bought " + shoppingCart + "!");
        return shoppingCart;
    }
    while (addToShoppingCart);
}

addToShoppingCart("coffee");
addToShoppingCart("chips");
addToShoppingCart("apples");