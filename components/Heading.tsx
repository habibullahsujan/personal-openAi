import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import React from "react";
interface HeadingProps {
  title: string;
  description: string;
  icon: LucideIcon;
  iconColor?: string;
  bgColor?: string;
}
const Heading = ({
  title,
  description,
  icon: Icon,
  iconColor,
  bgColor,
}: HeadingProps) => {
  return (
    <div className="flex px-4 md:px-8 items-center gap-x-3 mb-8">
      <div className={cn('p-2 rounded-md w-fit',bgColor)}>
        <Icon className={cn("h-10 w-10", iconColor)} />
      </div>
      <div>
        <h2 className="font-bold text-2xl ">{title}</h2>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

export default Heading;
