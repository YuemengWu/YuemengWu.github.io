var products = [
	{
		name: "brocoli",
		lactose_intolerant: false,
		nut_allergies: false,
		organic_products: false,
		nonorganic_products: true,
		sale: false,
		image: "1.jpg",
		price: 1.99
	},
	{
		name: "yogurt(650g) (SALE)",
		lactose_intolerant: true,
		nut_allergies: false,
		organic_products: false,
		nonorganic_products: true,
		sale: true,
		image: "2.jpg",
		price: 1.99
	},
	{
		name: "bread",
		lactose_intolerant: false,
		nut_allergies: false,
		organic_products: false,
		nonorganic_products: true,
		sale: false,
		image: "3.jpg",
		price: 2.35
	},
	{
		name: "yogurt(650g)",
		lactose_intolerant: true,
		nut_allergies: false,
		organic_products: false,
		nonorganic_products: true,
		sale: false,
		image: "4.jpg",
		price: 2.99
	},
	{
		name: "organic brocoli",
		lactose_intolerant: false,
		nut_allergies: false,
		organic_products: true,
		nonorganic_products: false,
		sale: false,
		image: "5.jpg",
		price: 3.49
	},
	{
		name: "milk(2l) (SALE)",
		lactose_intolerant: true,
		nut_allergies: false,
		organic_products: false,
		nonorganic_products: true,
		sale: true,
		image: "6.jpg",
		price: 4
	},
	{
		name: "eggs(12) (SALE)",
		lactose_intolerant: false,
		nut_allergies: false,
		organic_products: false,
		nonorganic_products: true,
		sale: true,
		image: "7.jpg",
		price: 4.29
	},
	{
		name: "milk(2l)",
		lactose_intolerant: true,
		nut_allergies: false,
		organic_products: false,
		nonorganic_products: true,
		sale: false,
		image: "8.jpg",
		price: 4.49
	},
	{
		name: "organic strawberries",
		lactose_intolerant: false,
		nut_allergies: false,
		organic_products: true,
		nonorganic_products: false,
		sale: false,
		image: "9.jpg",
		price: 5.99
	},
	{
		name: "cheese(700g)",
		lactose_intolerant: true,
		nut_allergies: false,
		organic_products: false,
		nonorganic_products: true,
		sale: false,
		image: "10.jpg",
		price: 8.99
	},
	{
		name: "walnuts(400g)",
		lactose_intolerant: false,
		nut_allergies: true,
		organic_products: false,
		nonorganic_products: true,
		sale: false,
		image: "11.jpg",
		price: 9.29
	},
	{
		name: "salmon",
		lactose_intolerant: false,
		nut_allergies: false,
		organic_products: false,
		nonorganic_products: true,
		sale: false,
		image: "12.jpg",
		price: 10.00
	},
	{
		name: "almonds(907g) (SALE)",
		lactose_intolerant: false,
		nut_allergies: true,
		organic_products: false,
		nonorganic_products: true,
		sale: true,
		image: "13.jpg",
		price: 12.99
	},
	{
		name: "almonds(907g)",
		lactose_intolerant: false,
		nut_allergies: true,
		organic_products: false,
		nonorganic_products: true,
		sale: false,
		image: "14.jpg",
		price: 14.99
	}
];

