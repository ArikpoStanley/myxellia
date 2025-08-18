import { PROPERTY_CATEGORIES } from "../constants";
import { DashboardDataDTO, BudgetModalDTO, SalesMetric, ChartDataPoint,PropertyListing, UserStatsCard, Metric, BudgetFeature } from '../types';

export const PROPERTY_LISTINGS: PropertyListing[] = [
  {
    id: 'urban-prime-plaza-1',
    title: 'Urban Prime Plaza Premiere',
    category: PROPERTY_CATEGORIES.MOST_CLICKED,
    imageUrl: '/images/house.jpg',
    imageAlt: 'Urban Prime Plaza - Modern apartment building with geometric facade',
    images: [
      {
        url: '/images/house.jpg',
        alt: 'Urban Prime Plaza - Modern apartment building with geometric facade'
      },
      {
        url: '/images/house1.jpg',
        alt: 'Urban Prime Plaza - Contemporary residential tower with colorful panels'
      },
      {
        url: '/images/house2.jpg',
        alt: 'Urban Prime Plaza - Mixed-use apartment complex with balconies'
      }
    ]
  },
  {
    id: 'urban-prime-plaza-2', 
    title: 'Urban Prime Plaza Premiere',
    category: PROPERTY_CATEGORIES.MOST_WATCHLISTED,
    imageUrl: '/images/house1.jpg', 
    imageAlt: 'Urban Prime Plaza - Contemporary residential tower with colorful panels',
    images: [
      {
        url: '/images/house1.jpg',
        alt: 'Urban Prime Plaza - Contemporary residential tower with colorful panels'
      },
      {
        url: '/images/house.jpg',
        alt: 'Urban Prime Plaza - Modern apartment building with geometric facade'
      },
      {
        url: '/images/house2.jpg',
        alt: 'Urban Prime Plaza - Mixed-use apartment complex with balconies'
      }
    ]
  },
  {
    id: 'urban-prime-plaza-3',
    title: 'Urban Prime Plaza Premiere', 
    category: PROPERTY_CATEGORIES.HOTTEST_LISTING,
    imageUrl: '/images/house2.jpg',
    imageAlt: 'Urban Prime Plaza - Mixed-use apartment complex with balconies',
    images: [
      {
        url: '/images/house2.jpg',
        alt: 'Urban Prime Plaza - Mixed-use apartment complex with balconies'
      },
      {
        url: '/images/house1.jpg',
        alt: 'Urban Prime Plaza - Modern apartment building with geometric facade'
      },
      {
        url: '/images/house.jpg',
        alt: 'Urban Prime Plaza - Contemporary residential tower with colorful panels'
      }
    ]
  }
];

export const mockUser = {
  id: '1',
  name: 'Dylan Frank',
  email: 'dylan96@mail.com',
};

export const mockSalesMetrics: SalesMetric[] = [
  {
    label: 'Total Inflow',
    value: '₦120,000,000.00',
    percentage: 2.5,
    isPositive: true,
    color: 'blue',
  },
  {
    label: 'MRR',
    value: '₦50,000,000.00',
    percentage: 2.5,
    isPositive: true,
    color: 'green',
  },
  {
    label: 'Commission Revenue',
    value: '₦200,000,000.00',
    percentage: 0.5,
    isPositive: true,
    color: 'orange',
  },
  {
    label: 'GMV',
    value: '₦100,000,000.00',
    percentage: 0.5,
    isPositive: false,
    color: 'red',
  },
];

export const overviewCardsData: Array<{
    data: UserStatsCard;
    type: 'house' | 'users';
    id: string;
  }> = [
    {
      id: 'listings',
      data: {
        title: 'Listings Overview',
        total: '20.7k',
        riders: '8.5k', 
        subscribers: '7.5k',
        viewAllLink: '/listings',
      },
      type: 'house'
    },
    {
      id: 'users',
      data: {
        title: 'Users Overview',
        total: '20.7k',
        riders: '8.5k',
        subscribers: '7.5k',
        viewAllLink: '/users',
      },
      type: 'users'
    }
  ];

