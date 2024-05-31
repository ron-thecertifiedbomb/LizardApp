export interface FormData {
    firstname: string;
    lastname: string;
    username: string;
    mobile: number;
    email: string;
    password: string;
    gender: 'male' | 'female';
    birthday: Date;
  }

  export interface FormLogInData {
   
    username: string;
    password: string;
    isLoggedIn: boolean;
    time: string;
  }