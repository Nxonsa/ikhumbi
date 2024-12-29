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
    <footer className="fixed bottom-0 w-full bg-background border-t p-4 transition-opacity duration-300">
      <div className="container mx-auto flex justify-center">
        <Button 
          variant="link" 
          size="sm"
          className="text-muted-foreground hover:text-primary"
          onClick={() => window.open('https://mediaowl.co.za', '_blank')}
        >
          Media Owl
        </Button>
      </div>
    </footer>
  );
};

export default Footer;