export const mockChartData: ChartDataPoint[] = [
  { month: 'Jan', inflow: 30000000, commission: 15000000, mrr: 10000000 },
  { month: 'Feb', inflow: 25000000, commission: 12000000, mrr: 8000000 },
  { month: 'Mar', inflow: 40000000, commission: 20000000, mrr: 15000000 },
  { month: 'Apr', inflow: 35000000, commission: 18000000, mrr: 12000000 },
  { month: 'May', inflow: 50000000, commission: 25000000, mrr: 20000000 },
  { month: 'Jun', inflow: 45000000, commission: 22000000, mrr: 18000000 },
  { month: 'Jul', inflow: 60000000, commission: 30000000, mrr: 25000000 },
  { month: 'Aug', inflow: 55000000, commission: 28000000, mrr: 22000000 },
  { month: 'Sep', inflow: 70000000, commission: 35000000, mrr: 30000000 },
];


export const mockDashboardData: DashboardDataDTO = {
  user: mockUser,
  salesOverview: {
    dateRange: 'Jan 2022 - Sep 2022',
    metrics: mockSalesMetrics,
    chartData: mockChartData,
  },
  listingsOverview: {
    title: 'Listings Overview',
    total: '1.8k',
    active: '80',
    archived: '1k',
    viewAllLink: '/listings',
  },
  usersOverview: {
    title: 'Users Overview',
    total: '20.7k',
    riders: '8.5k',
    subscribers: '7.5k',
    viewAllLink: '/users',
  },
  propertyListings: PROPERTY_LISTINGS,
};

export const mockBudgetModalData: BudgetModalDTO = {
  title: 'Set up annual budgets by account category',
  subtitle: 'Allocate funds across income and expense lines with full visibility.',
  features: [
    {
      id: '1',
      icon: 'chartBar',
      title: 'Track actuals vs budget in real time',
      description: 'See how your community is performing against plan, month by month.',
    },
    {
      id: '2',
      icon: 'eye',
      title: 'Adjust figures and forecast with ease',
      description: 'Edit amounts, apply percentage changes, or roll forward last year\'s data—all in one place.',
    },
  ],
};

// Utility functions for formatting and styling metrics

export const getMetricColor = (color: string) => {
  switch (color) {
    case 'blue':
      return 'text-[#1570EF]'; // Blue for Total Inflow
    case 'green':
      return 'text-[#12B76A]'; // Green for MRR  
    case 'teal':
      return 'text-[#0E9384]'; // Teal for Commission Revenue
    case 'red':
      return 'text-[#F04438]'; // Red for GMV
    default:
      return 'text-gray-900';
  }
};

export const getPercentageColor = (isPositive: boolean) => {
  return isPositive ? 'text-[#12B76A]' : 'text-[#F04438]';
};

export const formatPercentage = (percentage: number, isPositive: boolean) => {
  const sign = isPositive ? '+' : '-';
  return `${sign}${Math.abs(percentage).toFixed(1)}%`;
};

// Sample metrics data
export const sampleMetrics: Metric[] = [
  {
    value: '₦120,000,000.00',
    label: 'Total Inflow',
    percentage: 2.5,
    isPositive: true,
    color: 'blue'
  },
  {
    value: '₦50,000,000.00',
    label: 'MRR',
    percentage: 2.5,
    isPositive: true,
    color: 'green'
  },
  {
    value: '₦200,000,000.00',
    label: 'Commission Revenue',
    percentage: 0.5,
    isPositive: true,
    color: 'teal'
  },
  {
    value: '₦100,000,000.00',
    label: 'GMV',
    percentage: 0.5,
    isPositive: false,
    color: 'red'
  }
];

export const MONTH_ABBREVIATIONS = [
  'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN',
  'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'
];

export const budgetFeatures: BudgetFeature[] = [
  {
    id: '1',
    title: 'Set up annual budgets by account category',
    description: 'Allocate funds across income and expense lines with full visibility.',
    icon: 'settings'
  },
  {
    id: '2',
    title: 'Track actuals vs budget in real time',
    description: 'See how your community is performing against plan, month by month.',
    icon: 'chart'
  },
  {
    id: '3',
    title: 'Adjust figures and forecast with ease',
    description: `Edit amounts, apply percentage changes, or roll forward last year's data—all in one place.`,
    icon: 'edit'
  }
];