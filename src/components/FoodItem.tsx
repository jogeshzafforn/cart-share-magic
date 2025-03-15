
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface FoodItemProps {
  item: {
    id: string;
    name: string;
    price: number;
    image: string;
    isVeg?: boolean;
  };
  addToCart: (item: any) => void;
}

const FoodItem: React.FC<FoodItemProps> = ({ item, addToCart }) => {
  return (
    <div className="flex flex-col">
      <div className="relative">
        <img src={item.image} alt={item.name} className="w-full h-24 object-cover rounded-lg" />
        <Button 
          size="icon" 
          variant="outline" 
          className="absolute bottom-2 right-2 bg-white h-6 w-6 rounded-full"
          onClick={() => addToCart(item)}
        >
          <svg 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="w-4 h-4 text-green-600"
          >
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        </Button>
      </div>
      <div className="mt-2">
        <div className="flex items-center">
          <Badge className="bg-white border border-red-500 p-0 mr-1">
            <div className="w-3 h-3 flex items-center justify-center">
              {item.isVeg ? (
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
              ) : (
                <div className="w-2 h-2 bg-red-600 rounded-full"></div>
              )}
            </div>
          </Badge>
          <div className="text-sm font-medium line-clamp-1">{item.name}</div>
        </div>
        <div className="text-sm font-medium">₹{item.price}</div>
      </div>
    </div>
  );
};

export default FoodItem;
