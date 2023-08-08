'use client'
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Sidebar from "./Sidebar";
import { useEffect, useState } from "react";

interface MobileSidebarProps{
  freeTrial:number;
}
const MobileSidebar = ({freeTrial}:MobileSidebarProps) => {
  const [isMounted,setIsMounted] =useState(false);
  useEffect(()=>{
    setIsMounted(true)
  },[])
  if(!isMounted){
    return null
  }
  return (
    <Sheet>
      <SheetTrigger>
        <Button variant={"ghost"} size={"icon"} className="md:hidden">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent className="p-0" side={'left'}>
        <Sidebar freeTrial={freeTrial}/>
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
