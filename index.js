var cart = [];

function getCart() {
  return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  let product = new Object();
  product.name = item;
  product.price = Math.ceil(Math.random() * 100);
  cart.push(product);
  return cart;
}

function viewCart() {
  if (getCart().length < 1) {
    return 'Your shopping cart is empty.';
  }
  let string = `In your cart, you have`;
  for (let i = 0; i < getCart().length; i++) {
    if (i === getCart().length - 1) {
      string += ` ${getCart()[i].name} at $${getCart()[i].price}.`;
    } else {
      string += ` ${getCart()[i].name} at $${getCart()[i].price},`;
    }
  }
  return string;
}

function total() {
  return getCart().reduce((acc, curr) => acc + curr.price, 0);
}

function removeFromCart(item) {
  for (let i = 0; i < getCart().length; i++) {
    if (getCart()[i].name === item) {
      getCart().splice(i, 1);
      return getCart();
    }
  }
  return 'That item is not in your cart.';
}

function placeOrder(cardNumber) {
  const totalAmt = total();
  if (!cardNumber) {
    return 'Sorry, we don\'t have a credit card on file for you.';
  }
  setCart([]);
  return `Your total is $${totalAmt}, which will be charged to the card ${cardNumber}.`;
}