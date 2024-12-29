import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { supabase } from '@/integrations/supabase/client';
import { useNavigate, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

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
            <NavigationMenuTrigger>Dev Navigation</NavigationMenuTrigger>
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
  const navigate = useNavigate();
  const { session } = useAuth();
  const { toast } = useToast();

  useEffect(() => {
    if (session) {
      navigate('/');
    }
  }, [session, navigate]);

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      console.log('Auth event:', event);
      if (event === 'SIGNED_IN') {
        toast({
          title: 'Welcome back!',
          description: 'You have successfully signed in.',
        });
      } else if (event === 'USER_UPDATED') {
        toast({
          title: 'Profile updated',
          description: 'Your profile has been updated successfully.',
        });
      } else if (event === 'SIGNED_OUT') {
        toast({
          title: 'Signed out',
          description: 'You have been signed out successfully.',
        });
      }
    });

    return () => subscription.unsubscribe();
  }, [toast]);

  const handleError = (error: any) => {
    console.error('Auth error:', error);
    toast({
      variant: "destructive",
      title: "Authentication Error",
      description: error.message,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-neutral-100 flex items-center justify-center p-4">
      <DevNav />
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold text-center mb-6">Welcome Back</h1>
        <p className="text-center text-gray-500 mb-4">Development mode: Use any email with password "1234"</p>
        <Auth
          supabaseClient={supabase}
          appearance={{
            theme: ThemeSupa,
            variables: {
              default: {
                colors: {
                  brand: '#2563eb',
                  brandAccent: '#1d4ed8',
                },
              },
            },
            className: {
              container: 'w-full',
              button: 'w-full px-4 py-2 rounded-md',
              input: 'rounded-md',
            },
          }}
          theme="light"
          providers={[]}
          redirectTo={window.location.origin}
          view="sign_in"
          onError={handleError}
        />
      </div>
    </div>
  );
};

export default Login;