function restrictListProducts(prods, restriction1, restriction2, restriction3, restriction4) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction1 == "lactose-intolerant") && (prods[i].lactose_intolerant == false) && (restriction2 == "nut allergies") && (prods[i].nut_allergies == false) && (restriction3 == "organic products") && (prods[i].organic_products == true) && (restriction4 == "sale products") && (prods[i].sale == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction1 == "lactose-intolerant") && (prods[i].lactose_intolerant == false) && (restriction2 == "nut allergies") && (prods[i].nut_allergies == false) && (restriction3 == "organic products") && (prods[i].organic_products == true) && (restriction4 == "")){
			product_names.push(prods[i].name);
		}
		else if ((restriction1 == "lactose-intolerant") && (prods[i].lactose_intolerant == false) && (restriction2 == "nut allergies") && (prods[i].nut_allergies == false) && (restriction3 == "non-organic products") && (prods[i].nonorganic_products == true) && (restriction4 == "sale products") && (prods[i].sale == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction1 == "lactose-intolerant") && (prods[i].lactose_intolerant == false) && (restriction2 == "nut allergies") && (prods[i].nut_allergies == false) && (restriction3 == "non-organic products") && (prods[i].nonorganic_products == true) && (restriction4 == "")){
			product_names.push(prods[i].name);
		}
		else if ((restriction1 == "lactose-intolerant") && (prods[i].lactose_intolerant == false) && (restriction2 == "nut allergies") && (prods[i].nut_allergies == false) && (restriction3 == "") && (restriction4 == "sale products") && (prods[i].sale == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction1 == "lactose-intolerant") && (prods[i].lactose_intolerant == false) && (restriction2 == "nut allergies") && (prods[i].nut_allergies == false) && (restriction3 == "") && (restriction4 == "")){
			product_names.push(prods[i].name);
		}
		else if ((restriction1 == "lactose-intolerant") && (prods[i].lactose_intolerant == false) && (restriction2 == "") && (restriction3 == "organic products") && (prods[i].organic_products == true) && (restriction4 == "sale products") && (prods[i].sale == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction1 == "lactose-intolerant") && (prods[i].lactose_intolerant == false) && (restriction2 == "") && (restriction3 == "organic products") && (prods[i].organic_products == true) && (restriction4 == "")){
			product_names.push(prods[i].name);
		}
		else if ((restriction1 == "lactose-intolerant") && (prods[i].lactose_intolerant == false) && (restriction2 == "") && (restriction3 == "non-organic products") && (prods[i].nonorganic_products == true) && (restriction4 == "sale products") && (prods[i].sale == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction1 == "lactose-intolerant") && (prods[i].lactose_intolerant == false) && (restriction2 == "") && (restriction3 == "non-organic products") && (prods[i].nonorganic_products == true) && (restriction4 == "")){
			product_names.push(prods[i].name);
		}
		else if ((restriction1 == "lactose-intolerant") && (prods[i].lactose_intolerant == false) && (restriction2 == "") && (restriction3 == "") && (restriction4 == "sale products") && (prods[i].sale == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction1 == "lactose-intolerant") && (prods[i].lactose_intolerant == false) && (restriction2 == "") && (restriction3 == "") && (restriction4 == "")){
			product_names.push(prods[i].name);
		}
		else if ((restriction1 == "nut allergies") && (prods[i].nut_allergies == false) && (restriction2 == "") && (restriction3 == "organic products") && (prods[i].organic_products == true) && (restriction4 == "sale products") && (prods[i].sale == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction1 == "nut allergies") && (prods[i].nut_allergies == false) && (restriction2 == "") && (restriction3 == "organic products") && (prods[i].organic_products == true) && (restriction4 == "")){
			product_names.push(prods[i].name);
		}
		else if ((restriction1 == "nut allergies") && (prods[i].nut_allergies == false) && (restriction2 == "") && (restriction3 == "non-organic products") && (prods[i].nonorganic_products == true) && (restriction4 == "sale products") && (prods[i].sale == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction1 == "nut allergies") && (prods[i].nut_allergies == false) && (restriction2 == "") && (restriction3 == "non-organic products") && (prods[i].nonorganic_products == true) && (restriction4 == "")){
			product_names.push(prods[i].name);
		}
		else if ((restriction1 == "nut allergies") && (prods[i].nut_allergies == false) && (restriction2 == "") && (restriction3 == "") && (restriction4 == "sale products") && (prods[i].sale == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction1 == "nut allergies") && (prods[i].nut_allergies == false) && (restriction2 == "") && (restriction3 == "") && (restriction4 == "")){
			product_names.push(prods[i].name);
		}
		else if ((restriction1 == "none") && (restriction2 == "") && (restriction3 == "organic products") && (prods[i].organic_products == true) && (restriction4 == "sale products") && (prods[i].sale == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction1 == "none") && (restriction2 == "") && (restriction3 == "organic products") && (prods[i].organic_products == true) && (restriction4 == "")){
			product_names.push(prods[i].name);
		}
		else if ((restriction1 == "none") && (restriction2 == "") && (restriction3 == "non-organic products") && (prods[i].nonorganic_products == true) && (restriction4 == "sale products") && (prods[i].sale == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction1 == "none") && (restriction2 == "") && (restriction3 == "non-organic products") && (prods[i].nonorganic_products == true) && (restriction4 == "")){
			product_names.push(prods[i].name);
		}
		else if ((restriction1 == "none") && (restriction2 == "") && (restriction3 == "") && (restriction4 == "sale products") && (prods[i].sale == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction1 == "none") && (restriction2 == "") && (restriction3 == "") && (restriction4 == "")){
			product_names.push(prods[i].name);
		}
	}
	return product_names;
}

