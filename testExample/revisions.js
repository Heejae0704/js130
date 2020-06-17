function createBarTab2() {
  const orders = [];
  const payments = [];
  const validate = (input) => {
    if (isNaN(Number(input)))
      throw new Error("price or amount should be a number");
  };
  return {
    balance() {
      return (
        orders.reduce((total, order) => total + order[1], 0) -
        payments.reduce((total, payment) => total + payment, 0)
      );
    },
    placeOrder(item, price) {
      validate(price);
      orders.push([item, Number(price)]);
    },
    pay(amount) {
      validate(amount);
      payments.push(Number(amount));
    },
    getPayments() {
      return payments;
    },
    getOrders() {
      return orders;
    },
  };
}

let bar1 = createBarTab2();
let bar2 = createBarTab2();
bar1.getOrders("basketball", 100);
bar2.getOrders("cup", 300);
console.log(bar1.getOrders());
