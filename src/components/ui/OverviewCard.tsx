import React from 'react';
import { Icon } from '../shared/Icon';
import { OverviewCard as OverviewCardType, UserStatsCard } from '@/lib/types/index';
import { ChevronRight } from 'lucide-react';

interface OverviewCardProps {
  data: OverviewCardType | UserStatsCard;
  type: 'house' | 'users';
  onViewAll?: () => void;
}

export const OverviewCard: React.FC<OverviewCardProps> = ({ 
  data, 
  type,
  onViewAll 
}) => {
  const isListings = type === 'house';
  
  // Helper function to get the appropriate values based on card type
  const getCardValues = () => {
    if (isListings) {
      // For listings, we use the OverviewCard type or map UserStatsCard fields
      const listingData = data as OverviewCardType;
      return {
        secondValue: listingData.active || (data as UserStatsCard).riders,
        secondLabel: 'Active',
        thirdValue: listingData.archived || (data as UserStatsCard).subscribers,
        thirdLabel: 'Archived'
      };
    } else {
      // For users, we use UserStatsCard type
      const userData = data as UserStatsCard;
      return {
        secondValue: userData.riders,
        secondLabel: 'Riders',
        thirdValue: userData.subscribers,
        thirdLabel: 'Subscribers'
      };
    }
  };

  const cardValues = getCardValues();

  return (
    <div className="bg-white rounded-[16px] border border-[#E4E4E4]">
      <div className="flex items-center justify-between rounded-t-[16px] px-4 py-3.5 bg-[#F9FAFB] border-b border-[#E4E4E4]">
        <div className="flex items-center gap-2">
          <div className="">
            <Icon 
              name={isListings ? 'house' : 'user'} 
              size="md"  
            />
          </div>
          <h3 className="text-[14px] font-medium text-[#292929]">
            {isListings ? 'Listings' : 'Users'} Overview
          </h3>
        </div>
        
        <button
          onClick={onViewAll}
          className="flex items-center space-x-0.5 text-[12px] font-medium text-[#4545FE] cursor-pointer hover:underline transition-colors"
        >
          <span>View all</span>
          <ChevronRight size={15} color='#4545FE'/>
        </button>
      </div>

      <div className="grid grid-cols-3 gap-6 px-4 py-5">
        <div className="text-left flex flex-col gap-3">
          <div className="text-sm text-[#525252] font-medium">Total</div>
          <div className="text-2xl font-semibold text-[#141414]">
            {data.total}
          </div>
        </div>
        
        <div className="text-left flex gap-3 flex-col">
           <div className="text-sm text-[#525252] font-medium">
            {cardValues.secondLabel}
          </div>
          <div className="text-2xl font-semibold text-[#141414]">
            {cardValues.secondValue}
          </div>
        </div>
        
        <div className="text-left flex gap-3 flex-col">
            <div className="text-sm text-[#525252] font-medium">
            {cardValues.thirdLabel}
          </div>
          <div className="text-2xl font-semibold text-[#141414]">
            {cardValues.thirdValue}
          </div>
        
        </div>
      </div>
    </div>
  );
};