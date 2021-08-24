class Stack {
    constructor() {
        this.elements = []
        this.top = 0;
    }
    push(value) {
        this.elements.push(value);
        this.top++;
    }
    pop() {
        this.elements.pop();
        this.top--;
    }
    checkElements() {
        this.elements.forEach(function (item) {
            console.log(item)
        })
    }
}
function playground() {
    const stack = new Stack();
    // Replace the next line with your playground code.
    let i = 0;
    while (i < 10){
        stack.push(i);
        i++;
    }
    stack.checkElements();
    i = 0;
    while (i<5){
        stack.pop();
        i++;
    }
    stack.checkElements();
}
playground();
    // export default playground;