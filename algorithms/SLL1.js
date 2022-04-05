insertAtFront(data) {
    var newValue = new Node(data);
    if (this.head == null) {
        this.head = newValue;
        return this;
    }

    newValue.next = this.head;
    this.head = newValue;

    return this;
}
removeHead() {
    if (this.head == null) {
        return this;
    }
    this.head = this.head.next;
    return this;
}
average() {
    // this is our list
    if (this.head == null) {
        return NaN;
    }

    var counter = 0;
    var sum = 0;
    let runner = this.head;
    while (runner != null) {
        sum += runner.value;
        counter++;
        runner = runner.next
    }
    var average = sum / counter;
    return "the average is: " + average;
}