const container1 = document.getElementById("container");
container.style.color = "#000000";


// var element1 = document.getElementById("w3-container");
// container = element;


for (let i = 1; i <= 5; i++) {
    var p = document.createElement("p");
    p.textContent = "This paragraph #" + i + ", but actually just a line if you have a real monitor.";
    container1.appendChild(p);
}
const button1 = document.createElement('button');
button1.textContent = 'Click me';
button1.onclick = changeColors;
document.body.appendChild(button1);

console.log("here.")


function changeColors() {
    console.log(makeColor())
    const body1 = document.getElementsByTagName("body")[0];
    // body1.style.backgroundColor = "#000000"
    var containerColor = makeColor();
    container.style.backgroundColor = containerColor;
    body1.style.backgroundColor = makeColor();
    var r = parseInt(containerColor.substring(1, 2), 16);
    var g = parseInt(containerColor.substring(3, 2), 16);
    var b = parseInt(containerColor.substring(5, 2), 16);
    var luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
    if (luminance < 128) {
        container.style.color = "white";
    } else {
        container.style.color = "black";
    }

// list1 = [4,5,6,7,8]
// list1.length
// the highest index of any array/list = theListArray.length - 1





    // var bodyColor = "#" + Math.floor(Math.random(16777216)  ).toString(16);
    // var containerColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    // body.style.backgroundColor = bodyColor;
    // container.style.backgroundColor = containerColor;


}

function makeColor(){

    var bodyColor = "#";
    for(let i = 0; i < 6; i++){
        var int1 = Math.floor(Math.random() * 1000 % 16)

        // Math.random() --> 0.1155795357697 * 100000 = 115579
        // console.log(int1);

        bodyColor += int1.toString(16);
        
        // console.log(bodyColor);
    }
    return bodyColor
}

function getRandomInt(max){
    return Math.random() * max
}




// let x  = 1
// if(true){
//     let x = 2
//     console.log(x)
// }
// console.log(x)