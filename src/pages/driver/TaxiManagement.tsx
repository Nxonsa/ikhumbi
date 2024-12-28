import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Car,
  Users,
  CreditCard,
  DollarSign,
  ChartBar,
  Calendar,
  AlertCircle,
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const TaxiManagement = () => {
  const { toast } = useToast();
  const [reportMessage, setReportMessage] = useState("");

  // Mock data - replace with actual data from your backend
  const vehicleInfo = {
    model: "Toyota Quantum",
    registration: "CA 123-456",
    status: "Active",
  };

  const bookings = [
    {
      id: 1,
      date: "2024-02-20",
      passenger: "John Doe",
      amount: 150,
      commission: 22.5,
      paymentMethod: "NFC",
      type: "Regular",
    },
    {
      id: 2,
      date: "2024-02-21",
      passenger: "Jane Smith",
      amount: 200,
      commission: 30,
      paymentMethod: "NFC",
      type: "Private",
    },
  ];

  const statistics = {
    totalPassengers: 45,
    totalEarnings: 6750,
    totalCommission: 1012.5,
    activeBookings: 3,
  };

  const handleReportSubmit = () => {
    if (!reportMessage.trim()) {
      toast({
        title: "Error",
        description: "Please enter a message for your report",
        variant: "destructive",
      });
      return;
    }

    // Here you would typically send the report to your backend
    console.log("Report submitted:", reportMessage);
    toast({
      title: "Report Submitted",
      description: "An admin will review your report shortly",
    });
    setReportMessage("");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-b from-neutral-50 to-neutral-100 p-6"
    >
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold text-neutral-800">Taxi Management</h1>
          <p className="text-neutral-600">Manage your vehicle and track earnings</p>
        </div>

        {/* Vehicle Information */}
        <Card className="p-6">
          <div className="flex items-center space-x-4 mb-4">
            <Car className="h-6 w-6 text-neutral-600" />
            <h2 className="text-xl font-semibold">Vehicle Information</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <p className="text-sm text-neutral-500">Model</p>
              <p className="font-medium">{vehicleInfo.model}</p>
            </div>
            <div>
              <p className="text-sm text-neutral-500">Registration</p>
              <p className="font-medium">{vehicleInfo.registration}</p>
            </div>
            <div>
              <p className="text-sm text-neutral-500">Status</p>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                {vehicleInfo.status}
              </span>
            </div>
          </div>
        </Card>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-neutral-500">Total Passengers</p>
                <p className="text-2xl font-bold">{statistics.totalPassengers}</p>
              </div>
              <Users className="h-8 w-8 text-neutral-600" />
            </div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-neutral-500">Total Earnings</p>
                <p className="text-2xl font-bold">R{statistics.totalEarnings}</p>
              </div>
              <DollarSign className="h-8 w-8 text-neutral-600" />
            </div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-neutral-500">Platform Commission</p>
                <p className="text-2xl font-bold">R{statistics.totalCommission}</p>
              </div>
              <ChartBar className="h-8 w-8 text-neutral-600" />
            </div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-neutral-500">Active Bookings</p>
                <p className="text-2xl font-bold">{statistics.activeBookings}</p>
              </div>
              <Calendar className="h-8 w-8 text-neutral-600" />
            </div>
          </Card>
        </div>

        {/* Report to Admin */}
        <Card className="p-6">
          <div className="flex items-center space-x-4 mb-4">
            <AlertCircle className="h-6 w-6 text-neutral-600" />
            <h2 className="text-xl font-semibold">Report to Admin</h2>
          </div>
          <div className="space-y-4">
            <textarea
              value={reportMessage}
              onChange={(e) => setReportMessage(e.target.value)}
              className="w-full h-32 p-3 border rounded-md"
              placeholder="Describe your issue or concern..."
            />
            <Button 
              onClick={handleReportSubmit}
              className="bg-neutral-800 hover:bg-neutral-700 text-white"
            >
              Submit Report
            </Button>
          </div>
        </Card>

        {/* Bookings Table */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-4">
              <CreditCard className="h-6 w-6 text-neutral-600" />
              <h2 className="text-xl font-semibold">Recent Bookings</h2>
            </div>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Passenger</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Amount (R)</TableHead>
                <TableHead>Commission</TableHead>
                <TableHead>Payment Method</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {bookings.map((booking) => (
                <TableRow key={booking.id}>
                  <TableCell>{booking.date}</TableCell>
                  <TableCell>{booking.passenger}</TableCell>
                  <TableCell>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      booking.type === 'Private' ? 'bg-purple-100 text-purple-800' : 'bg-blue-100 text-blue-800'
                    }`}>
                      {booking.type}
                    </span>
                  </TableCell>
                  <TableCell>R{booking.amount}</TableCell>
                  <TableCell>
                    R{booking.commission} ({booking.type === 'Private' ? '15%' : '15%'})
                  </TableCell>
                  <TableCell>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {booking.paymentMethod}
                    </span>
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

export default TaxiManagement;