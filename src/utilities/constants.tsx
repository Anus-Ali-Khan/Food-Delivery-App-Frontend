import {ReactNode} from 'react';
import RestaurantLogo from '../images/restaurantImage.svg';
import Images from '../images/Images';
import {ImageSourcePropType} from 'react-native';
import DollarSvg from '../images/usd-circle.svg';
import TimeSvg from '../images/time.svg';
import DeliverySvg from '../images/Delivery.svg';
import CategoriesSvg from '../images/categories.svg';
import BurgerSvg from '../images/burgerCategory.svg';
import OrderAcceptedSvg from '../images/orderAccepted/OrderStatus/Vector.svg'
import OrderDeliveredSvg from '../images/orderdelivered/OrderStatus/Vector.svg'

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

type timelineTypes = {
  // time: string;
  title: string;
  icon: ReactNode;
  description: string;
};

type RatingTypes = {
  logo: ImageSourcePropType;
  title: string;
  stars: string;
  reviews: number;
  rating: number;
};

type reviewsTypes = {
  id: string;
  profilePic: ImageSourcePropType;
  name: string;
  ratingStars: string;
  reviewDescription: string;
};

type categoriesTypes = {
  id: string;
  img: ReactNode;
  name: string;
};

export type cartItemsTypes = {
  id: string;
  img: ReactNode;
  name: string;
  price: string;
};

export type DealsTypes = {
  id: string;
  title: string;
  img: ImageSourcePropType;
  items: {name: string; quantity: string}[];
  price: string;
};

type LocationTypes = {
  id: string;
  img: ImageSourcePropType;
  title: string;
  description: string;
};

export type myCartTypes = {
  id: string;
  name: string;
  img: ImageSourcePropType;
  price: string;
  quantity?: string;
};

type OngoingOrdersListTypes = {
  id: string;
  title: string;
  description: string;
  rating: string;
  price: string;
  img: ReactNode;
};
type HistoryOrdersListTypes = {
  id: string;
  title: string;
  price: string;
  orderDate: string;
  img: ReactNode;
};

type deliveryTimeTypes = {
  // time: string;
  title: string;
  icon: ReactNode;
  description: string;
};

export const colors: ColorTypes = {
  PRIMARY: '#FFB803',
  SECONDARY: '#721A16',
  TERTIARY: '#1E1E1E',
};

