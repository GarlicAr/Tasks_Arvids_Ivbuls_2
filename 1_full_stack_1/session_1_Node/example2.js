var timeOfDay = 21.9;
var rimiCloses = 22.00;
var rimiOpens = 8.00;
var isShopOpen = true;
var days = 0;

while(days < 3){

    timeOfDay += 1.0;

    if(timeOfDay > 24){
        timeOfDay =0;
        days++;
    }
    
    if(timeOfDay > rimiCloses || timeOfDay < rimiOpens){
        isShopOpen = false;
    }
    else if(timeOfDay > rimiOpens && timeOfDay < rimiCloses){
        isShopOpen = true;
    }

    switch(isShopOpen){
        case true:
            console.log(`Shop Open!`);
            break;
        case false:
            console.log(`Shop Closed`);
            break;
        default:
            console.log(`Do not know!`)
    }
    
}

console.log(`days: ${days} 
timeOfDay: ${timeOfDay}
isShopOpen: ${isShopOpen}`);