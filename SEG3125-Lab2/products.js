var products = [
	{
		name: "brocoli",
		lactose_intolerant: false,
		nut_allergies: false,
		organic_products: false,
		nonorganic_products: true,
		price: 1.99
	},
	{
		name: "bread",
		lactose_intolerant: false,
		nut_allergies: false,
		organic_products: false,
		nonorganic_products: true,
		price: 2.35
	},
	{
		name: "yogurt(650g)",
		lactose_intolerant: true,
		nut_allergies: false,
		organic_products: false,
		nonorganic_products: true,
		price: 2.99
	},
	{
		name: "organic brocoli",
		lactose_intolerant: false,
		nut_allergies: false,
		organic_products: true,
		nonorganic_products: false,
		price: 3.49
	},
	{
		name: "milk(2l)",
		lactose_intolerant: true,
		nut_allergies: false,
		organic_products: false,
		nonorganic_products: true,
		price: 4.49
	},
	{
		name: "organic strawberries",
		lactose_intolerant: false,
		nut_allergies: false,
		organic_products: true,
		nonorganic_products: false,
		price: 5.99
	},
	{
		name: "cheese(700g)",
		lactose_intolerant: true,
		nut_allergies: false,
		organic_products: false,
		nonorganic_products: true,
		price: 8.99
	},
	{
		name: "walnuts(400g)",
		lactose_intolerant: false,
		nut_allergies: true,
		organic_products: false,
		nonorganic_products: true,
		price: 9.29
	},
	{
		name: "salmon",
		lactose_intolerant: false,
		nut_allergies: false,
		organic_products: false,
		nonorganic_products: true,
		price: 10.00
	},
	{
		name: "almonds(907g)",
		lactose_intolerant: false,
		nut_allergies: true,
		organic_products: false,
		nonorganic_products: true,
		price: 14.99
	}
];

function restrictListProducts(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "lactose-intolerant") && (prods[i].lactose_intolerant == false)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "nut allergies") && (prods[i].nut_allergies == false)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "organic products") && (prods[i].organic_products == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "non-organic products") && (prods[i].nonorganic_products == true)){
			product_names.push(prods[i].name);
		}
		else if (restriction == "none"){
			product_names.push(prods[i].name);
		}
	}
	return product_names;
}

function restrictListPrices(prods, restriction) {
	let prices = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "lactose-intolerant") && (prods[i].lactose_intolerant == false)){
			prices.push(prods[i].price);
		}
		else if ((restriction == "nut allergies") && (prods[i].nut_allergies == false)){
			prices.push(prods[i].price);
		}
		else if ((restriction == "organic products") && (prods[i].organic_products == true)){
			prices.push(prods[i].price);
		}
		else if ((restriction == "non-organic products") && (prods[i].nonorganic_products == true)){
			prices.push(prods[i].price);
		}
		else if (restriction == "none"){
			prices.push(prods[i].price);
		}
	}
	return prices;
}

function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}