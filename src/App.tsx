import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import PassengerHome from "./pages/passenger/Home";
import DriverHome from "./pages/driver/Home";
import Map from "./pages/Map";
import Landing from "./pages/Landing";
import AdminDashboard from "./pages/admin/Dashboard";
import DriverReviews from "./pages/driver/Reviews";
import PrivateBooking from "./pages/passenger/PrivateBooking";
import TaxiManagement from "./pages/driver/TaxiManagement";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/passenger" element={<PassengerHome />} />
            <Route path="/driver" element={<DriverHome />} />
            <Route path="/map" element={<Map />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/driver/reviews/:id" element={<DriverReviews />} />
            <Route path="/passenger/private-booking" element={<PrivateBooking />} />
            <Route path="/driver/taxi-management" element={<TaxiManagement />} />
          </Routes>
        </AnimatePresence>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;