export interface ICartItem {
  id: string;
  price: number;
  name: string;
  quantity: number;
  imageUrl: string;
}

export interface ICart {
  [productId: string]: ICartItem;
}
