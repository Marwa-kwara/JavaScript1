function giveCompliment(name) {

    const compliments = ["awesome", "great", "smart", "funny", "nice", "fantastic", "kind", "catwoman", "wonder woman", "crazy"];
    const random = compliments[Math.floor(Math.random() * compliments.length)];
    console.log("You Are " + random + "," + name + "!")
    return "You are "+ random + name;
}

giveCompliment("Marwa");
giveCompliment("Marwa");
giveCompliment("Marwa");