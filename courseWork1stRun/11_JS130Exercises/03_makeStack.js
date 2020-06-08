function newStack() {
  const stackArr = [];
  return {
    push(value) {
      stackArr.push(value);
    },
    pop() {
      stackArr.pop();
    },
    printStack() {
      stackArr.forEach((value) => console.log(value));
    },
  };
}

let stack1 = newStack();
stack1.push("item 1");
stack1.push("item 2");
stack1.push("item 3");
stack1.push("item 4");
stack1.printStack();
stack1.pop();
stack1.printStack();
stack1.push("item 5");
stack1.printStack();
