function calculateCart(...num1) {
  let count = 0;
  for (let i = 0; i < num1.length; i++) {
    count += num1[i];
  }
  return count;
}

console.log("Cart Total Price: ", calculateCart(15, 25));
