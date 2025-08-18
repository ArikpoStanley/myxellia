import React, { useRef, useEffect } from 'react';
import { User } from '@/lib/types';
import { PiUsersFourFill } from "react-icons/pi";
import { FaUser } from "react-icons/fa6";
import { IoIosLock } from "react-icons/io";
import { LogOut } from 'lucide-react';
import { IoShieldCheckmark } from "react-icons/io5";

interface ProfileProps {
  user: User;
  onClose: () => void;
}

export const Profile: React.FC<ProfileProps> = ({ user, onClose }) => {
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  const menuItems = [
    { id: 'teams', label: 'Teams', icon: <PiUsersFourFill size={25} className="text-black" /> },
    { id: 'contacts', label: 'Contact Persons', icon: <FaUser size={25} className="text-black" />},
    { id: 'password', label: 'Change password', icon: <IoIosLock size={25} className="text-black" /> },
    { id: '2fa', label: '2 - Factor Authentication', icon: <IoShieldCheckmark size={25} className="text-black" /> },
  ];

  return (
    <div 
      ref={popupRef}
      className="absolute right-0 mt-2 w-94 bg-white rounded-xl shadow-lg border border-gray-200 p-4 z-50"
    >
      {/* User Info */}
      <div className="p-4 border-b border-gray-100 bg-gray-50 rounded-lg ">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-teal-700 rounded-full flex items-center justify-center text-white font-semibold text-lg">
            {user.name.split(' ').map((n: string) => n[0]).join('')}
          </div>
          <div>
            <p className="font-semibold text-gray-900">{user.name}</p>
            <p className="text-sm text-gray-500">{user.email}</p>
          </div>
        </div>
      </div>

      {/* Menu Items */}
      <div className="py-2">
        {menuItems.map((item, index) => (
          <button
            key={index}
            className="w-full flex items-center space-x-3 py-5 px-2 text-left border-b border-gray-100 hover:bg-gray-50 transition-colors rounded-md"
          >
            <div className="flex items-center justify-center w-6 h-6">
              {item.icon}
            </div>
            <span className="text-gray-700 text-sm">{item.label}</span>
          </button>
        ))}
        
        {/* Logout */}
        <div className="mt-2 pt-2">
          <button className="w-full flex items-center space-x-3 py-3 px-2 text-left hover:bg-gray-50 transition-colors text-red-600 rounded-md">
            <div className="flex items-center justify-center w-6 h-6">
              <LogOut size={18} className="text-red-500 rotate-180" />
            </div>
            <span className='text-sm'>Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
};