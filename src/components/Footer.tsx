import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 w-full bg-background border-t p-4">
      <div className="container mx-auto flex justify-center">
        <Button 
          variant="link" 
          size="sm"
          className="text-muted-foreground hover:text-primary"
          onClick={() => window.open('https://mediaowl.co.za', '_blank')}
        >
          Created by Media Owl
        </Button>
      </div>
    </footer>
  );
};

export default Footer;