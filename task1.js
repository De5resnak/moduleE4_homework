function printOwnProperties(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(key + ": " + obj[key]);
        }
    }
}

const exampleObj = {
    prop1: 'value1',
    prop2: 'value2',
    prop3: 'value3'
};

printOwnProperties(exampleObj);