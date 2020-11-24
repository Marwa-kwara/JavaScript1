const numChildren =[1,2,3,4,5];

const partnerNames =['Ghaith', 'George cloony', 'Brad pitt', 'Will smith', 'Johnny Depp',];

const locations = ['Netherlands', 'Syria', 'America', 'England', 'India',];

const jobs = ['Front-End Developer', 'Full stack Developer', 'Backend developer', 'IT Analytics', 'Software Engineer',];

function tellFortune(number, string, string, string) {
    let partnerNamesRandom = partnerNames[Math.floor(Math.random() * 5)];
    let numChildrenRandom = numChildren[Math.floor(Math.random() * 5)];
    let locationsRandom = locations[Math.floor(Math.random() * 5)];
    let jobsRandom = jobs[Math.floor(Math.random() * 5)];
    
    console.log("You will be a " + jobsRandom + " in "+ locationsRandom +" married to " + partnerNamesRandom +" with "+ numChildrenRandom +" kids.")
}
tellFortune(numChildren, partnerNames, locations, jobs);
tellFortune(numChildren, partnerNames, locations, jobs);
tellFortune(numChildren, partnerNames, locations, jobs);