
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface CartItemProps {
  item: {
    id: string;
    name: string;
    price: number;
    quantity: number;
    isVeg?: boolean;
  };
  updateQuantity: (id: string, quantity: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({ item, updateQuantity }) => {
  return (
    <div className="flex justify-between items-center mb-4">
      <div className="flex-1">
        <div className="flex items-center">
          <Badge className="bg-white border border-red-500 p-0 mr-2">
            <div className="w-3 h-3 flex items-center justify-center">
              {item.isVeg ? (
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
              ) : (
                <div className="w-2 h-2 bg-red-600 rounded-full"></div>
              )}
            </div>
          </Badge>
          <span className="font-medium">{item.name}</span>
        </div>
      </div>
      
      <div className="flex items-center gap-2">
        <div className="flex items-center border border-gray-300 rounded-md">
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-8 w-8 rounded-r-none"
            onClick={() => updateQuantity(item.id, item.quantity - 1)}
          >
            <span className="text-xl text-gray-500">−</span>
          </Button>
          <div className="w-8 text-center">{item.quantity}</div>
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-8 w-8 rounded-l-none"
            onClick={() => updateQuantity(item.id, item.quantity + 1)}
          >
            <span className="text-xl text-gray-500">+</span>
          </Button>
        </div>
        <div className="text-right font-medium">₹{item.price}</div>
      </div>
    </div>
  );
};

export default CartItem;
