
const loggerMiddleware = () => (next: any) => (action: any) => {
    console.log('Action:', action);
    return next(action);
  };

  export default loggerMiddleware;
