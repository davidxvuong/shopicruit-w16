function getList() {

	//fetch the list
	$.get("http://shopicruit.myshopify.com/products.json", getListCallback);
}

function getListCallback(obj) {
	var total = 0;

	//iterate through the json object, find the ones that match the requirements
	for (var i = 0; i < obj.products.length; i++) {
		var product_type = obj.products[i].product_type;

		if (product_type === "Wallet" || product_type === "Lamp") {
			var variants = obj.products[i].variants;

			for (var j = 0; j < variants.length; j++) {
				total += parseFloat(variants[j].price);
				console.log(variants[j].price);
			}
		}
	}

	console.log(total);