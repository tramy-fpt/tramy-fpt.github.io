
let addToCart = document.getElementsByName('quantity');
for (let i = 0; i < addToCart.length; i++) {
    let add = addToCart[i];
    add.addEventListener("change", updateCartItems);
}
let cartArr = [];
let html = "";
var cartObject = {
     name: "",
     quantity: "", 
     amount: ""   
}
function updateCartItems(event) {
  
    var input = event.target;
    var item = input.parentElement.parentElement.parentElement;
    var itemTitle = item.getElementsByClassName("item-title")[0].innerText;
    var quantity = item.getElementsByClassName("quantity")[0].value;
    var price = item.getElementsByClassName("food-price")[0].innerText;
    var priceNum = parseInt(price.replace(".", ""));
    var subtotal = quantity * priceNum;
    // cartObject["name"]=itemTitle;
    // cartObject["quantity"]=quantity;
    // cartObject["amount"]=subtotal;
    // cartArr.push(cartObject);
    console.log(itemTitle, quantity, subtotal); //
    // nếu quantity > 10 thì quantity = 10, quantity < 0 thì quantity = 0
    if (isNaN(quantity) || quantity < 0) {
       return item.getElementsByClassName("quantity")[0].value = 0; // tại sạo không trả về 0 trên web, trong khi console.log thì trả quantity = 0?

    }
    if (quantity > 10) {
        item.getElementsByClassName("quantity")[0].value = 10; // tại sạo không trả về 10 trên web, trong khi console.log thì trả quantity = 10?
    }
    // count items in cart => nếu quantity != 0 và item-title chưa có trong array thì push item-title đó vào 1 array rỗng tạo sẵn => array.length
    var position = cartArr.indexOf(itemTitle);
    if (quantity != 0 && !cartArr.includes(itemTitle)) {
        cartArr.push(itemTitle);
    } else if (quantity == 0 && cartArr.includes(itemTitle)) {
        cartArr.splice(position, 1);
    }
    document.getElementsByClassName("count-items")[0].innerText = cartArr.length;
    // gán value vào các thẻ html rồi append html vào cart-items
    
    html +=
        `<div class="cart-item-row"><span class="cart-item cart-item-title cart-column">${itemTitle}</span>
        <span class="cart-quantity cart-column">${quantity}</span>
        <span class="cart-price cart-column">${subtotal}</span></div>`
    document.getElementsByClassName("cart-items")[0].innerHTML = html;
}
function deliver(){
    alert('Your order has been successfully submitted! Thank you!')
}


