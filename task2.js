function hasProperty(str, obj) {
    return obj.hasOwnProperty(str);
}

const exampleObj = {
    prop1: 'value1',
    prop2: 'value2',
    prop3: 'value3'
};

console.log(hasProperty('prop1', exampleObj));
console.log(hasProperty('prop4', exampleObj)); 