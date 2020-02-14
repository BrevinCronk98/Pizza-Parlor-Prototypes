function Pizza(size){
    this.size = size;
    this.price = 15;
    this.toppings = [];
    
}

Pizza.prototype.sizePrice = function() {
    if(this.size =="size1"){
        this.price -= 3;
    } else if(this.size=="size2"){
        this.price==this.price;

    }   
}

    Pizza.prototype.showPizza = function(showOutputDiv){
        var showOutputMsg = showOutputDiv;
        var pizzaDetails = "";
        pizzaDetails += `<p> Thank you for purchasing one of our pizzas</p>`
        pizzaDetails += `<p> $${this.price}</p>`;
        showOutputMsg.html(pizzaDetails);
    }
    
$(document).ready(function(){
    
    function getValue(){
        this.price = 15
        var checks = document.getElementsByClassName('checks')
        this.toppings = [];
        for (i = 0; i<3; i++){
            if(checks[i].checked === true){
                this.toppings.push(checks[i].value);
                
            } else if(this.toppings.length === 3){
                this.price += 3;
            } 
        }
    }
    
    function displayTopping(){
        $("#grandTotal").text(`Toppings: ${this.toppings}`)
    }
    
    $("button#size1").click(function(event){
        event.preventDefault();
        var pizza = new Pizza("size1");
        pizza.sizePrice();
        pizza.showPizza($("#pizza"));
        getValue();
        displayTopping();    
    });
    $("button#size2").click(function(event){
        event.preventDefault();
        var pizza = new Pizza("size2");
        pizza.sizePrice();
        pizza.showPizza($("#pizza"));
        getValue();
        displayTopping();
    });
});
    





