function PayableAmount() {
    
    var ele = document.getElementsByClassName("ele");

    var price = parseInt(ele[0].value)
    var quantity = parseInt(ele[1].value)
    var tax = parseInt(ele[2].value)
    
    var amount = price * quantity;
    var totalTax = (amount * tax) / 100;

    ele[3].value = amount + totalTax;
    

}