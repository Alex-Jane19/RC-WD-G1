import { calculateTotal } from './order.js';

import type { Product } from './types.js';

const products: Product[] = [
    { id: 1, title: 'Headphones', price: 2000 },
    { id: 2, title: 'Laptop', price: 20000 },
    { id: 3, title: 'Monitor', price: 10000 },
];

const total = calculateTotal(products);
console.log(`Total price: ${total}`);