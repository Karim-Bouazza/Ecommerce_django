import { AppSidebar } from "@/app/components/layout/sidebar/app-sidebar";
import Notifications from "@/app/components/ui/common/Notifications";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex-1">
        <div className="flex justify-between items-center pr-4 pt-2">
          <SidebarTrigger />
          <Notifications />
        </div>
        {children}
      </main>
    </SidebarProvider>
  );
}
