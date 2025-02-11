import { IProduct } from '../../types/products/type';

export const fetchData = async () => {

    const response = await fetch(
      'https://nextjs-server-rho.vercel.app/api/products/getAllProducts/route',
    );
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json() as Promise<IProduct[]>;
  };





  
