import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Navigation2 } from "lucide-react";

const Map = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [destination, setDestination] = useState("");

  useEffect(() => {
    if (!mapContainer.current) return;

    // Initialize map
    mapboxgl.accessToken = "YOUR_MAPBOX_TOKEN"; // Replace with your token
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/light-v11",
      center: [28.0473, -26.2041], // Johannesburg coordinates
      zoom: 12,
    });

    // Add navigation controls
    map.current.addControl(
      new mapboxgl.NavigationControl(),
      "top-right"
    );

    return () => {
      map.current?.remove();
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="h-screen relative"
    >
      <div ref={mapContainer} className="absolute inset-0" />
      
      <Card className="absolute top-4 left-4 right-4 p-4 max-w-md mx-auto">
        <div className="flex space-x-2">
          <Input
            placeholder="Enter your destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="flex-1"
          />
          <Button variant="default">
            <Search className="h-4 w-4" />
          </Button>
        </div>
      </Card>

      <Button
        variant="default"
        className="absolute bottom-4 right-4"
        onClick={() => {
          // Get user's location and center map
          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
              map.current?.flyTo({
                center: [position.coords.longitude, position.coords.latitude],
                zoom: 15,
              });
            });
          }
        }}
      >
        <Navigation2 className="h-4 w-4" />
      </Button>
    </motion.div>
  );
};

export default Map;