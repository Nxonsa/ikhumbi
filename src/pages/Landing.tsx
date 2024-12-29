import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-orange-50 to-orange-100 p-4"
    >
      {/* Navigation Dropdown */}
      <div className="fixed top-4 right-4 z-50">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <Menu className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>Navigation</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => navigate("/")}>
              Landing Page
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => navigate("/passenger")}>
              Passenger Home
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => navigate("/driver")}>
              Driver Home
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => navigate("/map")}>
              Map
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => navigate("/admin")}>
              Admin Dashboard
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuLabel>Driver Features</DropdownMenuLabel>
            <DropdownMenuItem onClick={() => navigate("/driver/taxi-management")}>
              Taxi Management
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => navigate("/driver/reviews/1")}>
              Driver Reviews
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuLabel>Passenger Features</DropdownMenuLabel>
            <DropdownMenuItem onClick={() => navigate("/passenger/private-booking")}>
              Private Booking
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuLabel>Authentication</DropdownMenuLabel>
            <DropdownMenuItem onClick={() => navigate("/login")}>
              Login
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <Card className="w-full max-w-md p-6 space-y-6">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="space-y-2 text-center"
        >
          <h1 className="text-3xl font-bold tracking-tighter">Welcome to TaxiTracker</h1>
          <p className="text-muted-foreground">Choose your role to continue</p>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="space-y-4"
        >
          <Button
            variant="default"
            className="w-full h-12 text-lg"
            onClick={() => navigate("/passenger")}
          >
            I'm a Passenger
          </Button>
          <Button
            variant="outline"
            className="w-full h-12 text-lg"
            onClick={() => navigate("/driver")}
          >
            I'm a Driver
          </Button>
        </motion.div>
      </Card>
    </motion.div>
  );
};

export default Landing;