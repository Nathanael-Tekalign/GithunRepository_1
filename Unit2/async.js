createRunners().then(value => {
  // console.log(value[0])
  // console.log(value[1])
  console.log(value[2])
})




async function createRunners() {
    var runner1 = false;
    var runner2 = false;
    var loser = "";
    // Additional logic or operations can be added here

    // Create a promise for runner1Go
    const runner1Go = new Promise((resolve) => {
      setTimeout(() => {
        // Set the loser value to "runner1"
        loser = "runner1";
        runner1 = true
        resolve(runner1);
      }, 5000); // Timeout of 5 seconds
    });

    // Create a promise for runner2Go
    const runner2Go = new  Promise((resolve) => {
      setTimeout(() => {
        // Set the loser value to "runner2"
        loser = "runner2";
        runner2 = true
        resolve(runner2);
      }, 3000); // Timeout of 3 seconds
    });


    return [await runner1Go, await runner2Go, loser];
}



// // Example usage:
// (async () => {
//     const { runner1, runner2 } = await createRunners();
//     console.log("Runner 1:", runner1);
//     console.log("Runner 2:", runner2);
// })();


  
//   // Usage example:
//   runner1Go.then((result) => {
//     if (result) {
//       console.log("Runner 1 lost!");
//     }
//   });
  
//   runner2Go.then((result) => {
//     if (result) {
//       console.log("Runner 2 lost!");
//     }
//   });

//   async function runner1Result() {
//    const result1 = await runner1Go();
//   }
//   async function runner2Result() {
//     const result2 = await runner2Go();
//    }

// //const loser2 = getLoser();

// const resultArray = [runner1Result, runner2Result, loser2];
// resultArray;




// const runner2Result = await runner2Go();