import React from 'react';
import * as Tooltip from '@radix-ui/react-tooltip';
import { Icon } from '../shared/Icon';
import { TooltipButton } from '../shared/TooltipButton';
import { User } from '@/lib/types/index';
import Image from 'next/image';

interface HeaderProps {
  user: User;
  isProfileOpen: boolean;
  onProfileToggle: () => void;
  onCalendarToggle: () => void;
  onBudgetOpen: () => void;
  calendarButtonRef: React.RefObject<HTMLButtonElement>;
}

export const Header: React.FC<HeaderProps> = ({
  user,
  isProfileOpen,
  onProfileToggle,
  onCalendarToggle,
  onBudgetOpen,
  calendarButtonRef
}) => {
  return (
    <header className="bg-[#191919] py-4.5 text-white relative">
      <div className="flex items-center justify-between max-w-[1284px] mx-auto">
        <div className="w-[153.23px] h-[32px] relative">
          <Image
            src={'/svgs/logo.svg'}
            alt='Logo'
            fill
            className='w-full h-full object-contain'
          />
        </div>
        
        <div className="flex items-center gap-2">
          <TooltipButton content="Notifications">
            <Icon name="bell" size="md" color="white" />
          </TooltipButton>
          
          <TooltipButton content="Budget">
            <span 
              ref={calendarButtonRef}
              onClick={onBudgetOpen}
              className="pt-2 rounded-lg transition-colors cursor-pointer"
            >
              <Icon name="calendar" size="md" color="white" />
            </span>
          </TooltipButton>
          
          <TooltipButton 
            content="Calendar"
            onClick={onCalendarToggle}
          >
            <Icon name="calculator" size="md" color="white" />
          </TooltipButton>
          
          <TooltipButton content="Messages">
            <Icon name="messages" size="md" color="white" />
          </TooltipButton>
          
          <div className="relative pl-2">
            <Tooltip.Root delayDuration={300}>
              <Tooltip.Trigger asChild>
                <button
                  onClick={onProfileToggle}
                  className="flex items-center justify-center w-10 h-10 bg-white rounded-full text-lg text-black font-semibold transition-colors"
                >
                  {user.name.charAt(0)}
                </button>
              </Tooltip.Trigger>
              <Tooltip.Portal>
                <Tooltip.Content
                  className="bg-gray-50 border border-gray-200 shadow-lg rounded-lg px-4 py-3 z-50 min-w-[180px]"
                  sideOffset={8}
                  align="end"
                >
                  <div className="flex flex-col space-y-1">
                    <span className="font-semibold text-gray-900 text-sm">
                      {user.name}
                    </span>
                    <span className="text-[#919191] text-sm">
                      {user.email}
                    </span>
                  </div>
                  <Tooltip.Arrow className="fill-white" />
                </Tooltip.Content>
              </Tooltip.Portal>
            </Tooltip.Root>
          </div>
        </div>
      </div>
    </header>
  );
};