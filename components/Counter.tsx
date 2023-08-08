'use client'
import React, { useEffect, useState } from "react";
import { Progress } from "./ui/progress";
import { Card, CardContent } from "./ui/card";
import { MAX_FREE_COUNT } from "@/constants";
import { Button } from "./ui/button";
import { Zap } from "lucide-react";
import { useProModal } from "@/hooks/useProModal";

interface CounterProps {
  freeTrial: number;
  isPro:boolean
}
const Counter = ({ freeTrial = 0 , isPro=false}: CounterProps) => {
  const [mounted,setMounted]=useState(false);
  const proModal=useProModal();
  useEffect(() => {
    setMounted(true);
  }, []);
  if(!mounted){
    return null
  }
  if(isPro){
    return null
  }
  return (
    <div className="px-3">
      <Card className="bg-white/10 border-0">
        <CardContent className="py-6">
          <div className="text-center text-sm text-white mb-4 space-y-2">
            <p>
              {freeTrial} / {MAX_FREE_COUNT} Free Generation.
            </p>
            <Progress className="h-3" value={(freeTrial / MAX_FREE_COUNT) * 100} />
          </div>
          <Button onClick={proModal.onOpen} variant="premium" className="w-full">
            Upgrade
            <Zap className="w-4 h-4 ml-2 fill-white" />
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Counter;
