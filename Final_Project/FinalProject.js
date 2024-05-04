const username_var = document.getElementById("username");
const referral_var = document.getElementById("referral");
const submit_var = document.getElementById("submit");
const output_var = document.getElementById("output");

// Event listener as arrow function
submit_var.addEventListener("click", () => {
  console.log("lets rumble.")
  if(membershipTree.insert(referral_var.value, username_var.value)){
    output_var.innerHTML = membershipTree.recursionFunction();
  } else{
    output_var.innerHTML = "Sorry.  Only new memebers are allowed if they are referred. <br>Try the not as cool club down the road."
  }
});

// Class Member / Tree Node
class Member {
  constructor(name, referral) {
    this.name = name;
    this.referal = referral;
    this.children = [];
  }

  get hasChildren() {
    return this.children.length !== 0;
  }
}

// Class Tree
class MemberTree {
  constructor(value) {
    this.root = new Member(value, null);
  }

  *preOrderTraversal(node = this.root) {
    yield node;
    if (node.children.length) {
      for (let child of node.children) {
        yield* this.preOrderTraversal(child);
      }
    }
  }

  recursionFunction(node = this.root, returnString = ""){
    // console.log("inside method uh oh");
    if (node.children.length) {
      var counter = 1
      for (let child of node.children) {
        console.log("PRINT TRANSVERSAL LOOP: iteration #" + counter)
           console.log("in here?")
           returnString += node.name + " referred " + child.name + "<br>";
           if (child.children.length) {
            returnString = this.recursionFunction(child, returnString)
           }
           counter++
      }
      return returnString;
    }
  }

  insert(referral, newMemberName) {
    for (let node of this.preOrderTraversal()) { // node is a TYPE member
      console.log("INSERT FUNCTION LOOP" + node.name + referral)
      if (node.name === referral) {
        console.log("INSERT FUNCTION -- found referral.")
        node.children.push(new Member(newMemberName, node));
        return true;
      }
    }
    return false;
  }
}

const membershipTree = new MemberTree("Jim");





