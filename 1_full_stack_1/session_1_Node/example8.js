const prompt = require(`prompt`);

const func1 = async() => {
    console.log(`func1`);
}

const func2 = () => {
    return new Promise(()=>{
        console.log(`func2`);
    })
}

const sleep = (ms) => {
    return new Promise(r => setTimeout(r, ms));
}

const main = async () => {

   

    var result1 = await prompt.get([`value`]);
    var result2 = await prompt.get([`value`]);
    console.log(result1, result2);

     /*timeout
     setTimeout(() => {
        console.log(`timeout`);
    }, 1000);
    */

    await sleep(1000);
    await func1();
    await sleep(1000);
    await func2();

   
}

main();