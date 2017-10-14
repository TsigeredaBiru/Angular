export class Product {
  id: number;
  name: String;
  description: String;
  price: number;
  condition: condition;
}

/* enum Condition {

  new, used, dicontinued
} */
 const condition = {
  New: 'new' as 'new',
  Used: 'used' as 'used',
  Discontinued: 'discontinued' as 'discontinued',
 };
type condition = (typeof condition)[keyof typeof condition];
export { condition };
