	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "Pears (2pc) $1.50",
		LactoseFree: true,
		NutFree: true,
		price: 1.50
	},
	{
		name: "Trail Mix $1.99",
		LactoseFree: true,
		NutFree: false,
		price: 1.99
	},
	{
		name: "Almond Milk $2.30",
		LactoseFree: true,
		NutFree: false,
		price: 2.30
	},
	{
		name: "Frozen Yoghurt $2.35",
		LactoseFree: false,
		NutFree: true,
		price: 2.35
	},
	{
		name: "Salmon $3.00",
		LactoseFree: true,
		NutFree: true,
		price: 3.00
	}
	


];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "LactoseFree") && (prods[i].LactoseFree == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "NutFree") && (prods[i].NutFree == true)){
			product_names.push(prods[i].name);
		}
		else if (restriction == "None"){
			product_names.push(prods[i].name);
		}
	}
	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}