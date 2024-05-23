import {useQuery} from 'react-query';

import {IProduct} from '../../type';

import {allProductsData} from '../redux/reducers/getProductsReducer';
import {useDispatch} from 'react-redux';

const useGetAllProductsHooks = () => {
  const dispatch = useDispatch();
  const fetchData = async () => {
    const response = await fetch(
      'https://nextjs-server-rho.vercel.app/api/products/getAllProducts/route',
    );
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json() as Promise<IProduct[]>;
  };

  const {isLoading, isError, data, error, refetch} = useQuery<
    IProduct[],
    Error
  >('data', fetchData, {
    onSuccess: data => {
      dispatch(allProductsData(data));
    },
  });

  return {isLoading, isError, data, error, refetch};
};

export default useGetAllProductsHooks;
