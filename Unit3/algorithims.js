const beadthDiv = document.getElementById("breadth")
const depthDiv = document.getElementById("depth")
 
 
 
 
 class Leaf {

    constructor(value) {
        this.value = value;
        this.left = null; // Initialize left branch as null
        this.right = null; // Initialize right branch as null
    }

  }


  

// Create first leaf within Tree Constructor:
tree1 = new Tree(new Leaf(55));
 

// 10 more leaves "within the tree":
 tree.insert(11);
tree.insert(12);
tree.insert(13);
tree.insert(14);
tree.insert(15);
tree.insert(16);
tree.insert(17);
tree.insert(18);
tree.insert(19);
tree.insert(20);
tree.insert(21);
tree.insert(22);
tree.insert(23);
tree.insert(24);

// class TreeNode {
//     constructor(key, value = key, parent = null) {
//         this.key = key;
//         this.value = value;
//         this.parent = parent;
//         this.children = [];
//     }

//     get isLeaf() {
//         return this.children.length === 0;
//     }

//     get hasChildren() {
//         return !this.isLeaf;
//     }
// }

class Tree {
    constructor(key, value = key) {
        this.root = new Leaf(key, value);
    }

    *preOrderTraversal(node = this.root) {
        yield node;
        if (node.children.length) {
            for (let child of node.children) {
                yield* this.preOrderTraversal(child);
            }
        }
    }

    *postOrderTraversal(node = this.root) {
        if (node.children.length) {
            for (let child of node.children) {
                yield* this.postOrderTraversal(child);
            }
        }
        yield node;
    }

    insert(parentNodeKey, key, value = key) {
        for (let node of this.preOrderTraversal()) {
            if (node.key === parentNodeKey) {
                node.children.push(new Leaf(key, value, node));
                return true;
            }
        }
        return false;
    }

    remove(key) {
        for (let node of this.preOrderTraversal()) {
            const filtered = node.children.filter(c => c.key !== key);
            if (filtered.length !== node.children.length) {
                node.children = filtered;
                return true;
            }
        }
        return false;
    }

    find(key) {
        for (let node of this.preOrderTraversal()) {
            if (node.key === key) return node;
        }
        return undefined;
    }
}


// breadth_search function

function bfs(start, isGoal, getNeighbors) {
    const visited = new Set();
    const queue = [start];
  
    while (queue.length > 0) {
      const node = queue.shift();
      if (isGoal(node)) {
        return node; // Goal condition met
      }
  
      visited.add(node);
      const neighbors = getNeighbors(node);
  
      for (const neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          queue.push(neighbor);
        }
      }
    }
  
    return null; // Goal not found
  }
  
// deapth_search function

function depthSearch(obj, searchKey, searchValue) {
    // Check if the current object has the key and value we're looking for
    if(obj[searchKey] === searchValue) {
      return obj;
    }
  
    // Otherwise, iterate over all properties of the object
    for(let key in obj) {
      if(obj.hasOwnProperty(key) && typeof obj[key] === 'object') {
        // Recursively search in the nested object
        let result = depthSearch(obj[key], searchKey, searchValue);
        if(result) {
          return result;
        }
      }
    }
  
    // If nothing is found, return null
    return null;
  }

display_values = function(array, algorithmName)
{
    let divName = beadthDiv
    if(algorithmName == "breadth"){
        divName = depthDiv
    }
    for(value in array){
        divName.innerHTML += value + "<br>"
    }
    divName.innerHTML += "<br><br>"
}



const breadth = new Array().fill('').map(() => new Array().fill(false));
const depth = new Array().fill('').map(() => new Array().fill(false));






// class Graph1 {
//     constructor() {
//         this.adjList = new Map();
//     }

//     addNode(node) {
//         this.adjList.set(node, []);
//     }

//     addEdge(node, neighbor) {
//         this.adjList.get(node).push(neighbor);
//         this.adjList.get(neighbor).push(node);
//     }

//     dfs(node, visited = new Set(), depthArray = []) {
//         console.log(node); // Print the visited node (you can modify this as needed)
//         visited.add(node);

//         const neighbors = this.adjList.get(node);
//         for (const neighbor of neighbors) {
//             if (!visited.has(neighbor)) {
//                 this.dfs(neighbor, visited, depthArray);
//             }
//         }

//         // Add the visited node's value to the depth array
//         depthArray.push(node);
//     }
// }

// class Graph2 {
//     constructor() {
//         this.adjList = new Map();
//     }

//     addNode(node) {
//         this.adjList.set(node, []);
//     }

//     addEdge(node, neighbor) {
//         this.adjList.get(node).push(neighbor);
//         this.adjList.get(neighbor).push(node);
//     }

//     bfs(startNode, breadthArray = []) {
//         const visited = new Set();
//         const queue = [startNode];
//         visited.add(startNode);

//         while (queue.length !== 0) {
//             const current = queue.shift();
//             console.log(current); // Print the visited node (you can modify this as needed)

//             const neighbors = this.adjList.get(current);
//             for (const neighbor of neighbors) {
//                 if (!visited.has(neighbor)) {
//                     visited.add(neighbor);
//                     queue.push(neighbor);
//                 }
//             }

//             // Add the visited node's value to the breadth array
//             breadthArray.push(current);
//         }
//     }
// }
