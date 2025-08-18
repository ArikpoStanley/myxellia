import React from 'react';
import { CalendarGrid, CalendarHeader, useCalendar } from '@/hooks/useCalendar';
import { CalendarProps } from '@/lib/types';
import { CalendarNavigation } from './CalendarNavigation';

const Calendar: React.FC<CalendarProps> = ({
  initialMonth,
  initialYear,
  todayDate,
  onDateClick,
  onClose,
  onBack,
}) => {
  const {
    currentYear,
    monthName,
    calendarDays,
    daysOfWeek,
    goToPrevMonth,
    goToNextMonth,
  } = useCalendar(initialMonth, initialYear, todayDate);

  return (
    <div className="w-full h-full bg-[#0D0D0D] text-white font-mono text-sm flex flex-col">
      <CalendarHeader onClose={onClose} onBack={onBack} />
      <CalendarNavigation
        monthName={monthName}
        year={currentYear}
        onPrevMonth={goToPrevMonth}
        onNextMonth={goToNextMonth}
      />
      <div className="flex-1 overflow-auto">
        <CalendarGrid
          daysOfWeek={daysOfWeek}
          calendarDays={calendarDays}
          onDateClick={onDateClick}
        />
      </div>
    </div>
  );
};

export default Calendar;