import {useQuery} from 'react-query';
import {useDispatch} from 'react-redux';
import {IProduct} from '../types/products/type';
import {getAllProducts} from '../redux/reducers/productslice/reducer/getAllProductsReducer';

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
      dispatch(getAllProducts(data));
    },
  });

  return {isLoading, isError, data, error, refetch};
};

export default useGetAllProductsHooks;
