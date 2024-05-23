export const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-PH', {
      style: 'currency',
      currency: 'PHP',
    }).format(price);
  };


  export const calculateTotalPrice = (price: number, quantity: number) => {
    return Math.round(price * quantity * 100) / 100;
  };