import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface RestaurantHeaderProps {
  userName?: string;
}

const RestaurantHeader: React.FC<RestaurantHeaderProps> = ({ userName = "JB" }) => {
  return (
    <div className="bg-purple-950 text-white p-4">
      <div className="flex items-center mb-2">
        <Button variant="ghost" size="icon" className="text-white p-0 mr-2">
          <svg 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="w-5 h-5"
          >
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
        </Button>
        <h1 className="text-lg font-semibold">The Red Box</h1>
        
        <div className="ml-auto flex items-center gap-2">
          <Avatar className="h-8 w-8 bg-[#FC8019] text-white">
            <AvatarFallback>{userName}</AvatarFallback>
          </Avatar>
          <Button variant="ghost" size="icon" className="text-white p-0">
            <svg 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="w-5 h-5"
            >
              <circle cx="12" cy="12" r="1"></circle>
              <circle cx="19" cy="12" r="1"></circle>
              <circle cx="5" cy="12" r="1"></circle>
            </svg>
          </Button>
        </div>
      </div>
      
      <div className="flex items-center mb-2">
        <svg 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="w-5 h-5 mr-2"
        >
          <polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>
        </svg>
        <span className="font-medium">Flat</span>
        <span className="text-gray-300 mx-1">|</span>
        <span className="text-sm text-gray-300 line-clamp-1">402, Hy End Homes, Ayappa Society</span>
      </div>
      
      <div className="bg-purple-900 rounded-md p-2 flex items-center">
        <svg 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="w-5 h-5 mr-2 text-purple-300"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>
        <span className="text-sm">₹67 saved! With One Blck benefits</span>
      </div>
    </div>
  );
};

export default RestaurantHeader;
