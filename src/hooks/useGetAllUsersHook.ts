import { useEffect } from 'react';
import { useQuery } from 'react-query';

interface UserData {
  _id: string;
  name: string;
  description: string;
  imagelink_square: string;
  imagelink_portrait: string;
}

interface UseUserDataProps {
  onSuccessCallback: (data: UserData[]) => void;
}

const useGetAllUsersHooks = ({ onSuccessCallback }: UseUserDataProps) => {
  const fetchData = async () => {
    const response = await fetch('https://nextjs-server-rho.vercel.app/api/getAllUsers');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json() as Promise<UserData[]>;
  };

  const { isLoading, isError, data, error, refetch } = useQuery<UserData[], Error>('data', fetchData, {
    onSuccess: (data) => {
      onSuccessCallback(data); 
    },
    onError: (error) => {
      console.error(error);
    },
  });

  useEffect(() => {
 
  }, [data as UserData[]]); 

  return { isLoading, isError, data, error, refetch };
};

export default useGetAllUsersHooks;
