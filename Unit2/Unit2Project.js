// This adds an event listener for the "click" event on a button
const form1 = document.getElementById('form1');
const form2 = document.getElementById('form2');
const submitText = document.getElementById('submit_text');
const objectText = document.getElementById('objectText');
const button = document.querySelector("#my-button");
var second_button1;
var second_button2;
var firstButton_press = true;
var myObject1;


// This adds an anonymous function to handle the click event


// console.log("Does el exist?!?! lets see!")
if (form1) {
    console.log("form1 exists!")
    // form1.submit(fuction) ALT
    form1.addEventListener("submit", function(event){
        event.preventDefault()
        let radioElem = document.querySelector('input[name="radio1"]:checked')
        console.log(radioElem.value)
        submitText.innerHTML = "You selected the " + radioElem.value + "  button!";
    });
}

if (form2) {
    console.log("form2 exists!")
    // form1.submit(fuction) ALT
    form2.addEventListener("submit", function(event){
        event.preventDefault()
        if(firstButton_press) {
            firstButton_press = false;
            console.log(form2[0].value)
            myObject1 = new MyClass(form2[0].value);
            var first_button = document.getElementById('submitname');
            const garbage22 = form2.removeChild(first_button);
            // create <button id="yes" name="yes" value="submit">
            second_button1 = document.createElement('button');
            second_button1.setAttribute("id", "yes");
            second_button1.setAttribute("name", "yes");
            second_button1.setAttribute("value", "submit"); 
            second_button1.innerHTML = "Yes"
            // create <button id="no" name="no" value="submit">   
            second_button2 = document.createElement('button');    
            second_button2.setAttribute("id", "no");
            second_button2.setAttribute("name", "no");
            second_button2.setAttribute("value", "submit"); 
            second_button2.innerHTML = "No"
            // create <p>Is it your first time here?</p>  
            label_yesNo = document.createElement('p');    
            label_yesNo.innerHTML = "Is it your first time here?";
            form2.appendChild(label_yesNo);
            form2.appendChild(second_button1);
            form2.appendChild(second_button2);    
        } 
        else {
            const nameText = myObject1.printName(event.submitter.id);
            // console.log(nameText);
            objectText.innerText = nameText;
        }

    });
}

// if (form2 && !firstButton_press) {
//   console.log("second_button1 exists!")
//   // form1.submit(fuction) ALT
//   form2.addEventListener("submit", function(event){
//     event.preventDefault()
//     console.log(event)
//   });
// }

// if (second_button2) {
//   console.log("second_button1 exists!")
//   // form1.submit(fuction) ALT
//   form2.addEventListener("submit2", function(event){
//     console.log(event)
//   });
// }


class MyClass {

  constructor(fname) {
      this.fname = fname;
  }
  
  printName(firstTime) {
    if(firstTime == "yes") {
      var returnString = "Welcome, " + this.fname + ".  I hope you enjoy your first experience here."
      return "Welcome, " + this.fname + ".  I hope you enjoy your first experience here.";
    }
    return "Welcome back, " + this.fname + ".  Thanks for coming back.";
  }

}


// console.log(myObject1.fname);  
// const myObject2 = {
//   myMethod: function() {
//       return "Hello from myMethod!";
//   }
// // };

// // Call the method
// const result = myObject2.myMethod();

// // Print the result
// console.log(result);
/*
  introduce(); {
    console.log(`Hello, my name is ${fname2}`);
  }
*/

// console.log("THE FORM DATA CONTAINS:")
        // for (const entry of data){
        //         console.log(entry)
        //     for (const entryNum of entry){
        //         console.log(entryNum)
        //     }
        // }
// document.addEventListener("DOMContentLoaded", function(event) {
// });

// <nav class="nav_class" id="nav_id"></nav>
//
// 1) document.querySelector("div")
// 2) document.querySelector("#nav_id")
// 3) document.querySelector(".nav_class")
