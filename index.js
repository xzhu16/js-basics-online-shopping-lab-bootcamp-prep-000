var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
  var price = Math.ceil(Math.random()*100)
  cart.push({[item]:price})
  console.log(`${item} has been added to your cart·`)
  return cart
}

function viewCart() {
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.")
  }
  var newarr = [];
    for (var i = 0; i < cart.length; i++) {
      var ks = Object.keys(cart[i])[0]
      newarr.push(ks + "at $" + cart[i][ks])
    }
    var text = "In your cart, you have "
      if (newarr.length === 1) {
        text += newarr + "."
      } else if (newarr.length === 2) {
        text += (newarr[0] + " and " + newarr[1] + ".")
      } else if (newarr.length > 2) {
        var last = newarr.pop();
        var others = newarr.join(", ");
        text += (others + ", and " + last + ".");
      }
      console.log(text)
}
  
  


function total() {
  var z = 0
  for (var i = 0; i < cart)
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
