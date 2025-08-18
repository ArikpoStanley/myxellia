import { CalendarDay } from "@/hooks/useCalendar";
import { MONTH_ABBREVIATIONS } from "@/lib/data";

interface CalendarGridProps {
  daysOfWeek: string[];
  calendarDays: CalendarDay[];
  onDateClick?: (date: Date) => void;
}

export const CalendarGrid: React.FC<CalendarGridProps> = ({
  daysOfWeek,
  calendarDays,
  onDateClick,
}) => {
  // Helper function to get display text for a day
  const getDayDisplayText = (dayObj: CalendarDay): string => {
    // If it's the first day of the month, show month abbreviation + day
    if (dayObj.day === 1) {
      const monthIndex = dayObj.date.getMonth();
      return `${MONTH_ABBREVIATIONS[monthIndex]} ${dayObj.day}`;
    }
    // Otherwise, just show the day number
    return dayObj.day.toString();
  };

  return (
    <div className='px-5'>
      {/* Days of Week Header */}
      <div className="grid grid-cols-7 border-b border-t border-l rounded-t border-[#242424] ">
        {daysOfWeek.map((day) => (
          <div
            key={day}
            className="p-1 text-[8px] text-white/50 font-medium border-r border-[#242424]"
          >
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 border-l border-[#242424]">
        {calendarDays.map((dayObj, index) => (
          <button
            key={`${dayObj.date.getTime()}-${index}`}
            onClick={() => onDateClick?.(dayObj.date)}
            className={`
              h-[5.6333vw] flex border-r border-b border-[#242424]
              ${!dayObj.isCurrentMonth ? 'text-[#BBBBBB99]' : 'text-[#969696]'}
              ${dayObj.isToday ? 'text-white ' : ''}
              cursor-pointer transition-colors
            `}
          >
            <span className={`${!dayObj.isCurrentMonth ? 'text-[#BBBBBB99]' : 'text-[#969696]'}
            ${dayObj.isToday ? 'bg-[#4545FE] rounded-full font-bold text-white' : ''}
               cursor-pointer transition-colors text-[9px] py-1 h-4.5 px-3 font-medium whitespace-nowrap
            `}>
              {getDayDisplayText(dayObj)}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};