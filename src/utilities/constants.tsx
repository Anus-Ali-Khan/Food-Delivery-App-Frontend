import {ReactNode} from 'react';
import RestaurantLogo from '../images/restaurantImage.svg';
import SliderImage1 from '../images/sliderImage1.svg';
import Images from '../images/Images';
import {ImageSourcePropType} from 'react-native';

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

type CarouselImages = {
  id: string;
  img: ImageSourcePropType;
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

export const CarouselImagesList: CarouselImages[] = [
  {
    id: '1',
    img: Images.body.sliderImage1,
  },
  {
    id: '2',
    img: Images.body.sliderImage2,
  },
  {
    id: '3',
    img: Images.body.sliderImage3,
  },
  {
    id: '4',
    img: Images.body.sliderImage4,
  },
];
