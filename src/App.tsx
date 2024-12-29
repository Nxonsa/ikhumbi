import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { AuthProvider } from "./contexts/AuthContext";
import PassengerHome from "./pages/passenger/Home";
import DriverHome from "./pages/driver/Home";
import Map from "./pages/Map";
import Landing from "./pages/Landing";
import AdminDashboard from "./pages/admin/Dashboard";
import DriverReviews from "./pages/driver/Reviews";
import PrivateBooking from "./pages/passenger/PrivateBooking";
import TaxiManagement from "./pages/driver/TaxiManagement";
import Login from "./pages/auth/Login";
import Footer from "./components/Footer";

const queryClient = new QueryClient();

// Temporarily removed authentication check for development
const ProtectedRoute = ({ children }: { children: React.ReactNode; adminOnly?: boolean }) => {
  return <>{children}</>;
};

const AppRoutes = () => (
  <AnimatePresence mode="wait">
    <Routes>
      <Route path="/login" element={<Login />} />
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
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AppRoutes />
          <Footer />
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;