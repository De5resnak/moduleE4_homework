function createObjectWithoutPrototype() {
    return Object.create(null);
}

const emptyObj = createObjectWithoutPrototype();
console.log(emptyObj);
console.log(Object.getPrototypeOf(emptyObj));