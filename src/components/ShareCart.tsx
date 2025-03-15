
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
      </DialogContent>
    </Dialog>
  );
};

export default ShareCart;
