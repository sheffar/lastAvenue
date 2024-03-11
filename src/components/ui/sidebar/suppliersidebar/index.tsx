import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Sidebar } from '@/components/ui/sidebar/suppliersidebar/sidebar';
import { MobileNav } from 'src/components/ui/navs/mobileNav';
import { cn } from '@/utils/helpers';

export const AppLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/dashboard");
    }
  }, [location, navigate]);

  return (
    <div
      className={cn(
        "bg-theme text-themeText font-light transition-[background-color] duration-500 ease-out",
      )}
    >
      <div className="flex max-sm:min-h-screen max-sm:pb-20">
        <Sidebar />
        <Outlet />
      </div>
      <MobileNav />
    </div>
  );
};
