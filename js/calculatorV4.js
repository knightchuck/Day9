
//create helper function
var $ = function (id) {
	return document.getElementById(id);
}
function calculate()  {
//get user input
var listPrice = $('list_price').valueAsNumber;

var customerType = $('type').value;
	
// var discountPercent = 
// document.getElementById('discount_percent').valueAsNumber;

//call calculate discount amount and discount price	
function discAmountCalc(listPrice, discountPercent){
var discount = listPrice * discountPercent * .01;
return discount
}
var discountPrice = listPrice - discount;

//set output in currency format (sort of)
$('discount_percent').valueAsNumber = discountPercent;

discount = '$'+discount.toFixed(2);
$('discount').value = discount;

discountPrice = '$'+discountPrice.toFixed(2);
$('discount_price').value = discountPrice;

//call calculate discount percent
function discPercCalc (listPrice, customerType) {
if (customerType == "R")  {
	if (listPrice < 100)
		discountPercent = 0;
	else if (listPrice >= 100 && listPrice < 250)
		discountPercent = 10;
	else if (listPrice >= 250)
		discountPercent = 25;
}	else if (customerType == "C") {
	 if (listPrice < 250)
		 discountPercent = 20;
	 else
		 discountPercent = 30;
}

discountPercent = parseFloat(discountPercent);
return discountPercent;
}
//calculate discount amount and discount price
}// end calculate

//calculate discount percent function
var discountPercent = discPercCalc(listPrice, customerType);

//calculate discount amount function
var discount = discAmountCalc(listPrice, discountPercent);

//calculate discount price function
var discountPrice =discPriceCalc(listPrice, discount);