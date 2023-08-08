import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { checkSubscription } from "@/lib/subscription";
import { getApiLimitCount } from "@/lib/user-api-limit";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const freeTrial = await getApiLimitCount();
  const isPro = await checkSubscription();
  return (
    <div className="h-full relative">
      <div className="hidden md:flex md:flex-col md:fixed h-full md:inset-y-0 bg-gray-800 md:w-72 text-white">
        <Sidebar freeTrial={freeTrial} isPro={isPro} />
      </div>
      <main className="md:pl-72">
        <Navbar />
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