function restrictListPrices(prods, restriction1, restriction2, restriction3, restriction4) {
	let prices = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction1 == "lactose-intolerant") && (prods[i].lactose_intolerant == false) && (restriction2 == "nut allergies") && (prods[i].nut_allergies == false) && (restriction3 == "organic products") && (prods[i].organic_products == true) && (restriction4 == "sale products") && (prods[i].sale == true)){
			prices.push(prods[i].price);
		}
		else if ((restriction1 == "lactose-intolerant") && (prods[i].lactose_intolerant == false) && (restriction2 == "nut allergies") && (prods[i].nut_allergies == false) && (restriction3 == "organic products") && (prods[i].organic_products == true) && (restriction4 == "")){
			prices.push(prods[i].price);
		}
		else if ((restriction1 == "lactose-intolerant") && (prods[i].lactose_intolerant == false) && (restriction2 == "nut allergies") && (prods[i].nut_allergies == false) && (restriction3 == "non-organic products") && (prods[i].nonorganic_products == true) && (restriction4 == "sale products") && (prods[i].sale == true)){
			prices.push(prods[i].price);
		}
		else if ((restriction1 == "lactose-intolerant") && (prods[i].lactose_intolerant == false) && (restriction2 == "nut allergies") && (prods[i].nut_allergies == false) && (restriction3 == "non-organic products") && (prods[i].nonorganic_products == true) && (restriction4 == "")){
			prices.push(prods[i].price);
		}
		else if ((restriction1 == "lactose-intolerant") && (prods[i].lactose_intolerant == false) && (restriction2 == "nut allergies") && (prods[i].nut_allergies == false) && (restriction3 == "") && (restriction4 == "sale products") && (prods[i].sale == true)){
			prices.push(prods[i].price);
		}
		else if ((restriction1 == "lactose-intolerant") && (prods[i].lactose_intolerant == false) && (restriction2 == "nut allergies") && (prods[i].nut_allergies == false) && (restriction3 == "") && (restriction4 == "")){
			prices.push(prods[i].price);
		}
		else if ((restriction1 == "lactose-intolerant") && (prods[i].lactose_intolerant == false) && (restriction2 == "") && (restriction3 == "organic products") && (prods[i].organic_products == true) && (restriction4 == "sale products") && (prods[i].sale == true)){
			prices.push(prods[i].price);
		}
		else if ((restriction1 == "lactose-intolerant") && (prods[i].lactose_intolerant == false) && (restriction2 == "") && (restriction3 == "organic products") && (prods[i].organic_products == true) && (restriction4 == "")){
			prices.push(prods[i].price);
		}
		else if ((restriction1 == "lactose-intolerant") && (prods[i].lactose_intolerant == false) && (restriction2 == "") && (restriction3 == "non-organic products") && (prods[i].nonorganic_products == true) && (restriction4 == "sale products") && (prods[i].sale == true)){
			prices.push(prods[i].price);
		}
		else if ((restriction1 == "lactose-intolerant") && (prods[i].lactose_intolerant == false) && (restriction2 == "") && (restriction3 == "non-organic products") && (prods[i].nonorganic_products == true) && (restriction4 == "")){
			prices.push(prods[i].price);
		}
		else if ((restriction1 == "lactose-intolerant") && (prods[i].lactose_intolerant == false) && (restriction2 == "") && (restriction3 == "") && (restriction4 == "sale products") && (prods[i].sale == true)){
			prices.push(prods[i].price);
		}
		else if ((restriction1 == "lactose-intolerant") && (prods[i].lactose_intolerant == false) && (restriction2 == "") && (restriction3 == "") && (restriction4 == "")){
			prices.push(prods[i].price);
		}
		else if ((restriction1 == "nut allergies") && (prods[i].nut_allergies == false) && (restriction2 == "") && (restriction3 == "organic products") && (prods[i].organic_products == true) && (restriction4 == "sale products") && (prods[i].sale == true)){
			prices.push(prods[i].price);
		}
		else if ((restriction1 == "nut allergies") && (prods[i].nut_allergies == false) && (restriction2 == "") && (restriction3 == "organic products") && (prods[i].organic_products == true) && (restriction4 == "")){
			prices.push(prods[i].price);
		}
		else if ((restriction1 == "nut allergies") && (prods[i].nut_allergies == false) && (restriction2 == "") && (restriction3 == "non-organic products") && (prods[i].nonorganic_products == true) && (restriction4 == "sale products") && (prods[i].sale == true)){
			prices.push(prods[i].price);
		}
		else if ((restriction1 == "nut allergies") && (prods[i].nut_allergies == false) && (restriction2 == "") && (restriction3 == "non-organic products") && (prods[i].nonorganic_products == true) && (restriction4 == "")){
			prices.push(prods[i].price);
		}
		else if ((restriction1 == "nut allergies") && (prods[i].nut_allergies == false) && (restriction2 == "") && (restriction3 == "") && (restriction4 == "sale products") && (prods[i].sale == true)){
			prices.push(prods[i].price);
		}
		else if ((restriction1 == "nut allergies") && (prods[i].nut_allergies == false) && (restriction2 == "") && (restriction3 == "") && (restriction4 == "")){
			prices.push(prods[i].price);
		}
		else if ((restriction1 == "none") && (restriction2 == "") && (restriction3 == "organic products") && (prods[i].organic_products == true) && (restriction4 == "sale products") && (prods[i].sale == true)){
			prices.push(prods[i].price);
		}
		else if ((restriction1 == "none") && (restriction2 == "") && (restriction3 == "organic products") && (prods[i].organic_products == true) && (restriction4 == "")){
			prices.push(prods[i].price);
		}
		else if ((restriction1 == "none") && (restriction2 == "") && (restriction3 == "non-organic products") && (prods[i].nonorganic_products == true) && (restriction4 == "sale products") && (prods[i].sale == true)){
			prices.push(prods[i].price);
		}
		else if ((restriction1 == "none") && (restriction2 == "") && (restriction3 == "non-organic products") && (prods[i].nonorganic_products == true) && (restriction4 == "")){
			prices.push(prods[i].price);
		}
		else if ((restriction1 == "none") && (restriction2 == "") && (restriction3 == "") && (restriction4 == "sale products") && (prods[i].sale == true)){
			prices.push(prods[i].price);
		}
		else if ((restriction1 == "none") && (restriction2 == "") && (restriction3 == "") && (restriction4 == "")){
			prices.push(prods[i].price);
		}
	}
	return prices;
}

