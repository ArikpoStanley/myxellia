import { GoTriangleLeft, GoTriangleRight } from "react-icons/go";

interface CalendarNavigationProps {
  monthName: string;
  year: number;
  onPrevMonth: () => void;
  onNextMonth: () => void;
}

export const CalendarNavigation: React.FC<CalendarNavigationProps> = ({
  monthName,
  year,
  onPrevMonth,
  onNextMonth,
}) => (
  <div className="flex items-center justify-center py-5">
    <button
      onClick={onPrevMonth}
      className="p-1 rounded transition-colors"
    >
      <GoTriangleLeft size={25} color='#98A2B3' />
    </button>
    <span className="mx-8 text-white font-bold text-lg">
      {monthName} {year}
    </span>
    <button
      onClick={onNextMonth}
      className="p-1 rounded transition-colors"
    >
      <GoTriangleRight size={25} color='#98A2B3' />
    </button>
  </div>
);