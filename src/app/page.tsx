'use client'
import { OverviewCard } from "@/components/ui/OverviewCard";
import { PropertyListingCard } from "@/components/ui/PropertyListing";
import { SalesOverview } from "@/components/ui/SalesOverview";
import { mockChartData, mockSalesMetrics, overviewCardsData, PROPERTY_LISTINGS } from "@/lib/data";
import { handleViewAll } from "@/lib/utils";
import { useState } from "react";
import { TbMessages } from "react-icons/tb";
const Home: React.FC = () => {
  const [isBudgetModalOpen, setIsBudgetModalOpen] = useState(false);
  return (
    <div className="min-h-screen bg-gray-50 max-w-[1440px] mx-auto relative">
      
      
      <main className="p-4">
        <div className="max-w-[1284px] mx-auto relative">
          <h1 className="text-xl leading-[100%] font-medium text-[#191919] mb-5">Welcome, Ahmed</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {/* Left Column - Sales Overview */}
            <div className="lg:col-span-2">
              <SalesOverview
                dateRange="Jan 2022 - Sep 2022"
                metrics={mockSalesMetrics}
                chartData={mockChartData}
                onViewTransactions={() => console.log('View Transactions clicked')}
              />
            </div>
            
            {/* Right Column - Cards */}
            <div className="space-y-5">
              {overviewCardsData.map((cardConfig) => (
                <OverviewCard 
                  key={cardConfig.id}
                  data={cardConfig.data} 
                  type={cardConfig.type}
                  onViewAll={() => handleViewAll(cardConfig.data.viewAllLink)}
                />
              ))}
            </div>
          </div>

          {/* Property Listings */}
          <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-5">
            {PROPERTY_LISTINGS.map((property, index) => (
              <PropertyListingCard
                key={index}
                property={property}
                onClick={() => setIsBudgetModalOpen(true)}
              />
            ))}
          </div>

          {/* Floating Budget Button */}
          <button
            onClick={() => setIsBudgetModalOpen(true)}
            className="absolute flex bottom-[23vh] -right-4 bg-[#141414] justify-center items-center text-white h-14 w-14 border border-gray-50 rounded-full transition-colors z-40"
          >
           <TbMessages size={30} color="white"  fill="white"/>
          </button>
        </div>
      </main>
    </div>
  );
};

export default Home;