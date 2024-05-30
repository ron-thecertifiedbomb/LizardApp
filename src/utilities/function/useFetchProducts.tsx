
import { useQuery } from 'react-query';
import { useDispatch } from 'react-redux';
import { IProduct } from '../../types/Products/type';
import { allProductsData } from '../../redux/reducers/getAllProductsReducer';
import { fetchData } from './useFetchProductFunction';


export const useFetchProducts = () => {

  const dispatch = useDispatch();

  const { isLoading, isError, data, error, refetch } = useQuery<
    IProduct[],
    Error
  >('data', fetchData, {
    onSuccess: data => {
      dispatch(allProductsData(data));
    },
  });

  return { isLoading, isError, data, error, refetch };
  
};


