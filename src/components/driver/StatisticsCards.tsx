import { Users, DollarSign, ChartBar, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";

interface StatisticsProps {
  totalPassengers: number;
  totalEarnings: number;
  totalCommission: number;
  activeBookings: number;
}

export const StatisticsCards = ({
  totalPassengers,
  totalEarnings,
  totalCommission,
  activeBookings,
}: StatisticsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <Card className="p-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-neutral-500">Total Passengers</p>
            <p className="text-2xl font-bold">{totalPassengers}</p>
          </div>
          <Users className="h-8 w-8 text-neutral-600" />
        </div>
      </Card>

      <Card className="p-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-neutral-500">Total Earnings</p>
            <p className="text-2xl font-bold">R{totalEarnings}</p>
          </div>
          <DollarSign className="h-8 w-8 text-neutral-600" />
        </div>
      </Card>

      <Card className="p-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-neutral-500">Platform Commission</p>
            <p className="text-2xl font-bold">R{totalCommission}</p>
          </div>
          <ChartBar className="h-8 w-8 text-neutral-600" />
        </div>
      </Card>

      <Card className="p-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-neutral-500">Active Bookings</p>
            <p className="text-2xl font-bold">{activeBookings}</p>
          </div>
          <Calendar className="h-8 w-8 text-neutral-600" />
        </div>
      </Card>
    </div>
  );
};