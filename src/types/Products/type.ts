
// interface specificationItem {
//   id: string;
//   value: string;
// }

interface specifications {
  _id: string;
  processor: string;
  graphics: string;
  storage: string;
  resolution: string;
  maxFrameRate: string;
  
}

export interface IProduct {
  _id: string;
  name: string;
  brand: string;
  price: number;
  quantity: number;
  quantityOrdered: number;
  totalOrderPrice: number;
  dateAdded: string;
  isSelected: boolean;
  category: string;
  specifications: specifications;
  includedItems: string[];
  availableColors: string[];
  imagelink_portrait: string;
  imagelink_square: string;
}