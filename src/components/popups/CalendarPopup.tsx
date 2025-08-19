import { useEffect, useRef } from "react";
import Calendar from "../ui/calendar/Calendar";

export const CalendarPopup: React.FC<{ 
  isOpen: boolean;
  onClose: () => void;
  triggerRef: React.RefObject<HTMLButtonElement>;
}> = ({ isOpen, onClose, triggerRef }) => {
  const popupRef = useRef<HTMLDivElement>(null);

  // Handle click outside to close
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        popupRef.current && 
        !popupRef.current.contains(event.target as Node) &&
        triggerRef.current &&
        !triggerRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, onClose, triggerRef]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop for visual separation but not blocking */}
      <div className="fixed inset-0 z-40" />
      
      {/* Calendar Panel - Positioned absolute right-0 bottom-0 */}
      <div
        className="absolute top-16 right-0 bottom-0 z-50 w-[400px] bg-black shadow-2xl"
        style={{
          maxHeight: '100vh',
          height: '100vh'
        }}
      >
        <Calendar onClose={onClose} />
      </div>
    </>
  );
};