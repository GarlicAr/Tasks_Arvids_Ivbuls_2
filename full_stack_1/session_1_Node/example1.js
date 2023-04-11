console.log('Hello World!')


// basic types

var shopName="Rimi";

// boolean

var isShopOpen=true;

// number

var peopleInShop=200;
var priceOfCheese = 12.5;

// not strongly typed

isShopOpen = 10;
isShopOpen = false;

revenueYear = 1e6; // if not var in front then global
strStatement= 'Year Revenue: ' + revenueYear.toString();

minValue= Number.MIN_VALUE;

console.log(strStatement);

strStatement = strStatement.substring(strStatement.indexOf(':')+1);

console.log(strStatement);

isEUR = strStatement.includes('EUR');

console.log(isEUR);

if(!isEUR){
    var revenueEUR = parseFloat(strStatement); //parseInt
    var statementFull = `Year revenue: ${revenueEUR} EUR` ; //Tilde
    console.log(statementFull);
}


