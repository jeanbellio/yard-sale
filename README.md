# YardSale

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.0.

This is a little project to simplify the selling of common products. This was idealized while I was moving to another country.

## How to use

The use of it is really simple:
1 - For each product, you need to have a new item inside the json list inside the `product.json` file with the following structure:
```
        {
			"name": "TV Hisense ULED 55''",
			"description": "TV HISENSE 55U7QF (ULED - 55'' - 140 cm - 4K Ultra HD - Smart TV)", <= Product description
			"price": 1000, <= Product price 
			"galeryFolderName": "tv", <= Folder name where the pictures are
			"galeryImages": [
				"1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg", "6.jpeg", "main.jpeg"
			], <= Image list with extension
			"available": true <= 'true' to products while available and 'false' to products already sell
		},
```