var prompt = require(`prompt`);

prompt.start();

prompt.get([`x`, `b`],function(err, result){
    var final = calculate(result.x,result.b);
console.log(`x=${result.x} b=${result.b} result= ${final}`);
});


function calculate(x,b){
    var rez = x*b;
    for(var i =1;i<b;i++ ){
        rez *=x*b;
    }
    return rez;
}