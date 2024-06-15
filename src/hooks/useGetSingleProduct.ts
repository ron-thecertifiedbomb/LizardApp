import { useQuery } from 'react-query';
import { useDispatch } from 'react-redux';
import { singleProductData } from '../redux/reducers/getAllProductsReducer';

const useGetSingleProduct = (productId: string) => {
  const dispatch = useDispatch();

  const fetchData = async () => {
    const response = await fetch(
      `https://nextjs-server-rho.vercel.app/api/products/getProduct/route?_id=${productId}`,
    );
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  };

  const { isLoading, isError, data, error } = useQuery(['product', productId], fetchData, {
    onSuccess: (data) => {
      dispatch(singleProductData(data));
    },
  });

  return { isLoading, isError, data, error };
};

export default useGetSingleProduct;
