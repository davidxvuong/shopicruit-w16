function getList() {

	//fetch the list
	$.get("http://shopicruit.myshopify.com/products.json", getListCallback);
}

function getListCallback(obj) {
	var total = getTotal(obj.products);

	console.log(total);
}

function getTotal(products) {

	//sanity check: if there's no more products left to check, we are done.
	if (products.length == 0) {
		return 0;
	}

	var total = 0;

	//grab the first product from the json object, check if its a Wallet or a Lamp. If it is, sum up the cost of the variants associated with the product
	var product = products.slice(0,1);

	if (product[0].product_type == "Wallet" || product[0].product_type == "Lamp") {
		//correct item
		var variants = product[0].variants;

		for (var j = 0; j < variants.length; j++) {
			total += parseFloat(variants[j].price);
			console.log(variants[j].price);
		}
	}

	//find the rest recursively
	total += getTotal(products.slice(1));
	

	return total;

}