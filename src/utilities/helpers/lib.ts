export const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-PH', {
      style: 'currency',
      currency: 'PHP',
    }).format(price);
  };


  export const calculateTotalPrice = (price: number, quantity: number) => {
    return Math.round(price * quantity * 100) / 100;
  };



  const getCurrentDate = () => {
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().split('T')[0];
    return formattedDate;
  };

export const date = getCurrentDate