const drinktypes=['cola','lemonade','water'];
const drinkTray=[];

for (let i=0; i< 5;i++) {
let addingDrinks = true;
while(addingDrinks){
    const randomDrink = drinktypes[Math.floor(Math.random()*3)];
    const drinksInTray = drinkTray.filter(function(drink) {
        return drink=== randomDrink
    });
    if (drinksInTray.length<2){
        drinkTray.push(randomDrink);
        addingDrinks=false}
        else {
            addingDrinks=true
        }
    }
}
console.log('Hey guys, I brought a ' + drinkTray.join(' ') + '!!!')