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

export const date = getCurrentDate;

export const getFormattedDate = (date: Date = new Date()): string => {
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true,
  };

  return new Intl.DateTimeFormat('en-US', options).format(date);
};


export const generateCustomOrderId = (userId: string | null, storeId: string) => {
  const timestamp = Date.now();
  const randomNum = Math.floor(Math.random() * 100000);
  const orderId = `ORD-${userId}-${storeId}-${timestamp}-${randomNum}`;
  return orderId;
};

export const time = new Date().toLocaleString('en-US', {
  timeZone: 'Asia/Manila',
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: true, 
});




