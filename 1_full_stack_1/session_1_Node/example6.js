function oldStyle(a, b){
    return a + b;
}

const refOld = oldStyle; 

//arrow function
const newStyle = (a, b) => {
    return a + b;
}



console.log(oldStyle(1,2));
console.log(refOld(1,2));
console.log(newStyle(1,2));