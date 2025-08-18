import React from 'react';
import * as Tooltip from '@radix-ui/react-tooltip';
import { Icon } from '../shared/Icon';
import { TooltipButton } from '../shared/TooltipButton';
import { NAVIGATION_ITEMS } from '@/lib/constants';
import { classNames } from '@/lib/utils/index';
import { X } from 'lucide-react';

interface NavigationBarProps {
  activeItem: string;
  onActiveItemChange: (itemId: string) => void;
  searchQuery: string;
  onSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClearSearch: () => void;
}

export const NavigationBar: React.FC<NavigationBarProps> = ({
  activeItem,
  onActiveItemChange,
  searchQuery,
  onSearch,
  onClearSearch
}) => {
  return (
    <nav className="bg-white border-b border-gray-200 py-3">
      <div className="flex items-center max-w-[1284px] mx-auto w-full gap-10">
        <div className="flex items-center justify-between w-full">
          {NAVIGATION_ITEMS.map((item) => (
            <Tooltip.Root key={item.id} delayDuration={300}>
              <button
                onClick={() => onActiveItemChange(item.id)}
                className={classNames(
                  'flex items-center space-x-2 px-6 py-2 text-[#3D3D3D] rounded-[8px] text-sm',
                  activeItem === item.id
                    ? 'bg-[#F5F5F5] font-bold'
                    : ' hover:bg-[#F5F5F5]'
                )}
              >
                <Icon name={item.icon} size="md" />
                <span>{item.label}</span>
              </button>
              
              <Tooltip.Portal>
                <Tooltip.Content
                  className="bg-gray-900 text-white px-3 py-2 text-sm rounded-lg shadow-lg z-50"
                  sideOffset={5}
                >
                  {item.label}
                  <Tooltip.Arrow className="fill-gray-900" />
                </Tooltip.Content>
              </Tooltip.Portal>
            </Tooltip.Root>
          ))}
        </div>
        
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Icon name="search" size="sm" className="text-gray-400" />
          </div>
          <Tooltip.Root delayDuration={500}>
            <Tooltip.Trigger asChild>
              <input
                type="text"
                value={searchQuery}
                onChange={onSearch}
                placeholder="Search listings, users here..."
                className="block w-full min-w-[309px] pl-10 pr-10 py-2.5 bg-gray-100 border border-gray-300 rounded-[12px] text-sm placeholder-[#919191] text-[#919191] focus:outline-none focus:border-purple-700 transition-colors"
              />
            </Tooltip.Trigger>
            <Tooltip.Portal>
              <Tooltip.Content
                className="bg-black text-white px-3 py-2 text-sm rounded-lg shadow-lg z-50"
                sideOffset={5}
              >
                Search for listings and users
                <Tooltip.Arrow className="fill-black" />
              </Tooltip.Content>
            </Tooltip.Portal>
          </Tooltip.Root>
          
          {searchQuery && (
            <TooltipButton
              content="Clear search"
              onClick={onClearSearch}
              className="absolute inset-y-0 right-0 pr-3 flex items-center transition-colors"
            >
              <div className="rounded-full p-[2px] bg-[#919191]">
                <X color='white' size={13} />
              </div>
            </TooltipButton>
          )}
        </div>
      </div>
    </nav>
  );
};