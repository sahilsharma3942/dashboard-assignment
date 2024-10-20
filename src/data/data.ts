import { iconsImgs } from "../utils/images";

export interface Profit {
  value: string;
  percentage: string;
}


export const navigationLinks = [
    { id: 1, title: 'Dashboard', image: iconsImgs.dashboard },
    { id: 2, title: 'Order Management', image: iconsImgs.orderManagement },
    { id: 3, title: 'Customers', image: iconsImgs.customers },
    { id: 4, title: 'Coupon Code', image: iconsImgs.coupons },
    { id: 5, title: 'Categories', image: iconsImgs.categories },
    { id: 6, title: 'Transaction', image: iconsImgs.transactions },
    { id: 7, title: 'Brand', image: iconsImgs.brand }
];

function getRandomDate(days: number): string {
  const today = new Date();
  const randomDaysAgo = Math.floor(Math.random() * days);
  const randomDate = new Date(today);
  randomDate.setDate(today.getDate() - randomDaysAgo);
  return randomDate.toISOString();
}

// Define different statuses
export const orderStatuses = [
    "Pending",
    "Confirmed",
    "Processing",
    "Picked",
    "Shipped",
    "Delivered",
    "Cancelled",
  ];

// Generate 200 orders with random statuses
export const orders = Array.from({ length: 200 }, (_, index) => ({
  id: index + 1,
  created: getRandomDate(30),
  customer: 'Joseph Wheeler',
  total: '$654',
  profit: { value: '$154', percentage: '16%' },
  status: orderStatuses[Math.floor(Math.random() * orderStatuses.length)] // Randomize status
}));
