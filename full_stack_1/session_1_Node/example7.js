

const getPrompt = (input_values, callback) => {
    console.log(`simulate input`, input_values);
    callback(`simulated output`);

}

getPrompt([`value1`, `value2`], (result)  => {
    console.log(result);
})