/**
 * Determines if this tree contains the given searchVal.
 * @param {number} searchVal The number to search for in the node's data.
 * @returns {boolean} Indicates if the searchVal was found.
 */
contains(searchVal) {
    if(!isEmpty()){
        return false;
    }
    currentNode = this.root;
    while(run == true){
        if(currentNode.data == searchVal){
            return true;
        }
        if(currentNode.data < searchVal && curentNode.left != null){
            curentNode = currentNode.left;
        }
        else if (currentNode.data < searchVal && curentNode.left != null){
            currentNode = currentNode.right;
        }
        else{
            run = false;
        }
    }

    return false;
}

/**
  * Determines if this tree contains the given searchVal.
  * @param {number} searchVal The number to search for in the node's data.
  * @returns {boolean} Indicates if the searchVal was found.
  */
containsRecursive(searchVal, current = this.root) {
    if(currentNode.data == searchVal){
        return true;
    }
    if(currentNode.data > searchVal && curentNode.left != null){
        curentNode = currentNode.left;
    }
    else if (currentNode.data < searchVal && curentNode.left != null){
        currentNode = currentNode.right;
    }
    else{
        run = false;
    }
}

/**
  * Calculates the range (max - min) from the given startNode.
  * @param {Node} startNode The node to start from to calculate the range.
  * @returns {number|null} The range of this tree or a sub tree depending on if the
  *    startNode is the root or not.
  */
range(startNode = this.root) {}