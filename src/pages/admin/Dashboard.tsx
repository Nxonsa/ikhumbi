import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { 
  AlertTriangleIcon, 
  StarIcon, 
  CarIcon, 
  UsersIcon,
  MessageSquareIcon,
} from "lucide-react";

const AdminDashboard = () => {
  // This would be fetched from your backend
  const reportedDrivers = [
    { id: 1, name: "John Doe", reports: 2, status: "Under Review" },
    { id: 2, name: "Jane Smith", reports: 1, status: "Resolved" },
  ];

  // Mock data for owner reports
  const ownerReports = [
    { 
      id: 1, 
      ownerName: "Mike Johnson",
      message: "Payment system was down yesterday",
      date: "2024-02-21",
      status: "New" 
    },
    { 
      id: 2, 
      ownerName: "Sarah Williams",
      message: "Need assistance with subscription renewal",
      date: "2024-02-20",
      status: "In Progress" 
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-b from-neutral-50 to-neutral-100 p-6"
    >
      <div className="max-w-7xl mx-auto space-y-6">
        <h1 className="text-4xl font-bold text-neutral-800">Admin Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="p-4 bg-white shadow-sm">
            <div className="flex items-center space-x-2">
              <CarIcon className="h-5 w-5 text-neutral-600" />
              <div>
                <p className="text-sm text-neutral-600">Active Taxis</p>
                <p className="text-2xl font-bold">24</p>
              </div>
            </div>
          </Card>
          
          <Card className="p-4 bg-white shadow-sm">
            <div className="flex items-center space-x-2">
              <UsersIcon className="h-5 w-5 text-neutral-600" />
              <div>
                <p className="text-sm text-neutral-600">Active Users</p>
                <p className="text-2xl font-bold">156</p>
              </div>
            </div>
          </Card>
          
          <Card className="p-4 bg-white shadow-sm">
            <div className="flex items-center space-x-2">
              <AlertTriangleIcon className="h-5 w-5 text-red-500" />
              <div>
                <p className="text-sm text-neutral-600">Reports</p>
                <p className="text-2xl font-bold">3</p>
              </div>
            </div>
          </Card>
          
          <Card className="p-4 bg-white shadow-sm">
            <div className="flex items-center space-x-2">
              <StarIcon className="h-5 w-5 text-yellow-500" />
              <div>
                <p className="text-sm text-neutral-600">Avg Rating</p>
                <p className="text-2xl font-bold">4.5</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Owner Reports Section */}
        <Card className="p-6 bg-white shadow-sm">
          <div className="flex items-center space-x-2 mb-4">
            <MessageSquareIcon className="h-5 w-5 text-blue-500" />
            <h2 className="text-2xl font-semibold">Owner Reports</h2>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Owner</TableHead>
                <TableHead>Message</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {ownerReports.map((report) => (
                <TableRow key={report.id}>
                  <TableCell className="font-medium">{report.ownerName}</TableCell>
                  <TableCell>{report.message}</TableCell>
                  <TableCell>{report.date}</TableCell>
                  <TableCell>
                    <Badge 
                      variant={
                        report.status === "New" 
                          ? "destructive" 
                          : report.status === "In Progress" 
                          ? "default" 
                          : "secondary"
                      }
                    >
                      {report.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <button className="text-sm text-blue-600 hover:underline">
                      Review
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>

        {/* Reported Drivers Section */}
        <Card className="p-6 bg-white shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Reported Drivers</h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Driver</TableHead>
                <TableHead>Reports</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {reportedDrivers.map((driver) => (
                <TableRow key={driver.id}>
                  <TableCell>{driver.name}</TableCell>
                  <TableCell>{driver.reports}</TableCell>
                  <TableCell>
                    <Badge 
                      variant={driver.status === "Resolved" ? "secondary" : "destructive"}
                    >
                      {driver.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <button className="text-sm text-blue-600 hover:underline">
                      Review
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </div>
    </motion.div>
  );
};

export default AdminDashboard;