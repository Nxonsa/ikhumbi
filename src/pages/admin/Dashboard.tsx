import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  AlertTriangleIcon, 
  StarIcon, 
  CarIcon, 
  UsersIcon,
  MessageSquareIcon,
  CheckIcon,
  XIcon,
} from "lucide-react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const AdminDashboard = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  // Fetch private bookings
  const { data: bookings, isLoading } = useQuery({
    queryKey: ['private-bookings'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('private_bookings')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      return data;
    },
  });

  // Update booking status mutation
  const updateBookingStatus = useMutation({
    mutationFn: async ({ id, status }: { id: string; status: string }) => {
      const { error } = await supabase
        .from('private_bookings')
        .update({ status })
        .eq('id', id);

      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['private-bookings'] });
      toast({
        title: "Booking Updated",
        description: "The booking status has been updated successfully.",
      });
    },
    onError: (error) => {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to update booking status. Please try again.",
      });
      console.error("Error updating booking:", error);
    },
  });

  // This would be fetched from your backend
  const reportedDrivers = [
    { id: 1, name: "John Doe", reports: 2, status: "Under Review" },
    { id: 2, name: "Jane Smith", reports: 1, status: "Resolved" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-b from-neutral-50 to-neutral-100 p-6"
    >
      <div className="max-w-7xl mx-auto space-y-6">
        <h1 className="text-4xl font-bold text-neutral-800">Admin Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="p-4 bg-white shadow-sm">
            <div className="flex items-center space-x-2">
              <CarIcon className="h-5 w-5 text-neutral-600" />
              <div>
                <p className="text-sm text-neutral-600">Active Taxis</p>
                <p className="text-2xl font-bold">24</p>
              </div>
            </div>
          </Card>
          
          <Card className="p-4 bg-white shadow-sm">
            <div className="flex items-center space-x-2">
              <UsersIcon className="h-5 w-5 text-neutral-600" />
              <div>
                <p className="text-sm text-neutral-600">Active Users</p>
                <p className="text-2xl font-bold">156</p>
              </div>
            </div>
          </Card>
          
          <Card className="p-4 bg-white shadow-sm">
            <div className="flex items-center space-x-2">
              <AlertTriangleIcon className="h-5 w-5 text-red-500" />
              <div>
                <p className="text-sm text-neutral-600">Reports</p>
                <p className="text-2xl font-bold">3</p>
              </div>
            </div>
          </Card>
          
          <Card className="p-4 bg-white shadow-sm">
            <div className="flex items-center space-x-2">
              <StarIcon className="h-5 w-5 text-yellow-500" />
              <div>
                <p className="text-sm text-neutral-600">Avg Rating</p>
                <p className="text-2xl font-bold">4.5</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Private Bookings Section */}
        <Card className="p-6 bg-white shadow-sm">
          <div className="flex items-center space-x-2 mb-4">
            <MessageSquareIcon className="h-5 w-5 text-blue-500" />
            <h2 className="text-2xl font-semibold">Private Bookings</h2>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Event Type</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Time</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {isLoading ? (
                <TableRow>
                  <TableCell colSpan={7} className="text-center">Loading...</TableCell>
                </TableRow>
              ) : bookings?.map((booking) => (
                <TableRow key={booking.id}>
                  <TableCell>{booking.event_type}</TableCell>
                  <TableCell>{new Date(booking.date).toLocaleDateString()}</TableCell>
                  <TableCell>{booking.time}</TableCell>
                  <TableCell>{booking.pickup_location}</TableCell>
                  <TableCell>{booking.phone_number}</TableCell>
                  <TableCell>
                    <Badge 
                      variant={
                        booking.status === "approved" 
                          ? "default" 
                          : booking.status === "rejected"
                          ? "destructive"
                          : "secondary"
                      }
                    >
                      {booking.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button
                        size="sm"
                        variant="outline"
                        className="bg-green-50 hover:bg-green-100"
                        onClick={() => updateBookingStatus.mutate({ 
                          id: booking.id, 
                          status: 'approved' 
                        })}
                        disabled={booking.status === 'approved'}
                      >
                        <CheckIcon className="h-4 w-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="bg-red-50 hover:bg-red-100"
                        onClick={() => updateBookingStatus.mutate({ 
                          id: booking.id, 
                          status: 'rejected' 
                        })}
                        disabled={booking.status === 'rejected'}
                      >
                        <XIcon className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>

        {/* Reported Drivers Section */}
        <Card className="p-6 bg-white shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Reported Drivers</h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Driver</TableHead>
                <TableHead>Reports</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {reportedDrivers.map((driver) => (
                <TableRow key={driver.id}>
                  <TableCell>{driver.name}</TableCell>
                  <TableCell>{driver.reports}</TableCell>
                  <TableCell>
                    <Badge 
                      variant={driver.status === "Resolved" ? "secondary" : "destructive"}
                    >
                      {driver.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <button className="text-sm text-blue-600 hover:underline">
                      Review
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </div>
    </motion.div>
  );
};

export default AdminDashboard;