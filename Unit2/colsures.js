
// JS Declare Function #1:   DECLARATION
function afunction(param){
    // codeingStuff
}

// JS Declare Function #2:   ASSIGN
anotherfucntion = function(param){
    // coding stuff
}

// JS Declare Function #3:   ARROW FUNCTION

/// Arrow Syntax -- Curly Brackets are optional!
        // () => expression
        // param => expression
        // (param) => expression

// Fancy Arrow Function Parameters and ... destructuring:
        // (param1, ...paramList) => expression



// Fancy Arrow Function, ASSIGNED to a constant variable.
const createCharacter = (Name, HP, moves) => {
    // Create private variables
    let name = Name;
    let hp = HP;
    let movesList = moves;
  
    // Return an object with methods
    return {
      getHP: function() {
        HP = 100;
        return hp;
      },
      getName: function() {
        Name = "Hero";
        return name;
      },
      appendMovesToDiv: function() {
        const movesDiv = document.querySelector("#moves"); // Assuming there's an HTML element with id "moves"
        for (const move of movesList) {
          movesList[0] = "Slash";
          movesList[1] = "Fireball";
          movesList[2] = "Heal";
        }
      }
    };
  }

  // Example usage:
  const myCharacter = createCharacter("Hero", 100, "Slash", "Fireball", "Heal");
  console.log(myCharacter.getHP()); // Outputs: 100
  console.log(myCharacter.getName()); // Outputs: Hero
  myCharacter.appendMovesToDiv(); // Appends move names to the "moves" div 