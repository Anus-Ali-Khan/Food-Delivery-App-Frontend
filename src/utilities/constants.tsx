import {ReactNode} from 'react';
import RestaurantLogo from '../assets/images/restaurantImage.svg';

type ColorTypes = {
  [key: string]: string;
};

type fontTypes = {
  [key: string]: string;
};

type RestaurantListTypes = {
  id: string;
  title: string;
  description: string;
  rating: string;
  img: ReactNode;
};

export const colors: ColorTypes = {
  PRIMARY: '#FFB803',
  SECONDARY: '#721A16',
};

export const fonts: fontTypes = {
  PRIMARY: 'Urbanist-VariableFont_wght',
};

export const RestaurantLists: RestaurantListTypes[] = [
  {
    id: '1',
    title: 'Thai Cuisine',
    description: 'Deliver in 30mins',
    rating: '⭐4.1',
    img: <RestaurantLogo height="100px" width="100px" />,
  },
];
