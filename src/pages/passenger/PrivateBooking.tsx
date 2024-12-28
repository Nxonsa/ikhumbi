import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CalendarIcon, ClockIcon, MapPinIcon } from "lucide-react";

const PrivateBooking = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle booking submission
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-b from-neutral-50 to-neutral-100 p-6"
    >
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold text-neutral-800">Private Booking</h1>
          <p className="text-neutral-600">Book a taxi for your special event</p>
        </div>

        <Card className="p-6 bg-white shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Event Type</label>
              <Input type="text" placeholder="e.g., Wedding, Corporate Event" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Date</label>
              <div className="relative">
                <Input type="date" className="pl-10" />
                <CalendarIcon className="absolute left-3 top-2.5 h-5 w-5 text-neutral-500" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Time</label>
              <div className="relative">
                <Input type="time" className="pl-10" />
                <ClockIcon className="absolute left-3 top-2.5 h-5 w-5 text-neutral-500" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Pickup Location</label>
              <div className="relative">
                <Input type="text" placeholder="Enter pickup address" className="pl-10" />
                <MapPinIcon className="absolute left-3 top-2.5 h-5 w-5 text-neutral-500" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Additional Details</label>
              <Textarea placeholder="Any special requirements or notes" />
            </div>

            <Button type="submit" className="w-full bg-neutral-800 hover:bg-neutral-700">
              Request Booking
            </Button>
          </form>
        </Card>
      </div>
    </motion.div>
  );
};

export default PrivateBooking;