export const fonts: fontTypes = {
  PRIMARY: 'Urbanist-VariableFont_wght',
  SECONDARY: 'Urbanist-Medium',
  TERTIARY: 'Urbanist-SemiBold',
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

export const timelineData: timelineTypes[] = [
  {
    // time: '09:00',
    title: 'Minimum Order',
    icon: <DollarSvg />,
    description: '0.0 SAR',
  },
  {
    // time: '09:30',
    title: 'Delivery Time',
    icon: <TimeSvg />,
    description: '30.0 mins',
  },
  {
    // time: '10:00',
    title: 'Delivery Charges',
    icon: <DeliverySvg />,
    description: '0.0 SAR',
  },
];

export const ratings: RatingTypes = {
  logo: Images.body.ThaiCuisineLogo,
  title: 'Thai Cuisine Ratings',
  stars: '⭐⭐⭐⭐⭐',
  reviews: 60,
  rating: 4.3,
};

export const reviewList: reviewsTypes[] = [
  {
    id: '1',
    profilePic: Images.body.profilePic,
    name: 'Abu Malik',
    ratingStars: '⭐⭐⭐⭐⭐',
    reviewDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
  },
  {
    id: '2',
    profilePic: Images.body.profilePic,
    name: 'Abu Malik',
    ratingStars: '⭐⭐⭐⭐⭐',
    reviewDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
  },
  {
    id: '3',
    profilePic: Images.body.profilePic,
    name: 'Abu Malik',
    ratingStars: '⭐⭐⭐⭐⭐',
    reviewDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
  },
];

export const categories: categoriesTypes[] = [
  {
    id: '1',
    img: <CategoriesSvg />,
    name: 'Traditional',
  },
  {
    id: '2',
    img: <CategoriesSvg />,
    name: 'International',
  },
  {
    id: '3',
    img: <CategoriesSvg />,
    name: 'Chineese',
  },
  {
    id: '4',
    img: <CategoriesSvg />,
    name: 'Cuisine',
  },
  {
    id: '5',
    img: <CategoriesSvg />,
    name: 'Homemade',
  },
  {
    id: '6',
    img: <CategoriesSvg />,
    name: 'Russian',
  },
];

export const cartItems: cartItemsTypes[] = [
  {
    id: '1',
    img: <BurgerSvg width="150px" />,
    name: 'Zinger Burger',
    price: '$14',
  },
  {
    id: '2',
    img: <BurgerSvg width="150px" />,
    name: 'Pizza',
    price: '$14',
  },
  {
    id: '3',
    img: <BurgerSvg width="150px" />,
    name: 'Chicken Broast',
    price: '$14',
  },
  {
    id: '4',
    img: <BurgerSvg width="150px" />,
    name: 'Pasta',
    price: '$14',
  },
  {
    id: '5',
    img: <BurgerSvg width="150px" />,
    name: 'Chineese Rice',
    price: '$14',
  },
  {
    id: '6',
    img: <BurgerSvg width="150px" />,
    name: 'Jalepeno',
    price: '$14',
  },
];

export const dealsList: DealsTypes[] = [
  {
    id: '1',
    title: 'Super Savor Deal',
    img: Images.body.sliderImage1,
    items: [
      {name: 'Beef Fried Sticks', quantity: 'x2'},
      {name: 'Behari Qeema', quantity: 'x3'},
      {name: 'Hot Chicken Samosas', quantity: 'x1'},
    ],
    price: '$19',
  },
  {
    id: '2',
    title: 'Super Savor Deal',
    img: Images.body.zingerDeals,
    items: [
      {name: 'Beef Fried Sticks', quantity: 'x2'},
      {name: 'Behari Qeema', quantity: 'x3'},
      {name: 'Hot Chicken Samosas', quantity: 'x1'},
    ],
    price: '$19',
  },
  {
    id: '3',
    title: 'Super Savor Deal',
    img: Images.body.broastDeals,
    items: [
      {name: 'Beef Fried Sticks', quantity: 'x2'},
      {name: 'Behari Qeema', quantity: 'x3'},
      {name: 'Hot Chicken Samosas', quantity: 'x1'},
    ],
    price: '$19',
  },
  {
    id: '4',
    title: 'Super Savor Deal',
    img: Images.body.sliderImage1,
    items: [
      {name: 'Beef Fried Sticks', quantity: 'x2'},
      {name: 'Behari Qeema', quantity: 'x3'},
      {name: 'Hot Chicken Samosas', quantity: 'x1'},
    ],
    price: '$19',
  },
  {
    id: '5',
    title: 'Super Savor Deal',
    img: Images.body.zingerDeals,
    items: [
      {name: 'Beef Fried Sticks', quantity: 'x2'},
      {name: 'Behari Qeema', quantity: 'x3'},
      {name: 'Hot Chicken Samosas', quantity: 'x1'},
    ],
    price: '$19',
  },
  {
    id: '6',
    title: 'Super Savor Deal',
    img: Images.body.broastDeals,
    items: [
      {name: 'Beef Fried Sticks', quantity: 'x2'},
      {name: 'Behari Qeema', quantity: 'x3'},
      {name: 'Hot Chicken Samosas', quantity: 'x1'},
    ],
    price: '$19',
  },
];

export const myCartList: myCartTypes[] = [
  {
    id: '1',
    name: 'Late Night Zinger Burger',
    price: '5.99',
    img: Images.body.LateNightZB,
    quantity: 'x1',
  },
  {
    id: '2',
    name: 'Chicken Chineese',
    price: '6.00',
    img: Images.body.chineese,
    quantity: 'x1',
  },
  {
    id: '3',
    name: 'Late Night Zinger Burger',
    price: '5.99',
    img: Images.body.LateNightZB,
    quantity: 'x1',
  },
  {
    id: '4',
    name: 'Chicken Chineese',
    price: '6.00',
    img: Images.body.chineese,
    quantity: 'x1',
  },
];

export const locationCards: LocationTypes[] = [
  {
    id: '1',
    img: Images.body.mapLocation,
    title: 'Al Saheel Appartment',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
  {
    id: '2',
    img: Images.body.mapLocation,
    title: 'Neo Office Suit',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
  {
    id: '3',
    img: Images.body.mapLocation,
    title: 'Al Saheel Appartment',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
];

export const OngoingOrdersList: OngoingOrdersListTypes[] = [
  {
    id: '1',
    title: 'Thai Cuisine',
    description: '9:30am',
    rating: '🔸3 items',
    price: '$11.99',
    img: <RestaurantLogo height="50px" width="54px" />,
  },
  {
    id: '2',
    title: 'Thai Cuisine',
    description: '9:30am',
    rating: '🔸3 items',
    price: '$11.99',
    img: <RestaurantLogo height="50px" width="54px" />,
  },
  {
    id: '3',
    title: 'Thai Cuisine',
    description: '9:30am',
    rating: '🔸3 items',
    price: '$11.99',
    img: <RestaurantLogo height="50px" width="54px" />,
  },
  {
    id: '4',
    title: 'Thai Cuisine',
    description: '9:30am',
    rating: '🔸3 items',
    price: '$11.99',
    img: <RestaurantLogo height="50px" width="54px" />,
  },
];

export const HistoryOrdersList: HistoryOrdersListTypes[] = [
  {
    id: '1',
    title: 'Thai Cuisine',
    price: '$11.99',
    orderDate: 'Ordered on 3 January',
    img: <RestaurantLogo height="50px" width="54px" />,
  },
  {
    id: '2',
    title: 'Thai Cuisine',
    price: '$11.99',
    orderDate: 'Ordered on 3 January',
    img: <RestaurantLogo height="50px" width="54px" />,
  },
  {
    id: '3',
    title: 'Thai Cuisine',
    price: '$11.99',
    orderDate: 'Ordered on 3 January',
    img: <RestaurantLogo height="50px" width="54px" />,
  },
  {
    id: '4',
    title: 'Thai Cuisine',
    price: '$11.99',
    orderDate: 'Ordered on 3 January',
    img: <RestaurantLogo height="50px" width="54px" />,
  },
  {
    id: '5',
    title: 'Thai Cuisine',
    price: '$11.99',
    orderDate: 'Ordered on 3 January',
    img: <RestaurantLogo height="50px" width="54px" />,
  },
  {
    id: '6',
    title: 'Thai Cuisine',
    price: '$11.99',
    orderDate: 'Ordered on 3 January',
    img: <RestaurantLogo height="50px" width="54px" />,
  },
  {
    id: '7',
    title: 'Thai Cuisine',
    price: '$11.99',
    orderDate: 'Ordered on 3 January',
    img: <RestaurantLogo height="50px" width="54px" />,
  },
  {
    id: '8',
    title: 'Thai Cuisine',
    price: '$11.99',
    orderDate: 'Ordered on 3 January',
    img: <RestaurantLogo height="50px" width="54px" />,
  },
  {
    id: '9',
    title: 'Thai Cuisine',
    price: '$11.99',
    orderDate: 'Ordered on 3 January',
    img: <RestaurantLogo height="50px" width="54px" />,
  },
  {
    id: '10',
    title: 'Thai Cuisine',
    price: '$11.99',
    orderDate: 'Ordered on 3 January',
    img: <RestaurantLogo height="50px" width="54px" />,
  },
];


export const deliveryTimeData: deliveryTimeTypes[] = [
  {
    // time: '09:00',
    title: 'Order Accepted',
    icon: <OrderAcceptedSvg />,
    description: 'Your Order has been accepted',
  },
  {
    // time: '09:30',
    title: 'Order Picked',
    icon: <DeliverySvg />,
    description: 'Rider has taken your order for delivery',
  },
  {
    // time: '10:00',
    title: 'Order Delivered',
    icon: <OrderDeliveredSvg />,
    description: 'Your Order has been deliverd',
  },
];