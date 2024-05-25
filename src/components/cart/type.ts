export interface CartData {
  _id: string;
  name: string;
  price: number;
  quantity: number;
  quantityOrdered: number;
  totalOrderPrice: number;
  dateAdded: string; 
  timeAdded: string;
  isSelected: boolean;
}