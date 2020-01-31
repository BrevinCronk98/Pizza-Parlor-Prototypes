function Pizza(size){
    this.size = size,
    this.price = 15,
    this.topping = ""
}

Pizza.prototype.sizePrice = function() {
    if(this.size =="size1"){
        this.price -= 3;
    } else if(this.size=="size2"){
        this.price==this.price;
    }   
}

Pizza.prototype.addTopping = function(inputTop){
    this.topping = inputTop;
}

