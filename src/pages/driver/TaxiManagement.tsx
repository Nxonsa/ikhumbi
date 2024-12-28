import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { PlusIcon, ImageIcon, CarIcon } from "lucide-react";

const TaxiManagement = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle taxi registration
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-b from-neutral-50 to-neutral-100 p-6"
    >
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold text-neutral-800">Taxi Management</h1>
          <p className="text-neutral-600">Register your taxi for private bookings</p>
        </div>

        <Card className="p-6 bg-white shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Vehicle Model</label>
                <div className="relative">
                  <Input type="text" placeholder="e.g., Toyota Quantum" className="pl-10" />
                  <CarIcon className="absolute left-3 top-2.5 h-5 w-5 text-neutral-500" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Registration Number</label>
                <Input type="text" placeholder="Vehicle registration" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Seating Capacity</label>
                <Input type="number" placeholder="Number of seats" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Hourly Rate (R)</label>
                <Input type="number" placeholder="Rate per hour" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Vehicle Description</label>
              <Textarea placeholder="Describe your vehicle and available features" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Upload Vehicle Images</label>
              <div className="border-2 border-dashed border-neutral-200 rounded-lg p-8 text-center">
                <div className="flex flex-col items-center space-y-2">
                  <ImageIcon className="h-8 w-8 text-neutral-400" />
                  <div className="text-sm text-neutral-600">
                    Drag and drop images here, or click to select files
                  </div>
                  <input type="file" multiple className="hidden" id="images" />
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => document.getElementById("images")?.click()}
                  >
                    <PlusIcon className="h-4 w-4 mr-2" />
                    Add Images
                  </Button>
                </div>
              </div>
            </div>

            <Button type="submit" className="w-full bg-neutral-800 hover:bg-neutral-700">
              Register Vehicle
            </Button>
          </form>
        </Card>
      </div>
    </motion.div>
  );
};

export default TaxiManagement;