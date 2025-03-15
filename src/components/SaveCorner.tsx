
import React from "react";
import { Button } from "@/components/ui/button";

const SaveCorner: React.FC = () => {
  return (
    <div className="bg-white rounded-lg p-4 mb-4 shadow">
      <h2 className="text-lg font-semibold text-gray-500 mb-4">SAVINGS CORNER</h2>
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <div className="bg-orange-500 text-white p-2 rounded-md mr-3">
            <svg 
              viewBox="0 0 24 24" 
              fill="currentColor" 
              className="w-5 h-5"
            >
              <path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z"></path>
            </svg>
          </div>
          <div>
            <div className="font-medium">Save ₹80 on this order</div>
            <div className="text-sm text-gray-500 flex items-center">
              View all coupons
              <svg 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="w-4 h-4 ml-1"
              >
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </div>
          </div>
        </div>
        <Button className="bg-orange-500 hover:bg-orange-600">Apply</Button>
      </div>
    </div>
  );
};

export default SaveCorner;
