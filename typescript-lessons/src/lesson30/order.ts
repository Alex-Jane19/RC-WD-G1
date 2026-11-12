import type { Product } from './types.js';

export function calculateTotal(products: Product[]): number {
    return products.reduce((total, product) => total + product.price, 0);

}