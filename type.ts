// types.ts
export type RootStackParamList = {
    Home: undefined;
    Details: undefined;
    Settings: undefined;
    CoffeePage: undefined;
    DrawerNavigator: undefined;
    Registration: undefined;
    Login: undefined;
  };


  export interface UpdateProductFieldAction {
    type: string;
    payload: {
      field: string;
      nestedField?: string;
      value: any;
    };
  }
  
  // Define state interface
  export interface Product {
    _id: string;
    name: string;
    brand: string;
    price: number;
    quantity: number;
    specifications: {
      processor: string;
      graphics: string;
      storage: string;
      resolution: string;
      maxFrameRate: string;
    };
    includedItems: string[];
    availableColors: string[];
    [key: string]: any; // Index signature
  }
  
  
  export interface UpdateProductState {
    product: Product;
    quantity: number;
  }
  
  // Define initial state
  const initialState: UpdateProductState = {
    product: {
      _id: '',
      name: '',
      brand: '',
      price: 0,
      quantity: 0,
      specifications: {
        processor: '',
        graphics: '',
        storage: '',
        resolution: '',
        maxFrameRate: '',
      },
      includedItems: [],
      availableColors: [],
    },
    quantity: 1,
  };
  