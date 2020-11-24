const cartForParty = { 
    chips : 5.9, 
    cola : 4.5,
    ice : 1.75,
    chocolate : 7,
    juice : 8.25
}
function calculateTotalPrice (objectNumberProperties) {

    let total = 0;
    for (const key in cartForParty) {
        total += cartForParty[key];
    }
    console.log("Total: €" + total);
}

calculateTotalPrice(cartForParty);