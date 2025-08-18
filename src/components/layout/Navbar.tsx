import React, { useState, useRef } from 'react';
import * as Tooltip from '@radix-ui/react-tooltip';
import { Header } from './Header';
import { NavigationBar } from './NavigationBar'
import { Profile } from '@/components/popups/ProfilePopup';
import { BudgetModal } from '@/components/modals/Budget';
import { CalendarPopup } from '../popups/CalendarPopup';
import { User } from '@/lib/types/index';

interface NavbarProps {
  user: User;
  onSearch?: (query: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ user, onSearch }) => {
  const [activeItem, setActiveItem] = useState('dashboard');
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [isBudgetModalOpen, setIsBudgetModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  const calendarButtonRef = useRef<HTMLButtonElement>(null) as React.RefObject<HTMLButtonElement>;

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch?.(query);
  };

  const clearSearch = () => {
    setSearchQuery('');
    onSearch?.('');
  };

  return (
    <Tooltip.Provider>
      {/* Header */}
      <Header
        user={user}
        isProfileOpen={isProfileOpen}
        onProfileToggle={() => setIsProfileOpen(!isProfileOpen)}
        onCalendarToggle={() => setIsCalendarOpen(!isCalendarOpen)}
        onBudgetOpen={() => setIsBudgetModalOpen(true)}
        calendarButtonRef={calendarButtonRef}
      />

      {/* Profile Popup */}
      {isProfileOpen && (
        <Profile 
          user={user} 
          onClose={() => setIsProfileOpen(false)} 
        />
      )}

      {/* Navigation Bar */}
      <NavigationBar
        activeItem={activeItem}
        onActiveItemChange={setActiveItem}
        searchQuery={searchQuery}
        onSearch={handleSearch}
        onClearSearch={clearSearch}
      />

      {/* Calendar Popup */}
      <CalendarPopup 
        isOpen={isCalendarOpen}
        onClose={() => setIsCalendarOpen(false)}
        triggerRef={calendarButtonRef}
      />

      {/* Budget Modal */}
      {isBudgetModalOpen && (
        <BudgetModal onClose={() => setIsBudgetModalOpen(false)} />
      )}
    </Tooltip.Provider>
  );
};