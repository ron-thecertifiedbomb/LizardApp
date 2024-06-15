export interface User {
  _id?: {
    $oid: string;
  };
  firstname?: string;
  lastname?: string;
  username?: string;
  mobile?: string;
  email?: string;
  password?: string;
  gender?: 'male' | 'female'; 
  birthday?: Date; 
  dateCreated?: string;
  timeCreated?: string; 
  isLoggedIn?: boolean ; 
  lastLoggedIn?: string; 
}
