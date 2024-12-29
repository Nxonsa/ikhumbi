import { Link } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Card } from "@/components/ui/card";

const DevNav = () => {
  const routes = [
    { name: 'Landing', path: '/' },
    { name: 'Passenger Home', path: '/passenger' },
    { name: 'Driver Home', path: '/driver' },
    { name: 'Map', path: '/map' },
    { name: 'Admin Dashboard', path: '/admin' },
    { name: 'Driver Reviews', path: '/driver/reviews/1' },
    { name: 'Private Booking', path: '/passenger/private-booking' },
    { name: 'Taxi Management', path: '/driver/taxi-management' },
  ];

  return (
    <div className="fixed top-4 right-4 z-50">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Development Navigation</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="p-4 w-48 bg-white rounded-lg shadow-lg">
                {routes.map((route) => (
                  <Link
                    key={route.path}
                    to={route.path}
                    className="block px-4 py-2 text-sm hover:bg-gray-100 rounded"
                  >
                    {route.name}
                  </Link>
                ))}
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

const Login = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-neutral-100 flex items-center justify-center p-4">
      <DevNav />
      <Card className="w-full max-w-md p-6">
        <h1 className="text-2xl font-bold text-center mb-6">Development Mode</h1>
        <p className="text-center text-gray-500 mb-4">
          Authentication is temporarily disabled for development. Use the navigation menu in the top right to access different pages.
        </p>
        <div className="text-center text-sm text-gray-500">
          <p>Note: Remember to re-implement authentication before deployment.</p>
        </div>
      </Card>
    </div>
  );
};

export default Login;