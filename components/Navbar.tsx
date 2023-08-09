
import { UserButton } from "@clerk/nextjs";
import MobileSidebar from "./Mobile-sidebar";
import { getApiLimitCount } from "@/lib/user-api-limit";
import { checkSubscription } from "@/lib/subscription";

const Navbar = async() => {
  const freeTrial=await getApiLimitCount();
  const isPro=await checkSubscription();
  return (
    <div className="flex items-center p-4">
      <MobileSidebar freeTrial={freeTrial} isPro={isPro}/>
      <div className="flex justify-end w-full">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};

export default Navbar;
