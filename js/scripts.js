function Pizza(size){
    this.size = size,
    this.price = 15,
    this.toppings = ""
}

Pizza.prototype.sizePrice = function() {
    if(this.size =="size1"){
        this.price -= 3;
    } else if(this.size=="size2"){
        this.price==this.price;
    }   
}

Pizza.prototype.addTopping = function(inputTop){
    this.toppings = inputTop;
   
}

Pizza.prototype.showPizza = function(showOutputDiv){
    var showOutputMsg = showOutputDiv;
    var pizzaDetails = "";
    pizzaDetails += `<p> Thank you for purchasing on of our pizzas</p>`
    pizzaDetails += `<p> $${this.price}</p>`;
    pizzaDetails += `<p>${this.toppings}</p>`;
    showOutputMsg.html(pizzaDetails);
}

$(document).ready(function(){
    $("button#size1").click(function(event){
        event.preventDefault();
        var pizza = new Pizza("size1");
        pizza.sizePrice();
        var inputTop = $("input:radio[name=topping]:checked").val(); 
        pizza.addTopping(inputTop)
        pizza.showPizza($("#grandTotal"));
    });
})




