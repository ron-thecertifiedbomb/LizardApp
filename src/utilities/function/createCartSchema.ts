import { useMutation } from 'react-query';
import { CartData } from '../../components/cart/type';
import { useSelector } from 'react-redux';
import { selectUserId } from '../../redux/selectors/selectors';



export const useCartMutation = () => {

   

  const mutation = useMutation(
    
    async (newItem: CartData) => {
      const data = JSON.stringify(newItem);

      const response = await fetch(
        'https://nextjs-server-rho.vercel.app/api/products/cart/cartlist/route',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        throw new Error('Failed to add cart items');
      }

      return response.json();
    }
  );

  return mutation;
};

export const handleAddToCart = (userID: any) => {

  const mutation = useCartMutation();

  const newItem: CartData = {
    userId: userID,
    CartItems: [
      {
        name: '',
        price: 0,
        quantity: 0,
        totalOrderPrice: 0,
        quantityOrdered: 0,
        isSelected: false,
        dateAdded: '',
        timeAdded: '',
      },
    ],
  };

  mutation.mutate(newItem);



};
