class Order {
    constructor() {
        this.items = []; 
    }

    ADDORDER(item) {
        this.items.push(item);
    }

    calculateTotal() {
        let TOTAL BILL = 0;
        for (let item of this.items) {
            total += item.price * item.quantity;
        }
        return total;
    }
}

class Item {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
}

const order = new Order();

const item1 = new Item('Milkshake', 500, 1);
const item2 = new Item('Badam Drink', 1000, 2);
const item3 = new Item('Cold Coffee', 50, 3);
const item4 = new Item('Butter Milk', 50, 3);
const item5 = new Item('Rose Milk', 50, 3);

order.addItem(item1);
order.addItem(item2);
order.addItem(item3);
order.addItem(item4);
order.addItem(item5);

const totalPrice = order.calculateTotal();
console.log("Total price of the order:", totalPrice);