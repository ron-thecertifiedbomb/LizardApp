import useGetAllProductsHooks from './useGetAllProductsHook';
import useGetCartListHook from './useGetCartListHook';

const useGetUserInfoHook = () => {

  const { data: allProductsData, refetch: allProductsRefetch, isLoading } = useGetAllProductsHooks();
  const { cartList: cartListData,  refetch: cartListRefetch } = useGetCartListHook('665973b33a2e0b4a4f90a48e');

  return {
    allProductsData,
    allProductsRefetch,
    cartListData,
    cartListRefetch,
    isLoading,
  };
};

export default useGetUserInfoHook;
