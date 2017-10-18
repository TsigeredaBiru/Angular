import { Product, condition } from './product';


export const PRODUCTS: Product[] = [
  {
        id: 1,
        name : 'Laptop',
        description: 'Asus-1200',
        price: 1200,
        condition : condition.Discontinued
       },

       {
        id: 2,
        name : 'Cellphone',
        description: 'Apple-Iphone-7',
        price: 800,
        condition : condition.New
       },
       {
        id: 3,
        name : 'Cellphone',
        description: 'Samsung-5S',
        price: 300,
        condition : condition.Used
       },
       {
        id: 4,
        name : 'Flat Screen',
        description: 'Apple',
        price: 100,
        condition : condition.Discontinued
       },
       {
        id: 5,
        name : 'Video-Recorder',
        description: 'Sony',
        price: 200,
        condition : condition.Discontinued
       },
       {
        id: 6,
        name : 'Flat-TV',
        description: 'Grunding-lastest version-48 inch',
        price: 600,
        condition : condition.New
       },
       {
        id: 7,
        name : 'Kindle-fire',
        description: 'Amazon -1st version',
        price: 100,
        condition : condition.Discontinued
       },
       {
        id: 8,
        name : 'Ipad',
        description: 'Apple - latest version',
        price: 500,
        condition : condition.New
       },
       {
        id: 9,
        name : 'Samsung Galaxy',
        description: 'Tablet',
        price: 400,
        condition : condition.New
       },
       {
        id: 10,
        name : 'Google tablet',
        description: 'Google, latest model',
        price: 400,
        condition : condition.New
       }
];
