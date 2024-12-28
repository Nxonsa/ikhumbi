import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapIcon, CreditCardIcon, InfoIcon } from "lucide-react";

const PassengerHome = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <MapIcon className="h-6 w-6" />,
      title: "Find a Taxi",
      description: "View nearby taxis and get directions",
      action: () => navigate("/map"),
    },
    {
      icon: <InfoIcon className="h-6 w-6" />,
      title: "Fare Information",
      description: "Check routes and calculate fares",
      action: () => navigate("/fares"),
    },
    {
      icon: <CreditCardIcon className="h-6 w-6" />,
      title: "Donate",
      description: "Support our service",
      action: () => navigate("/donate"),
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-b from-orange-50 to-orange-100 p-4"
    >
      <div className="max-w-4xl mx-auto space-y-6">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center space-y-2"
        >
          <h1 className="text-4xl font-bold tracking-tighter">Welcome, Passenger</h1>
          <p className="text-muted-foreground">What would you like to do today?</p>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="grid gap-4 md:grid-cols-3"
        >
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              className="p-6 hover:shadow-lg transition-shadow cursor-pointer"
              onClick={feature.action}
            >
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="space-y-4"
              >
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  {feature.icon}
                </div>
                <h2 className="font-semibold text-xl">{feature.title}</h2>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            </Card>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PassengerHome;