import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapIcon, MessageSquareIcon, UsersIcon } from "lucide-react";

const DriverHome = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <MapIcon className="h-6 w-6" />,
      title: "Start Route",
      description: "Begin your taxi route",
      action: () => navigate("/map"),
    },
    {
      icon: <MessageSquareIcon className="h-6 w-6" />,
      title: "Community Chat",
      description: "Connect with other drivers",
      action: () => navigate("/chat"),
    },
    {
      icon: <UsersIcon className="h-6 w-6" />,
      title: "Passenger List",
      description: "View your passengers",
      action: () => navigate("/passengers"),
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
          <h1 className="text-4xl font-bold tracking-tighter">Welcome, Driver</h1>
          <p className="text-muted-foreground">Ready to start your route?</p>
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

export default DriverHome;