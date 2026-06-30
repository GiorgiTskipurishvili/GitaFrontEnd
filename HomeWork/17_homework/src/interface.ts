//interfaces.ts ფაილში აღწერეთ IUser ინტერფეისი, რომელიც მოიცავს API-დან წამოღებულ 
// შემდეგ ველებს: id (number), name (string), username (string), email (string), 
// phone (string), website (string) და company (ობიექტი, შიგნით name: string ველით). 
export interface IUser{
    id:number,
    name: string,
    username: string,
    email: string,
    phone: string,
    website: string,
    company: {
        name: string
    }    
}