import { ArrowLeft, X } from "lucide-react";

interface CalendarHeaderProps {
  onClose?: () => void;
  onBack?: () => void;
}

export const CalendarHeader: React.FC<CalendarHeaderProps> = ({ onClose, onBack }) => (
  <div className="flex items-center justify-between p-4 bg-[#171717]">
    <div className="flex items-center gap-3">
      <button onClick={onBack} className="text-white hover:text-gray-300">
        <ArrowLeft className="w-5 h-5" />
      </button>
      <span className="text-white font-semibold text-[16px] leading-[100%]">Calendar</span>
    </div>
    <button onClick={onClose} className="text-white hover:text-gray-300">
      <X className="w-5 h-5" />
    </button>
  </div>
);