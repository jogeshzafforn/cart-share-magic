
import { useState, useEffect } from "react";
import { Share } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "@/components/ui/use-toast";
import FoodItem from "@/components/FoodItem";
import CartItem from "@/components/CartItem";
import RestaurantHeader from "@/components/RestaurantHeader";
import SuggestedItems from "@/components/SuggestedItems";
import SaveCorner from "@/components/SaveCorner";
import DeliveryOptions from "@/components/DeliveryOptions";
import ShareCart from "@/components/ShareCart";

const Index = () => {
  const [cart, setCart] = useState<any[]>([]);
  const [isShareDialogOpen, setIsShareDialogOpen] = useState(false);

  // Load cart from URL params or localStorage on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const sharedCart = params.get('cart');
    
    if (sharedCart) {
      try {
        const parsedCart = JSON.parse(atob(sharedCart));
        setCart(parsedCart);
        toast({
          title: "Cart loaded!",
          description: "Shared items have been added to your cart",
        });
      } catch (e) {
        console.error("Failed to parse shared cart", e);
      }
    } else {
      const savedCart = localStorage.getItem('cart');
      if (savedCart) {
        setCart(JSON.parse(savedCart));
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item: any) => {
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    
    if (existingItem) {
      setCart(cart.map(cartItem => 
        cartItem.id === item.id 
          ? {...cartItem, quantity: cartItem.quantity + 1} 
          : cartItem
      ));
    } else {
      setCart([...cart, {...item, quantity: 1}]);
    }
    
    toast({
      title: "Item added",
      description: `${item.name} has been added to your cart`,
    });
  };

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      setCart(cart.filter(item => item.id !== id));
    } else {
      setCart(cart.map(item => 
        item.id === id ? {...item, quantity: newQuantity} : item
      ));
    }
  };

  const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="max-w-md mx-auto bg-gray-100 min-h-screen pb-20">
      <RestaurantHeader />
      
      {/* Main Content */}
      <div className="px-4 py-2">
        {/* Cart Items */}
        {cart.length > 0 && (
          <div className="bg-white rounded-lg p-4 mb-4 shadow">
            {cart.map((item) => (
              <CartItem 
                key={item.id} 
                item={item} 
                updateQuantity={updateQuantity} 
              />
            ))}
            
            <div className="flex gap-2 mt-4">
              <Button variant="outline" className="flex-1 justify-start">
                <svg 
                  viewBox="0 0 24 24" 
                  className="w-5 h-5 mr-2" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  fill="none" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                </svg>
                Cooking Instructions
              </Button>
              
              <Button variant="outline" className="flex-1 justify-start">
                <svg 
                  viewBox="0 0 24 24" 
                  className="w-5 h-5 mr-2" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  fill="none" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
                Add More Items
              </Button>
              
              <ShareCart cart={cart} />
            </div>
          </div>
        )}

        {/* Suggested Items */}
        <SuggestedItems addToCart={addToCart} />
        
        {/* Savings Corner */}
        <SaveCorner />
        
        {/* Delivery Options */}
        <DeliveryOptions />
      </div>
      
      {/* Bottom Bar */}
      {cart.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-lg">
          <div className="flex justify-between items-center max-w-md mx-auto">
            <div>
              <div className="flex items-center">
                <img src="https://img.icons8.com/color/48/000000/mastercard-logo.png" className="w-8 h-5 mr-2" alt="Credit card" />
                <span className="text-sm text-gray-600">Credit card</span>
              </div>
              <div className="text-green-600 text-sm">Additional ₹36 cashback</div>
            </div>
            <Button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8">
              Pay ₹{cartTotal}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
