import { CalendarNavigation } from "@/hooks/useCalendar";
import { PROPERTY_CATEGORIES } from "../constants";
import { IconName } from "@/components/shared/Icon";

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export interface SalesMetric {
  label: string;
  value: string;
  percentage: number;
  isPositive: boolean;
  color: 'blue' | 'green' | 'orange' | 'red';
}
export interface MetricsCardProps {
  label: string;
  value: string;
  percentage: number;
  isPositive: boolean;
  color: 'blue' | 'green' | 'orange' | 'red';
}


export interface ChartDataPoint {
  month: string;
  inflow: number;
  commission: number;
  mrr: number;
}
export interface BudgetFeature {
  id: string;
  title: string;
  description: string;
  icon: IconName;
}
export interface OverviewCard {
  title: string;
  total: string;
  active: string;
  archived: string;
  viewAllLink: string;
}

export interface UserStatsCard {
  title: string;
  total: string;
  riders: string;
  subscribers: string;
  viewAllLink: string;
}

export type PropertyCategory = typeof PROPERTY_CATEGORIES[keyof typeof PROPERTY_CATEGORIES];
export interface images {
  url: string;
alt: string;

}
export interface PropertyListing {
  id: string;
  title: string;
  category: PropertyCategory;
  images: images[];
  imageUrl: string;
  imageAlt: string;
}

// Example metric data structure
export interface Metric {
  value: string;
  label: string;
  percentage: number;
  isPositive: boolean;
  color: 'blue' | 'green' | 'teal' | 'red';
}

// DTOs (Data Transfer Objects)
export interface DashboardDataDTO {
  user: User;
  salesOverview: {
    dateRange: string;
    metrics: SalesMetric[];
    chartData: ChartDataPoint[];
  };
  listingsOverview: OverviewCard;
  usersOverview: UserStatsCard;
  propertyListings: PropertyListing[];
}

export interface CalendarDTO {
  currentMonth: string;
  currentYear: number;
  days: CalendarDay[];
}

export interface BudgetModalDTO {
  title: string;
  subtitle: string;
  features: BudgetFeature[];
}

export interface SalesOverviewProps {
  dateRange: string;
  metrics: SalesMetric[];
  chartData: ChartDataPoint[];
  onViewTransactions?: () => void;
}

export interface CalendarDay {
  day: number;
  isCurrentMonth: boolean;
  isToday: boolean;
  date: Date;
}

export interface CalendarState {
  currentMonth: number;
  currentYear: number;
}

export interface UseCalendarReturn extends CalendarState, CalendarNavigation {
  monthName: string;
  calendarDays: CalendarDay[];
  daysOfWeek: string[];
}

export interface CalendarProps {
  initialMonth?: number;
  initialYear?: number;
  todayDate?: Date;
  onDateClick?: (date: Date) => void;
  onClose?: () => void;
  onBack?: () => void;
}