
import React, { useState } from "react";
import { Share } from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger,
  DialogClose
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";

interface ShareCartProps {
  cart: any[];
}

const ShareCart: React.FC<ShareCartProps> = ({ cart }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [shareLink, setShareLink] = useState("");
  
  const generateShareLink = () => {
    // Encode cart data in a URL-safe format
    const encodedCart = btoa(JSON.stringify(cart));
    // Add user=DV parameter to indicate the shared cart is for user DV
    const url = `${window.location.origin}?cart=${encodedCart}&user=DV`;
    setShareLink(url);
    setIsOpen(true);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareLink)
      .then(() => {
        toast({
          title: "Link copied!",
          description: "Share it with your friends to add these items to their cart",
        });
      })
      .catch(err => {
        console.error('Failed to copy link: ', err);
        toast({
          title: "Error copying link",
          description: "Please try again or copy the link manually",
          variant: "destructive",
        });
      });
  };

  const shareContacts = [
    { name: "Rangeela", img: "https://randomuser.me/api/portraits/men/1.jpg" },
    { name: "Arthi", img: "https://randomuser.me/api/portraits/women/2.jpg" },
    { name: "Devidutta", img: "https://randomuser.me/api/portraits/men/3.jpg" },
    { name: "Pritish", img: "https://randomuser.me/api/portraits/men/4.jpg" }
  ];

  const shareOptions = [
    { name: "WhatsApp", icon: "whatsapp.svg", color: "bg-green-500" },
    { name: "Messages", icon: "messages.svg", color: "bg-green-400" },
    { name: "Mail", icon: "mail.svg", color: "bg-blue-400" },
    { name: "AirDrop", icon: "airdrop.svg", color: "bg-blue-500" }
  ];

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <Button 
        variant="outline" 
        onClick={generateShareLink}
        className="text-xs px-2 h-9"
        size="sm"
      >
        <Share className="h-4 w-4 mr-1" />
        Share
      </Button>
      
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Share your cart</DialogTitle>
        </DialogHeader>
        
        <div className="flex items-center space-x-2 mt-4">
          <div className="grid flex-1 gap-2">
            <Input
              value={shareLink}
              readOnly
              className="w-full"
            />
            <p className="text-sm text-muted-foreground">
              Anyone with this link can add these items to their cart.
            </p>
          </div>
          <Button onClick={copyToClipboard} className="shrink-0">
            Copy
          </Button>
        </div>

        {/* Share with contacts */}
        <div className="mt-6">
          <h3 className="text-sm font-medium mb-3">Share with contacts</h3>
          <div className="flex justify-between">
            {shareContacts.map((contact, i) => (
              <div key={i} className="flex flex-col items-center gap-1">
                <div className="relative">
                  <img 
                    src={contact.img} 
                    alt={contact.name} 
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="absolute bottom-0 right-0 bg-green-500 p-1 rounded-full">
                    <svg 
                      width="12" 
                      height="12" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="white" 
                      strokeWidth="3" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                </div>
                <span className="text-xs">{contact.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Share options */}
        <div className="mt-6">
          <div className="grid grid-cols-4 gap-4 mb-4">
            <div className="flex flex-col items-center gap-1">
              <div className="w-14 h-14 rounded-full bg-blue-500 flex items-center justify-center">
                <svg 
                  width="28" 
                  height="28" 
                  viewBox="0 0 24 24" 
                  fill="white" 
                  stroke="none"
                >
                  <path d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0zm0 4.5c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2zm3.243 13.03A8.958 8.958 0 0 1 12 18.75a8.958 8.958 0 0 1-3.243-1.22c-.296-.174-.457-.496-.457-.83V15.5c0-1.103.897-2 2-2h3.4c1.103 0 2 .897 2 2v1.2c0 .334-.161.656-.457.83z"/>
                  <path d="M16.5 12c1.5 0 2.5-1.5 2.5-3S19 7 18 7s-2 1-2 2.5 0 2.5.5 2.5zm-9 0c.5 0 .5-1 .5-2.5S6.5 7 5.5 7 3 8.5 3 10s1 2 2.5 2z"/>
                </svg>
              </div>
              <span className="text-xs">AirDrop</span>
            </div>
            
            <div className="flex flex-col items-center gap-1">
              <div className="w-14 h-14 rounded-full bg-green-400 flex items-center justify-center">
                <svg 
                  width="28" 
                  height="28" 
                  viewBox="0 0 24 24" 
                  fill="white" 
                  stroke="none"
                >
                  <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
                </svg>
              </div>
              <span className="text-xs">Messages</span>
            </div>
            
            <div className="flex flex-col items-center gap-1">
              <div className="w-14 h-14 rounded-full bg-blue-400 flex items-center justify-center">
                <svg 
                  width="28" 
                  height="28" 
                  viewBox="0 0 24 24" 
                  fill="white" 
                  stroke="none"
                >
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>
              <span className="text-xs">Mail</span>
            </div>
            
            <div className="flex flex-col items-center gap-1">
              <div className="w-14 h-14 rounded-full bg-green-500 flex items-center justify-center">
                <svg 
                  width="28" 
                  height="28" 
                  viewBox="0 0 24 24" 
                  fill="white" 
                  stroke="none"
                >
                  <path d="M16.6 14c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.6.8-.8 1-.1.2-.3.2-.5.1-.7-.3-1.4-.7-2-1.2-.5-.5-1-1.1-1.4-1.7-.1-.2 0-.4.1-.5.1-.1.2-.3.4-.4.1-.1.2-.3.2-.4.1-.1.1-.3 0-.4-.1-.1-.6-1.3-.8-1.8-.1-.7-.3-.7-.5-.7h-.5c-.2 0-.5.2-.6.3-.6.6-.9 1.3-.9 2.1.1.9.4 1.8 1 2.6 1.1 1.6 2.5 2.9 4.2 3.7.5.2.9.4 1.4.5.5.2 1 .2 1.6.1.7-.1 1.3-.6 1.7-1.2.2-.4.2-.8.1-1.2l-.4-.2z"/>
                  <path d="M19.1 4.9C15.2 1 8.8 1 4.9 4.9c-3.5 3.5-3.9 9.1-1 13.1L2 22l4.2-1.9c1.5 1 3.2 1.5 5 1.5 5.5 0 9.9-4.4 9.9-9.9 0-2.6-1-5.1-2.8-7zM14.5 18.9c-1.4.8-3.1 1-4.6.7-1.5-.3-2.9-1.1-3.9-2.1-2.1-2.1-2.8-5.2-1.9-8 .9-2.8 3.5-4.8 6.5-5 1.3-.1 2.6.1 3.9.7 1.1.5 2.1 1.3 2.9 2.2 1.4 1.6 2.2 3.7 2.1 5.8-.1 2.6-1.4 4.9-3.6 6.2-.8.5-1.6.8-2.5 1-.4.1-.7.1-1 .1z"/>
                </svg>
              </div>
              <span className="text-xs">WhatsApp</span>
            </div>
          </div>
          
          <div className="border-t pt-4">
            <Button 
              variant="outline" 
              className="w-full justify-between mb-2 py-6"
              onClick={copyToClipboard}
            >
              <span>Copy</span>
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
              </svg>
            </Button>
            
            <Button 
              variant="outline" 
              className="w-full justify-between py-6"
            >
              <span>New Quick Note</span>
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ShareCart;
