import { Button } from "./ui/button";
import { useEffect, useState } from "react";

const Footer = () => {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.innerHeight + window.scrollY;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Show footer when user is near bottom (within 50px of bottom)
      setShowFooter(documentHeight - scrollPosition < 50);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Initial check in case page is not scrollable
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!showFooter) return null;

  return (
    <>
      {/* Add padding div to prevent content from being hidden */}
      <div className="h-16" /> {/* This creates space for the footer */}
      <div className="fixed bottom-4 right-4 transition-opacity duration-300 z-10">
        <Button 
          variant="link" 
          size="sm"
          className="text-muted-foreground hover:text-primary bg-background/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm"
          onClick={() => window.open('https://mediaowl.co.za', '_blank')}
        >
          Created by Media Owl
        </Button>
      </div>
    </>
  );
};

export default Footer;