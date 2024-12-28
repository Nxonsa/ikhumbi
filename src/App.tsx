import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import PassengerHome from "./pages/passenger/Home";
import DriverHome from "./pages/driver/Home";
import Map from "./pages/Map";
import Landing from "./pages/Landing";
import AdminDashboard from "./pages/admin/Dashboard";
import DriverReviews from "./pages/driver/Reviews";
import PrivateBooking from "./pages/passenger/PrivateBooking";
import TaxiManagement from "./pages/driver/TaxiManagement";
import Login from "./pages/auth/Login";

const queryClient = new QueryClient();

// Protected Route component
const ProtectedRoute = ({ children, adminOnly = false }: { children: React.ReactNode; adminOnly?: boolean }) => {
  const { session, isAdmin } = useAuth();
  
  if (!session) {
    return <Navigate to="/login" replace />;
  }

  if (adminOnly && !isAdmin) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

const AppRoutes = () => (
  <AnimatePresence mode="wait">
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Landing />} />
      <Route
        path="/passenger"
        element={
          <ProtectedRoute>
            <PassengerHome />
          </ProtectedRoute>
        }
      />
      <Route
        path="/driver"
        element={
          <ProtectedRoute>
            <DriverHome />
          </ProtectedRoute>
        }
      />
      <Route path="/map" element={<Map />} />
      <Route
        path="/admin"
        element={
          <ProtectedRoute adminOnly>
            <AdminDashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/driver/reviews/:id"
        element={
          <ProtectedRoute>
            <DriverReviews />
          </ProtectedRoute>
        }
      />
      <Route
        path="/passenger/private-booking"
        element={
          <ProtectedRoute>
            <PrivateBooking />
          </ProtectedRoute>
        }
      />
      <Route
        path="/driver/taxi-management"
        element={
          <ProtectedRoute>
            <TaxiManagement />
          </ProtectedRoute>
        }
      />
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
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;