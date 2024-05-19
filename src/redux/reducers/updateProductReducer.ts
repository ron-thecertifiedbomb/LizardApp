import { Reducer } from "redux";
import { UpdateProductFieldAction, UpdateProductState } from "../../../type";


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


const updateProductReducer: Reducer<UpdateProductState, UpdateProductFieldAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case 'UPDATE_PRODUCT_FIELD':
      const { field, nestedField, value } = action.payload;
      return {
        ...state,
        product: {
          ...state.product,
          [field]: nestedField
            ? {
                ...state.product[field],
                [nestedField]: value,
              }
            : value,
        },
      };
    default:
      return state;
  }
};

export default updateProductReducer;