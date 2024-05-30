export interface  CartData {
  cartId: string;
  ownerId: string | null;
  productId: string;
  name: string;
  price: number;
  quantity: number;
  quantityOrdered: number;
  totalOrderPrice: number;
  dateAdded: string; 
  timeAdded: string;
  isSelected: boolean;
}



