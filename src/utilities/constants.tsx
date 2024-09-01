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
  TERTIARY: '#1E1E1E',
};

export const fonts: fontTypes = {
  PRIMARY: 'Urbanist-VariableFont_wght',
  SECONDARY: 'Urbanist-Medium',
};

export const RestaurantLists: RestaurantListTypes[] = [
  {
    id: '1',
    title: 'Thai Cuisine',
    description: 'Deliver in 30mins',
    rating: '⭐4.1',
    img: <RestaurantLogo height="50px" width="54px" />,
  },
  {
    id: '2',
    title: 'Thai Cuisine',
    description: 'Deliver in 30mins',
    rating: '⭐4.1',
    img: <RestaurantLogo height="50px" width="54px" />,
  },
  {
    id: '3',
    title: 'Thai Cuisine',
    description: 'Deliver in 30mins',
    rating: '⭐4.1',
    img: <RestaurantLogo height="50px" width="54px" />,
  },
  {
    id: '4',
    title: 'Thai Cuisine',
    description: 'Deliver in 30mins',
    rating: '⭐4.1',
    img: <RestaurantLogo height="50px" width="54px" />,
  },
  {
    id: '5',
    title: 'Thai Cuisine',
    description: 'Deliver in 30mins',
    rating: '⭐4.1',
    img: <RestaurantLogo height="50px" width="54px" />,
  },
  {
    id: '6',
    title: 'Thai Cuisine',
    description: 'Deliver in 30mins',
    rating: '⭐4.1',
    img: <RestaurantLogo height="50px" width="54px" />,
  },
  {
    id: '7',
    title: 'Thai Cuisine',
    description: 'Deliver in 30mins',
    rating: '⭐4.1',
    img: <RestaurantLogo height="50px" width="54px" />,
  },
  {
    id: '8',
    title: 'Thai Cuisine',
    description: 'Deliver in 30mins',
    rating: '⭐4.1',
    img: <RestaurantLogo height="50px" width="54px" />,
  },
  {
    id: '9',
    title: 'Thai Cuisine',
    description: 'Deliver in 30mins',
    rating: '⭐4.1',
    img: <RestaurantLogo height="50px" width="54px" />,
  },
  {
    id: '10',
    title: 'Thai Cuisine',
    description: 'Deliver in 30mins',
    rating: '⭐4.1',
    img: <RestaurantLogo height="50px" width="54px" />,
  },
];
