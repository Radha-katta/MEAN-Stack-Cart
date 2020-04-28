/*export class CartUser {
  userId:string;
  qty: string;
  constructor(userId, qty) {
    this.userId = userId;
    this.qty = qty;
  }
}*/

export class Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
  //users:[CartUser];


  constructor(id: string, name:string, description: string, price:number,
              imageUrl:string,
              category:string) {
    this._id = id;
    this.name = name;
    this.description  = description;
    this.price =price;
    this.imageUrl = imageUrl;
    this.category = category;
    //this.users.push(cartUser);
  }
}


