export interface HotelInterface {
  id: number;
  title: string;
  address: string;
  description: string;
  phone: string;
  picture: string;
  photos: any;
  weather: WeatherInterface;
  profile: ProfileInterface;
  stars: number;
}

export class HotelModel implements HotelInterface {
  id: number = null;
  title: string = null;
  address: string = null;
  description: string = null;
  phone: string = null;
  picture: string = null;
  photos: any = null;
  weather: WeatherInterface = new WeatherModel();
  profile: ProfileInterface = new ProfileModel();
  stars: number = null;
}

export interface WeatherInterface {
  temperature: number;
  wind: number;
  icon: string;
}

export class WeatherModel implements WeatherInterface {
  temperature: number = null;
  wind: number = null;
  icon: string = null;
}

export interface ProfileInterface {
  followers: number;
  following: number;
  photo: string;
}

export class ProfileModel implements ProfileInterface {
  followers: number = null;
  following: number = null;
  photo: string = null;
}
