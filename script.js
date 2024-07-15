function createBasket() {
  var basket = [];
  function addToBasket(item) {
    basket.push(item);
    // console.log(item + basket);
  }
  function getBasket() {
    return basket;
  }
  return { addToBasket, getBasket };
}

const newBasket = createBasket();
newBasket.addToBasket("apple");
newBasket.addToBasket("cherry");
newBasket.addToBasket(0);

console.log(newBasket.getBasket());

// State

var [someVar, setSomeVar] = setState("test");

function setState(initual) {
  var state = initual;

  function setStateNew(newValue) {
    state = newValue;
  }
  function getStateNew() {
    return state;
  }
  return [getStateNew, setStateNew];
}

console.log(someVar());
setSomeVar("newValue");
console.log(someVar());
