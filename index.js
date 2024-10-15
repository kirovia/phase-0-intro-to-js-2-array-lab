const cats = ['Milo', 'Otis', 'Garfield'];
const destructivelyAppendCat = name => cats.push(name);
const destructivelyPrependCat = name => cats.unshift(name);
const destructivelyRemoveLastCat = () => cats.pop();
const destructivelyRemoveFirstCat = () => cats.shift();
const appendCat = name => [...cats, name];
const prependCat = name => [name, ...cats];
const removeLastCat = () => {
    const newCats = [...cats];
    newCats.pop();
    return newCats;
};

const removeFirstCat = () => {
    const newCats = [...cats];
    newCats.shift();
    return newCats;
};