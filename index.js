const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);
    return cats;
};

function destructivelyPrependCat(name) {
    cats.unshift(name);
    return cats;
};

function destructivelyRemoveLastCat() {
  cats.pop();
  return cats;  
};

function destructivelyRemoveFirstCat() {
    cats.shift();
    return cats;
};

function appendCat(name) {
    const newArray = [...cats, name];
    return newArray;
};

function prependCat(name) {
    const newArray = [name, ...cats];
    return newArray;
};

function removeLastCat() {
    const newArray = [...cats];
    newArray.pop();
    return newArray;
};

function removeFirstCat() {
    const newArray = [...cats];
    newArray.shift();
    return newArray;
};