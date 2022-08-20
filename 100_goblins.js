//pseudocode
//array of goblinsGood
//process array to ! values
//do above 100 times 
//------------------------

//init array of 100 goblins, all false
let goblinsGood = []
for (let i = 0; i < 100-1; i++) {
    goblinsGood[i]=false

}
console.log ("done goblinsGood arr")

//pass over 100 times
for (let n = 1; n <100+1; n++) {
    console.log("n:", n)

    //each pass skip n, and invert the value
    for (let pass = n; pass < 100+1; pass+=n) {
        goblinsGood[pass] = !goblinsGood[pass]
        console.log("new goblins condition", goblinsGood[pass])
        
    }
    
}

//to check True
function checkTrue(val,ind ) {
    // console.log(item)
    if (val===true) {
        return ind
    } else {
        return null
    }
}

// console.log(goblinsGood)

//return only the values of those which are true
const indexOfGoodGoblins = goblinsGood.map(checkTrue)

//return only the index of good goblins
const results = indexOfGoodGoblins.filter(element => {
    return element !==null
})
console.log(results)






