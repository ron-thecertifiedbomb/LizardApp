import { useMutation } from 'react-query';
import { RootObject } from '../../components/cart/type';

export const useCartMutation = () => {

  const mutation = useMutation(

    async (newItem: RootObject) => {
      
      const data = JSON.stringify(newItem);

      const response = await fetch(
        'https://nextjs-server-rho.vercel.app/api/products/cart/cartlist/route',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: data,
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
