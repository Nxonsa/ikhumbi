import { Car } from "lucide-react";
import { Card } from "@/components/ui/card";

interface VehicleInfoProps {
  model: string;
  registration: string;
  status: string;
}

export const VehicleInfo = ({ model, registration, status }: VehicleInfoProps) => {
  return (
    <Card className="p-6">
      <div className="flex items-center space-x-4 mb-4">
        <Car className="h-6 w-6 text-neutral-600" />
        <h2 className="text-xl font-semibold">Vehicle Information</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <p className="text-sm text-neutral-500">Model</p>
          <p className="font-medium">{model}</p>
        </div>
        <div>
          <p className="text-sm text-neutral-500">Registration</p>
          <p className="font-medium">{registration}</p>
        </div>
        <div>
          <p className="text-sm text-neutral-500">Status</p>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
            {status}
          </span>
        </div>
      </div>
    </Card>
  );
};