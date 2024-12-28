import { motion } from "framer-motion";
import { AlertCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { VehicleInfo } from "@/components/driver/VehicleInfo";
import { StatisticsCards } from "@/components/driver/StatisticsCards";
import { RatingsCard } from "@/components/driver/RatingsCard";
import { BookingsTable } from "@/components/driver/BookingsTable";
import { CommentsCard } from "@/components/driver/CommentsCard";

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

  const ratings = {
    averageRating: 4.5,
    totalRatings: 128,
    ratingDistribution: {
      5: 80,
      4: 30,
      3: 10,
      2: 5,
      1: 3,
    },
  };

  const comments = [
    {
      id: 1,
      passenger: "Alice Johnson",
      comment: "Very professional and punctual driver!",
      date: "2024-02-20",
    },
    {
      id: 2,
      passenger: "Bob Wilson",
      comment: "Great conversation and safe driving.",
      date: "2024-02-19",
    },
  ];

  const handleReportSubmit = () => {
    if (!reportMessage.trim()) {
      toast({
        title: "Error",
        description: "Please enter a message for your report",
        variant: "destructive",
      });
      return;
    }

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

        <VehicleInfo {...vehicleInfo} />
        <StatisticsCards {...statistics} />
        <RatingsCard {...ratings} />
        <CommentsCard comments={comments} />

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

        <BookingsTable bookings={bookings} />
      </div>
    </motion.div>
  );
};

export default TaxiManagement;