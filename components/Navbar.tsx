
import { UserButton } from "@clerk/nextjs";
import MobileSidebar from "./Mobile-sidebar";
import { getApiLimitCount } from "@/lib/user-api-limit";

const Navbar = async() => {
  const freeTrial=await getApiLimitCount()
  return (
    <div className="flex items-center p-4">
      <MobileSidebar freeTrial={freeTrial}/>
      <div className="flex justify-end w-full">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};

export default Navbar;
