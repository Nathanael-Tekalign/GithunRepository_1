const Array1 = [0,1,2,3];
const addOne = function(x) {
  return x + 1;
}
var addOne_String = addOne.toString();
console.log('addOne_String', addOne_String);
function myFunction(func,addOne) {
  if(addOne % 2 === 0) {
    func === addOne;
  }
  else {
    console.log("this number is odd")
  }
}
let txt = "";
for(let x in Array1){
  txt += Array1[x];
}