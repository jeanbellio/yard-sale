# YardSale

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.0.

This is a little project to simplify the selling of common products. This was idealized while I was moving to another country and had to sell my home appliances, such as a toaster, microwave, etc. and rather than create a PDF and send it to friends I decided to create this application and update it as I sold them.

You can take a look at a live version of it by [clicking here](https://danielmaria.github.io/yard-sale/)

## How to use

The use of it is really simple:

1 - For each product, you need to have a new item in the JSON list inside the `product.json` file with the following structure:
```
    {
        "name": "TV Hisense ULED 55''",
        "description": "TV HISENSE 55U7QF (ULED - 55'' - 140 cm - 4K Ultra HD - Smart TV)",
        "price": 1000,
        "galeryFolderName": "tv",
        "galeryImages": [
            "1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg", "6.jpeg", "main.jpeg"
        ],
        "available": true
    },
```
*galeryFolderName* = Folder name where the pictures are
*galeryImages* = Image list with extension
*available* = 'true' to products while available and 'false' to products already sell

2 - Add a folder inside the folders `/assets/image/products` for each product mentioned inside the `product.json` file with product images.

This is all you need to run this project customized with your products. Every time you sell a product, the only thing you need to do is to change the property 'available' to false and commit this change.

## How to run locally

```
git clone https://github.com/danielmaria/yard-sale.git
npm i
ng serve
```
