export interface IRegisterUser {
    name: string;
    email: string;
    country: string;
    city: string;
    state: string;
    password: string;
}

export interface ILoginUser {
    email: string;
    password: string;
    remember:boolean;
}

export interface Respose {
    success: boolean,
    status:boolean,
    message: string,
    error: string,
    data: any,
    token: string,
}

export interface ForgotPassword{
    email:string
}


export interface ExisitingCustomer {
   email_number: any; 
}

export interface VerficationUser {
    password: string;
    confirmPassword: string;
}


