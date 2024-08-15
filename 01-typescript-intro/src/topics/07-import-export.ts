import { Product, taxCalculation } from "./06-function-destructuring";

const shoppingCart: Product[] = [
    {
        description: 'Nokia',
        price: 100
    },
    {
        description: 'IPad',
        price: 500
    }
];

// Tax = 0.15
const [ total, tax ] = taxCalculation({
    products: shoppingCart,
    tax: 0.15
});

console.log('Total', total);
console.log('Tax', tax)

export {};
