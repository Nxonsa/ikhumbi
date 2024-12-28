import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CalendarIcon, ClockIcon, MapPinIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const bookingSchema = z.object({
  eventType: z.string().min(1, "Event type is required"),
  date: z.string().min(1, "Date is required"),
  time: z.string().min(1, "Time is required"),
  pickupLocation: z.string().min(1, "Pickup location is required"),
  additionalDetails: z.string().optional(),
});

type BookingFormValues = z.infer<typeof bookingSchema>;

const PrivateBooking = () => {
  const { toast } = useToast();
  const form = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      eventType: "",
      date: "",
      time: "",
      pickupLocation: "",
      additionalDetails: "",
    },
  });

  const onSubmit = async (data: BookingFormValues) => {
    console.log("Form submitted with data:", data);
    try {
      // Here you would typically make an API call to save the booking
      // For now, we'll simulate a successful booking
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
      
      toast({
        title: "Booking Submitted!",
        description: "We'll contact you shortly to confirm your booking.",
      });
      
      form.reset();
    } catch (error) {
      console.error("Booking submission error:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "There was a problem submitting your booking. Please try again.",
      });
    }
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
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="eventType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Event Type</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Wedding, Corporate Event" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Date</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input type="date" className="pl-10" {...field} />
                        <CalendarIcon className="absolute left-3 top-2.5 h-5 w-5 text-neutral-500" />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="time"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Time</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input type="time" className="pl-10" {...field} />
                        <ClockIcon className="absolute left-3 top-2.5 h-5 w-5 text-neutral-500" />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="pickupLocation"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Pickup Location</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input placeholder="Enter pickup address" className="pl-10" {...field} />
                        <MapPinIcon className="absolute left-3 top-2.5 h-5 w-5 text-neutral-500" />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="additionalDetails"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Additional Details</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Any special requirements or notes" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button 
                type="submit" 
                className="w-full bg-neutral-800 hover:bg-neutral-700"
                disabled={form.formState.isSubmitting}
              >
                {form.formState.isSubmitting ? "Submitting..." : "Request Booking"}
              </Button>
            </form>
          </Form>
        </Card>
      </div>
    </motion.div>
  );
};

export default PrivateBooking;