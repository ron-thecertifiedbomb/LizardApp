import {useQuery} from 'react-query';
import {useDispatch, useSelector} from 'react-redux';
import {CartData} from '../components/cart/type';
import {getAllCartItems} from '../redux/reducers/cartslice/reducer/userCartListReducer';

const useGetCartListHook = (ownerId: string) => {

  const dispatch = useDispatch();

  const fetchData = async () => {

    const response = await fetch(
      `https://nextjs-server-rho.vercel.app/api/products/cart/getallcartitems/route?_id=${ownerId}`,
    );
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json() as Promise<CartData[]>;
  };

  const {isLoading, isError, data, error, refetch} = useQuery<
    CartData[],
    Error
  >('data', fetchData, {
    onSuccess: data => {
      dispatch(getAllCartItems(data));
    },
  });

const cartList = data;


  return {isLoading, isError, cartList, error, refetch};
};

export default useGetCartListHook;
