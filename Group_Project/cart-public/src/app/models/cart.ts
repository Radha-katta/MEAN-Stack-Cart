export class Cart {


  userId: string;
  productList:[CartUserProduct];
  orderedProductsList: [CartUserProduct];

  constructor(userId: string, userProduct :CartUserProduct) {
    this.userId = userId;
    this.productList.push(userProduct);
  }
}

export class CartUserProduct{
  productId: string;
  quantity: string;

  constructor(productId: string, quantity :string) {
    this.productId = productId;
    this.quantity =quantity;
  }
}

