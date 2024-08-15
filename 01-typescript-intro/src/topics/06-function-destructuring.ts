export interface Product {
  description: string;
  price: number;
}

const phone: Product = {
  description: "Nokia A1",
  price: 150.0,
};

const tablet: Product = {
  description: "iPad Air",
  price: 250.0,
};

interface TaxCalculationOpntions {
  tax: number;
  products: Product[];
}

// function taxCalculation(options: TaxCalculationOpntions): [number, number] {
// function taxCalculation(options: TaxCalculationOpntions): number[] {
// function taxCalculation({ tax, products }: TaxCalculationOpntions): number[] {
export function taxCalculation(options: TaxCalculationOpntions): [number, number] {

    const { tax, products } = options;

  let total = 0;

  products.forEach(({ price }) => {
    total += price;
  });

  return [total, total * tax];
}

const products = [phone, tablet];
const tax = 0.15;

const [total, totalTax] = taxCalculation({
  products,
  tax,
});

// console.log("Total: ", total);
// console.log("Tax: ", totalTax);

