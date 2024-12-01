export interface IUser {
    email: string;
    password?: string  | any; //Optional
    firstName: string;
    lastName: string;
    avatar: string;
    id?: string; // Optional
    role?: string; // Optional
  }
  