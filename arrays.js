const Array1 = [0,1,2,3];

// Step 4:
function addOne(x) {
    console.log(++x);
}
// var addOne_String = addOne().toString();
// console.log('addOne_String', addOne_String);

// Step 5:
function myFunction(theOtherFunction,x) {
    if(x % 2 === 0) {
        theOtherFunction(x);
        return;
    }
    console.log("this number is odd")
}

// Step 6:
for(let i in Array1){
  myFunction(addOne,i)
}

