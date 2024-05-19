
import { Product } from '../../../type';

export const UPDATE_PRODUCT_FIELD = 'UPDATE_PRODUCT_FIELD';


export interface UpdateProductFieldAction {
  type: typeof UPDATE_PRODUCT_FIELD;
  payload: {
    field: keyof Product;
    nestedField?: keyof Product['specifications'];
    value: string;
  };
}


export type UpdateProductFieldActionTypes = UpdateProductFieldAction;

export const updateProductField = (
  field: keyof Product,
  value: string,
  nestedField?: keyof Product['specifications']
): UpdateProductFieldAction => ({
  type: UPDATE_PRODUCT_FIELD,
  payload: { field, nestedField, value },
});