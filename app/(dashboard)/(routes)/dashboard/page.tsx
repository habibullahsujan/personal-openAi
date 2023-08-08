"use client";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { MessageSquare,ArrowRight,ImageIcon,VideoIcon,Music,Code } from "lucide-react";
import { useRouter } from "next/navigation";

const tools = [
  {
    label: "Conversation",
    icon: MessageSquare,
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
    href: "/conversation",
  },
  {
    label: "Image Generation",
    icon: ImageIcon,
    color: "text-pink-500",
    bgColor: "bg-pink-500/10",
    href: "/image",
  },
  {
    label: "Video Generation",
    icon: VideoIcon,
    color: "text-orange-700",
    bgColor: "bg-orange-500/10",
    href: "/video",
  },
  {
    label: "Music Generation",
    icon: Music,
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
    href: "/music",
  },
  {
    label: "Code Generation",
    icon: Code,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    href: "/code",
  },
];
const DashboardPage = () => {
  const router=useRouter()
  return (
    <div>
      <div className="mb-8 space-y-4">
        <h1 className="font-bold text-xl md:text-4xl text-center">
          Explore the power of AI.
        </h1>
        <p className="text-center text-muted-foreground font-light text-sm md:text-lg">
          Chat with the smartest AI - Experience the power of AI.
        </p>
      </div>
      <div className="px-4 md:px-20 lg:px-32 space-y-4">
        {tools.map((tool) => (
          <Card
          onClick={()=>router.push(tool.href)}
            key={tool.href}
            className="p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer"
          >
            <div className="flex items-center gap-x-4">
              <div className={cn("p-1 w-fit rounded-md", tool.bgColor)}>
                <tool.icon className={cn("h-6 w-6", tool.color)} />
              </div>
              <div className="font-semibold">{tool.label}</div>
            </div>
            <ArrowRight className="w-5 h-5"/>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;
