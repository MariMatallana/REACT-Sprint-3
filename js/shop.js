// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
    {  
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery',
        offer: {
            number: 3,
            percent: 20
        }
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        offer: {
            number: 10,
            percent: 30
        }
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]
// Array with products (objects) added directly with push(). Products in this array are repeated.
let cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
let cart = [];
let total = 0;

// Exercise 1
function buy(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
    for (let i = 0; i < products.length; i++) {
        if (products[i].id == id) {
            cartList.push({ ...products[i] })
        }
    }
    generateCart()
    count_product()

}

// Exercise 2
function cleanCart() {
    cartList.splice(0, products.length)
}

// Exercise 3
function calculateTotal() {
    // Calculate total price of the cart using the "cartList" array
    total = 0
    for (let i = 0; i < cartList.length; i++) {
        total += cartList[i].price
    }
}

// Exercise 4
function generateCart() {
    // Using the "cartlist" array that contains all the items in the shopping cart, 
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.

    cart = []
    let indexValue
    let unit = 1
    let i = 0

    for (i; i < cartList.length; i++) {
        indexValue = cart.findIndex(item => item.id === cartList[i].id)
        if (indexValue == -1) {
            cartList[i].quantity = unit
            cartList[i].subtotal = cartList[i].price
            cart.push(cartList[i])
        }
        else {
            cart[indexValue].quantity = cart[indexValue].quantity + 1
            cart[indexValue].subtotal = cart[indexValue].price * cart[indexValue].quantity
        }
    }
    console.log(cart)
    applyPromotionsCart()
    calculateTotal()
    printCart()
}

// Exercise 5
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"

    let subtotalWithDiscount = 0
    let firstSubtotal = 0

    for (let i = 0; i < cart.length; i++) {
        if (cart[i].id == "1") {
            if (cart[i].quantity >= 3) {
                cart[i].subtotal = cart[i].quantity * 10
                firstSubtotal += cart[i].subtotal
            }
        }
        if (cart[i].id == "3") {
            if (cart[i].quantity >= 10) {
                cart[i].subtotal = cart[i].subtotal / 3 * 2
                firstSubtotal += cart[i].subtotal
            }
        }
    }

    for (let i = 0; i < cart.length; i++) {
        if (firstSubtotal > 0) {
            subtotalWithDiscount += cart[i].subtotal
        }
    }

    subtotalWithDiscount = Number(subtotalWithDiscount.toFixed(2))

    //console.log(subtotalWithDiscount)


}

// Exercise 6
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom

    let totalPrice = 0
    let cartListHTML = [];

    for (let i = 0; i < cart.length; i++) {
        totalPrice += cart[i].subtotal
        cartListHTML.push(`<tr> <th scope="row"> ${cart[i].name} </th> <td> ${cart[i].price} </td><td>  ${cart[i].quantity} </td><td> ${cart[i].subtotal.toFixed(2)} </td></tr>`);
    }
    document.getElementById("cart_list").innerHTML = cartListHTML
    document.getElementById('total_price').innerHTML = totalPrice.toFixed(2)

}


// ** Nivell II **

// Exercise 7
function addToCart(id) {
    // Refactor previous code in order to simplify it 
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.
}

// Exercise 8
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
}

function open_modal() {
    console.log("Open Modal");
    printCart();
}

function count_product() {

    let countProduct = 0


    for (let i = 0; i < cart.length; i++) {
        countProduct += cart[i].quantity
    }
    document.getElementById('count_product').innerHTML = countProduct


}