function restrictListImages(prods, restriction1, restriction2, restriction3, restriction4) {
	let images = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction1 == "lactose-intolerant") && (prods[i].lactose_intolerant == false) && (restriction2 == "nut allergies") && (prods[i].nut_allergies == false) && (restriction3 == "organic products") && (prods[i].organic_products == true) && (restriction4 == "sale products") && (prods[i].sale == true)){
			images.push(prods[i].image);
		}
		else if ((restriction1 == "lactose-intolerant") && (prods[i].lactose_intolerant == false) && (restriction2 == "nut allergies") && (prods[i].nut_allergies == false) && (restriction3 == "organic products") && (prods[i].organic_products == true) && (restriction4 == "")){
			images.push(prods[i].image);
		}
		else if ((restriction1 == "lactose-intolerant") && (prods[i].lactose_intolerant == false) && (restriction2 == "nut allergies") && (prods[i].nut_allergies == false) && (restriction3 == "non-organic products") && (prods[i].nonorganic_products == true) && (restriction4 == "sale products") && (prods[i].sale == true)){
			images.push(prods[i].image);
		}
		else if ((restriction1 == "lactose-intolerant") && (prods[i].lactose_intolerant == false) && (restriction2 == "nut allergies") && (prods[i].nut_allergies == false) && (restriction3 == "non-organic products") && (prods[i].nonorganic_products == true) && (restriction4 == "")){
			images.push(prods[i].image);
		}
		else if ((restriction1 == "lactose-intolerant") && (prods[i].lactose_intolerant == false) && (restriction2 == "nut allergies") && (prods[i].nut_allergies == false) && (restriction3 == "") && (restriction4 == "sale products") && (prods[i].sale == true)){
			images.push(prods[i].image);
		}
		else if ((restriction1 == "lactose-intolerant") && (prods[i].lactose_intolerant == false) && (restriction2 == "nut allergies") && (prods[i].nut_allergies == false) && (restriction3 == "") && (restriction4 == "")){
			images.push(prods[i].image);
		}
		else if ((restriction1 == "lactose-intolerant") && (prods[i].lactose_intolerant == false) && (restriction2 == "") && (restriction3 == "organic products") && (prods[i].organic_products == true) && (restriction4 == "sale products") && (prods[i].sale == true)){
			images.push(prods[i].image);
		}
		else if ((restriction1 == "lactose-intolerant") && (prods[i].lactose_intolerant == false) && (restriction2 == "") && (restriction3 == "organic products") && (prods[i].organic_products == true) && (restriction4 == "")){
			images.push(prods[i].image);
		}
		else if ((restriction1 == "lactose-intolerant") && (prods[i].lactose_intolerant == false) && (restriction2 == "") && (restriction3 == "non-organic products") && (prods[i].nonorganic_products == true) && (restriction4 == "sale products") && (prods[i].sale == true)){
			images.push(prods[i].image);
		}
		else if ((restriction1 == "lactose-intolerant") && (prods[i].lactose_intolerant == false) && (restriction2 == "") && (restriction3 == "non-organic products") && (prods[i].nonorganic_products == true) && (restriction4 == "")){
			images.push(prods[i].image);
		}
		else if ((restriction1 == "lactose-intolerant") && (prods[i].lactose_intolerant == false) && (restriction2 == "") && (restriction3 == "") && (restriction4 == "sale products") && (prods[i].sale == true)){
			images.push(prods[i].image);
		}
		else if ((restriction1 == "lactose-intolerant") && (prods[i].lactose_intolerant == false) && (restriction2 == "") && (restriction3 == "") && (restriction4 == "")){
			images.push(prods[i].image);
		}
		else if ((restriction1 == "nut allergies") && (prods[i].nut_allergies == false) && (restriction2 == "") && (restriction3 == "organic products") && (prods[i].organic_products == true) && (restriction4 == "sale products") && (prods[i].sale == true)){
			images.push(prods[i].image);
		}
		else if ((restriction1 == "nut allergies") && (prods[i].nut_allergies == false) && (restriction2 == "") && (restriction3 == "organic products") && (prods[i].organic_products == true) && (restriction4 == "")){
			images.push(prods[i].image);
		}
		else if ((restriction1 == "nut allergies") && (prods[i].nut_allergies == false) && (restriction2 == "") && (restriction3 == "non-organic products") && (prods[i].nonorganic_products == true) && (restriction4 == "sale products") && (prods[i].sale == true)){
			images.push(prods[i].image);
		}
		else if ((restriction1 == "nut allergies") && (prods[i].nut_allergies == false) && (restriction2 == "") && (restriction3 == "non-organic products") && (prods[i].nonorganic_products == true) && (restriction4 == "")){
			images.push(prods[i].image);
		}
		else if ((restriction1 == "nut allergies") && (prods[i].nut_allergies == false) && (restriction2 == "") && (restriction3 == "") && (restriction4 == "sale products") && (prods[i].sale == true)){
			images.push(prods[i].image);
		}
		else if ((restriction1 == "nut allergies") && (prods[i].nut_allergies == false) && (restriction2 == "") && (restriction3 == "") && (restriction4 == "")){
			images.push(prods[i].image);
		}
		else if ((restriction1 == "none") && (restriction2 == "") && (restriction3 == "organic products") && (prods[i].organic_products == true) && (restriction4 == "sale products") && (prods[i].sale == true)){
			images.push(prods[i].image);
		}
		else if ((restriction1 == "none") && (restriction2 == "") && (restriction3 == "organic products") && (prods[i].organic_products == true) && (restriction4 == "")){
			images.push(prods[i].image);
		}
		else if ((restriction1 == "none") && (restriction2 == "") && (restriction3 == "non-organic products") && (prods[i].nonorganic_products == true) && (restriction4 == "sale products") && (prods[i].sale == true)){
			images.push(prods[i].image);
		}
		else if ((restriction1 == "none") && (restriction2 == "") && (restriction3 == "non-organic products") && (prods[i].nonorganic_products == true) && (restriction4 == "")){
			images.push(prods[i].image);
		}
		else if ((restriction1 == "none") && (restriction2 == "") && (restriction3 == "") && (restriction4 == "sale products") && (prods[i].sale == true)){
			images.push(prods[i].image);
		}
		else if ((restriction1 == "none") && (restriction2 == "") && (restriction3 == "") && (restriction4 == "")){
			images.push(prods[i].image);
		}
	}
	return images;
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