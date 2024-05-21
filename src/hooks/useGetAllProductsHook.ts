import {useQuery} from 'react-query';

import {IProduct} from '../../type';

const useGetAllProductsHooks = () => {
    
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
  >('data', fetchData);

  return {isLoading, isError, data, error, refetch};
};

export default useGetAllProductsHooks;
