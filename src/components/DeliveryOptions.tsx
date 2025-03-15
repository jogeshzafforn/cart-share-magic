
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const DeliveryOptions: React.FC = () => {
  return (
    <div className="bg-white rounded-lg overflow-hidden mb-4 shadow">
      <Tabs defaultValue="delivery">
        <TabsList className="w-full grid grid-cols-3 bg-gray-100">
          <TabsTrigger value="delivery" className="py-4 px-0 font-semibold">Delivery Type</TabsTrigger>
          <TabsTrigger value="tip" className="py-4 px-0 font-semibold">Tip</TabsTrigger>
          <TabsTrigger value="instructions" className="py-4 px-0 font-semibold">Instructions</TabsTrigger>
        </TabsList>
        
        <TabsContent value="delivery" className="p-4">
          <RadioGroup defaultValue="express">
            <div className="flex items-start mb-4">
              <RadioGroupItem id="express" value="express" className="mt-1" />
              <div className="ml-3">
                <Label htmlFor="express" className="text-purple-900 font-bold flex items-center">
                  Express-4 | <span className="line-through text-gray-500 mr-1">₹29</span> FREE
                </Label>
                <p className="text-gray-500">Fastest delivery, directly to you!</p>
                <div className="mt-1 bg-gray-100 rounded-full inline-flex items-center px-3 py-1">
                  <svg 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="w-4 h-4 mr-1 text-purple-900"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="text-purple-900">Free upgrade with One BLCK</span>
                </div>
                <div className="text-right font-medium">30-35 mins</div>
              </div>
            </div>
            
            <div className="flex items-start">
              <RadioGroupItem id="standard" value="standard" className="mt-1" />
              <div className="ml-3">
                <Label htmlFor="standard" className="font-medium">Standard</Label>
                <div className="text-right font-medium">40-45 mins</div>
              </div>
            </div>
          </RadioGroup>
        </TabsContent>
        
        <TabsContent value="tip">
          <div className="p-4">
            <p>Tip options will appear here</p>
          </div>
        </TabsContent>
        
        <TabsContent value="instructions">
          <div className="p-4">
            <p>Delivery instructions will appear here</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DeliveryOptions;
