import { CalendarDay, CalendarDTO, SalesMetric} from '../types';
import { MONTHS } from '../constants';
export const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
};
export const formatYAxisValue = (value: number): string => {
  if (value === 0) return '0';
  // Divide by 1,000,000 and append 'm'
  return `${value / 1_000_000}m`;
};

export const getPercentageColor = (isPositive: boolean) => {
    return isPositive ? 'text-[#12B76A]' : 'text-[#F04438]';
  };

export const handleViewAll = (link: string) => {
      console.log(`Navigate to ${link}`);
      // Add your navigation logic here
    };
  
export const getMetricColor = (color: SalesMetric['color']) => {
    const colors = {
      blue: 'text-[#4545FE]',
      green: 'text-[#12B76A]',
      orange: 'text-[#14B8A6]',
      red: 'text-[#F04438]',
    };
    return colors[color];
  };

export const formatLargeNumber = (value: number): string => {
  if (value >= 1000000) {
    return `${(value / 1000000).toFixed(1)}M`;
  }
  if (value >= 1000) {
    return `${(value / 1000).toFixed(1)}k`;
  }
  return value.toString();
};
export const formatPercentage = (percentage: number, isPositive: boolean) => {
  const sign = isPositive ? '+' : '-';
  return `${sign}${Math.abs(percentage)}%`;
};

export const generateCalendarData = (year: number, month: number): CalendarDTO => {
  const firstDay = new Date(year, month, 1);
  const startDate = new Date(firstDay);
  startDate.setDate(startDate.getDate() - firstDay.getDay());

  const days: CalendarDay[] = [];
  const today = new Date();
  
  for (let i = 0; i < 42; i++) {
    const currentDate = new Date(startDate);
    currentDate.setDate(startDate.getDate() + i);
    
    days.push({
      day: currentDate.getDate(),
      date: currentDate,
      isCurrentMonth: currentDate.getMonth() === month,
      isToday: 
        currentDate.getDate() === today.getDate() &&
        currentDate.getMonth() === today.getMonth() &&
        currentDate.getFullYear() === today.getFullYear(),
    });
  }

  return {
    currentMonth: MONTHS[month],
    currentYear: year,
    days,
  };
};

export const getInitials = (name: string): string => {
  return name
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
};

export const classNames = (...classes: (string | boolean | undefined)[]) => {
  return classes.filter(Boolean).join(' ');
};

export const debounce = <T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

export const truncateText = (text: string, maxLength: number): string => {
  return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
};

export const getDaysInMonth = (month: number, year: number): number => {
  return new Date(year, month + 1, 0).getDate();
};

export const getFirstDayOfMonth = (month: number, year: number): number => {
  return new Date(year, month, 1).getDay();
};

export const isToday = (date: Date, todayDate: Date = new Date()): boolean => {
  return (
    date.getDate() === todayDate.getDate() &&
    date.getMonth() === todayDate.getMonth() &&
    date.getFullYear() === todayDate.getFullYear()
  );
};

export const createDate = (year: number, month: number, day: number): Date => {
  return new Date(year, month, day);
};