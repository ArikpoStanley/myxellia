import React from 'react';
import { DAYS_OF_WEEK, MONTHS } from '@/lib/constants';
import { CalendarDay, CalendarState, UseCalendarReturn } from '@/lib/types';
import { CalendarGrid } from '@/components/ui/calendar/CalendarGrid';
import { CalendarHeader } from '@/components/ui/calendar/CalendarHeader';
import { createDate, getDaysInMonth, getFirstDayOfMonth, isToday } from '@/lib/utils';

export interface CalendarNavigation {
  goToPrevMonth: () => void;
  goToNextMonth: () => void;
  goToMonth: (month: number, year: number) => void;
}

// useCalendar Hook
const useCalendar = (
  initialMonth: number = new Date().getMonth(),
  initialYear: number = new Date().getFullYear(),
  todayDate: Date = new Date()
): UseCalendarReturn => {
  const [state, setState] = React.useState<CalendarState>({
    currentMonth: initialMonth,
    currentYear: initialYear,
  });

  const generateCalendarDays = React.useCallback((): CalendarDay[] => {
    const { currentMonth, currentYear } = state;
    const daysInMonth = getDaysInMonth(currentMonth, currentYear);
    const firstDay = getFirstDayOfMonth(currentMonth, currentYear);
    const days: CalendarDay[] = [];

    // Previous month's trailing days
    const prevMonth = currentMonth === 0 ? 11 : currentMonth - 1;
    const prevYear = currentMonth === 0 ? currentYear - 1 : currentYear;
    const daysInPrevMonth = getDaysInMonth(prevMonth, prevYear);

    for (let i = firstDay - 1; i >= 0; i--) {
      const day = daysInPrevMonth - i;
      const date = createDate(prevYear, prevMonth, day);
      days.push({
        day,
        isCurrentMonth: false,
        isToday: isToday(date, todayDate),
        date,
      });
    }

    // Current month days
    for (let day = 1; day <= daysInMonth; day++) {
      const date = createDate(currentYear, currentMonth, day);
      days.push({
        day,
        isCurrentMonth: true,
        isToday: isToday(date, todayDate),
        date,
      });
    }

    // Next month's leading days
    const nextMonth = currentMonth === 11 ? 0 : currentMonth + 1;
    const nextYear = currentMonth === 11 ? currentYear + 1 : currentYear;
    const totalCells = 42; // 6 rows × 7 days
    const remainingCells = totalCells - days.length;

    for (let day = 1; day <= remainingCells; day++) {
      const date = createDate(nextYear, nextMonth, day);
      days.push({
        day,
        isCurrentMonth: false,
        isToday: isToday(date, todayDate),
        date,
      });
    }

    return days;
  }, [state, todayDate]);

  const navigation: CalendarNavigation = React.useMemo(
    () => ({
      goToPrevMonth: () => {
        setState(prevState => {
          if (prevState.currentMonth === 0) {
            return {
              currentMonth: 11,
              currentYear: prevState.currentYear - 1,
            };
          }
          return {
            ...prevState,
            currentMonth: prevState.currentMonth - 1,
          };
        });
      },
      goToNextMonth: () => {
        setState(prevState => {
          if (prevState.currentMonth === 11) {
            return {
              currentMonth: 0,
              currentYear: prevState.currentYear + 1,
            };
          }
          return {
            ...prevState,
            currentMonth: prevState.currentMonth + 1,
          };
        });
      },
      goToMonth: (month: number, year: number) => {
        setState({ currentMonth: month, currentYear: year });
      },
    }),
    []
  );

  return {
    ...state,
    ...navigation,
    monthName: MONTHS[state.currentMonth],
    calendarDays: generateCalendarDays(),
    daysOfWeek: [...DAYS_OF_WEEK],
  };
};

export { useCalendar, CalendarHeader, CalendarGrid };
export type { 
  CalendarDay, 
  CalendarState, 
  UseCalendarReturn, 
};