interface IGeo {
  lat: string,
  long: string,
}

interface IAddress {
  city: string,
  street: string,
  number: number,
  zipcode: string,
  geolocation: IGeo
}

interface IName {
  firstname: string,
  lastname: string
}

export interface IUserDetails {
  id: number,
  email: string,
  password: string,
  username: string,
  name: IName,
  address: IAddress,
  phone: string
}
export interface IUserLogin {
  username: string,
  password: string
}

export interface AuthToken {
  token: string
}
