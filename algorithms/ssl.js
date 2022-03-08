class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}



class SLList{
    constructor(){
        this.head = null
    }

    addToFront(value) {
        // step #1 Make a new node
        var newNode = new Node(value);
        
        // Check to see if there is a head
        if(this.head == null) {
            this.head = newNode;

            return this.head;
        }

        // if there is a head
        newNode.next = this.head;
        this.head = newNode;
        return this.head;


    }

    addToBack(value) {
        var runner = this.head;
        if (this.head == null) {
            this.head = new Node(value)
            return this;
        }
        while (runner.next!=null) {
            runner = runner.next;
        }
        runner.next = new Node(value);
        return this;
    }


    removeFromFront() {

    }

    removeFromBack() {
        if(this.head != null){

            if(this.head.next == null){
                this.head = null;
            }
            else {
                nodeTemp = new Node()
                temp = this.head;
                while(temp.next.next !=null){
                    temp = temp.next
                }
                lastNode = temp.next;
                temp.next = null;
                lastNode= null;
            }
        }
}

    contain(value){
        if(this.head != null){
            var runner = this.head;
            while(runner){
                console.log(runner.value + " is runner")
                if(runner.value === value){
                    console.log(runner.value + " is in the SSL")
                    return true
                }
                if(runner.value === null){
                    console.log(runner.value + " is not in the SSL")
                    return false
                }
                runner = runner.next
            }
            return this
        }
    }

    minToFront(){
        // step #0 [EDGE CASE]) handle a case where there is nothing in the list
            if(this.head == null){
                return "There is nothing in your list >:("
            }
            var runner = this.head;
            var temp = this.head;
            //getting minimum value
            while(runner) {
                if (runner.value<=temp.value) {
                    temp = runner
                }
                runner = runner.next
            }
            if(temp.value === this.head.value){
                return ("Your minimum is already in the front")
            }
            //changing node right before minimum to skip over the minimum node
            var runner2 = this.head;
            while(runner2) {
                // console.log("this is runner2 " + runner2.value)
                if (runner2.next===temp) {
                    runner2.next = runner2.next.next;
                }
                runner2 = runner2.next
            }
            this.addToFront(temp.value)
        }

    maxToBack(){
        // step #0 [EDGE CASE]) handle a case where there is nothing in the list
        if(this.head == null){
            return "There is nothing in your list >:("
        }
        var runner = this.head;
        var temp = this.head;
        //getting maximum value
        while(runner) {
            if (runner.value>=temp.value) {
                temp = runner
            }
            runner = runner.next
        }
        // edge case if max is in front
        if (temp.value === this.head.value) {
            this.removeFromFront()
            this.addToBack(temp.value)
            return null
        }
        // edge case if max is in back
        if (temp.next == null) {
            return ("Your max is in the back already!")
        }
        //changing node right before maximum to skip over the maximum node
        var runner2 = this.head;
        while(runner2) {
            // console.log("this is runner2 " + runner2.value)
            if (runner2.next===temp) {
                runner2.next = runner2.next.next;
            }
            runner2 = runner2.next
        }
        this.addToBack(temp.value)
        
    }

    appendValue(val, loc) {
        var runner = this.head;
        var newNode = new Node(val)
        var temp = 0

        if (this.head == null){
            return "Empty List Here!"
        }
        while(runner){
            if (runner.next == val){
                temp = runner.next
                runner.next = runner.next.next
            }
            console.log(runner)
            if(runner.next = loc){
                newNode.next = runner.next.next
                runner.next.next = newNode
            }
            runner = runner.next
            return temp
        }  
    }



   // print the singly linked list
    printValues(){
        // step #0 [EDGE CASE]) handle a case where there is nothing in the list
        if(this.head == null){
            console.log("There's nothing in the list! Dummy!")
            // return 'this' to end function and allow chaining of methods
            return this
        }
        //step #1) establish a runner to traverse through the list
        var runner = this.head;

        // NOTE: we can move runner all the way into null because our loop will exit as soon as runner hits null, avoiding any errors with printing
        while(runner != null) {
            // step #2) print the values at each iteration before moving the runner!
            console.log(`The current value is: ${runner.value}`)
            runner = runner.next
        }
        console.log("We have hit the end of the list!")
        // return 'this' to end function and allow chaining of methods
        return "We have hit the end of the list!"
    }
}




const sll = new SLList();
sll.addToFront(-3);
sll.addToFront(26);
sll.addToFront(58);
sll.addToFront(22);
sll.addToFront(9);
sll.addToFront(8);
sll.printValues()
sll.appendValue(26,3)
sll.printValues()
