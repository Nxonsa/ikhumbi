import { CreditCard } from "lucide-react";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Booking {
  id: number;
  date: string;
  passenger: string;
  amount: number;
  commission: number;
  paymentMethod: string;
  type: string;
}

interface BookingsTableProps {
  bookings: Booking[];
}

export const BookingsTable = ({ bookings }: BookingsTableProps) => {
  return (
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
                <span
                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    booking.type === "Private"
                      ? "bg-purple-100 text-purple-800"
                      : "bg-blue-100 text-blue-800"
                  }`}
                >
                  {booking.type}
                </span>
              </TableCell>
              <TableCell>R{booking.amount}</TableCell>
              <TableCell>
                R{booking.commission} ({booking.type === "Private" ? "15%" : "15%"})
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
  );
};