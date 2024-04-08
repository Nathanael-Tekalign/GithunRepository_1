const inputElement = document.getElementById('userInput');
const outputElement = document.getElementById('outputResult');

var myArray = [];


function performPush() {
    // Get the input value
    console.log("pushing "+ inputElement.value)

    // Push the input value into the array
    myArray.push(inputElement.value);

    // Update the output element with the array contents
    // const outputElement = document.getElementById("output");

    update();
}

 function performPop() {
    console.log("popping last value from: " + myArray)
    if (myArray.length === 0) {
        outputElement.innerHTML = "Nothing to pop!"; // Return "nothing to pop" if the array is empty]
        return
    }
    // const removedElement = myArray[myArray.length - 1]; // Get the last element
    // myArray.length--; // Reduce the array length
    myArray.pop(); // Return the removed element
    update()
}

// Function to add input value to the beginning of the array
function performUnshift() {
    console.log("unshifting "+ inputElement.value)
    myArray.unshift(inputElement.value);
    update();
  }
// 

function performShift() {
    console.log("shifting first value from: " + myArray)
    if (myArray.length === 0) {
        outputElement.innerHTML = "Nothing to Shift!"; // Return "nothing to shift" if the array is empty]
        return
    }
    // const removedElement = myArray[myArray.length - 1]; // Get the last element
    // myArray.length--; // Reduce the array length
    myArray.shift(); // Return the removed element
    update()
}

function arrMap() {
    console.log("mapping " + inputElement.value + " to each element of array.");
    myArray = myArray.map((element) => inputElement.value + element);
    update();
}

function update() {
    outputElement.innerHTML = "";

    const numberedList = myArray.reduce((accumulator, element, index) => {
        console.log("<" + accumulator + ">")
        console.log("PRINT THIS YO!")
        return accumulator += index+1 + ". " + element + "<br>";
    }, "");
    outputElement.innerHTML = numberedList;


}


    
    //  update();
    // Update the output paragraph with the formatted list
    // outputParagraph.innerHTML = formattedList;
    // const inputValue = inputElement.value;
    // outputElement.innerHTML = acc;
    // function updateElementInArray(arr, index, newValue) {
//     if (index >= 0 && index < arr.length) {
//         arr[index] = newValue;
//     }
// }

// TODO
// these functions that you CALL in the html tags, must be DEFINED in the html.
//  <button onclick="performPush()">Push</button>
//   <button onclick="performPop()">Pop</button>
//   <button onclick="performShift()">Shift</button>
//   <button onclick="performUnshift()">Unshift</button>
// // DONT FORGET! --> At the end of all the functions, call the `update()` function



// const shiftedElement = shiftElementFromArray(myArray);

// use these to test if you want...
// console.log("Shifted element:", shiftedElement); // Prints the removed element
// console.log("Updated array:", myArray); // Array after removing the first element
// updateElementInArray(myArray, 2, 35); // Update element at index 2 to 35
// console.log("Updated array:", myArray);
 

  // Display the modified array
//   console.log(myArray);
