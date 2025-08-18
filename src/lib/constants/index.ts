export const NAVIGATION_ITEMS = [
  { id: 'dashboard', label: 'Dashboard', icon: 'home' },
  { id: 'listings', label: 'Listings', icon: 'bag' },
  { id: 'users', label: 'Users', icon: 'users' },
  { id: 'request', label: 'Request', icon: 'fileText' },
  { id: 'applications', label: 'Applications', icon: 'briefCase' },
] as const;

export const TIME_PERIODS = ['1 Week', '1 Month', '1 Year'] as const;

export const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
] as const;

export const DAYS_OF_WEEK: readonly string[] = [
  'SUN', 'MON', 'TUE', 'WED', 'THURS', 'FRI', 'SAT'
] as const;

export const PROPERTY_CATEGORIES = {
  MOST_CLICKED: 'most-clicked',
  MOST_WATCHLISTED: 'most-watchlisted',
  HOTTEST_LISTING: 'hottest-listing'
} as const;

export const CATEGORY_CONFIG = {
  [PROPERTY_CATEGORIES.MOST_CLICKED]: {
    label: 'MOST CLICKED',
    textColor: 'text-blue-300'
  },
  [PROPERTY_CATEGORIES.MOST_WATCHLISTED]: {
    label: 'MOST WATCHLISTED',
    textColor: 'text-green-300'
  },
  [PROPERTY_CATEGORIES.HOTTEST_LISTING]: {
    label: 'HOTTEST LISTING',
    textColor: 'text-orange-300'
  }
} as const;