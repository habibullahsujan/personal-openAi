import { checkSubscription } from "@/lib/subscription";
import { checkApiLimit, incrementApiLimit } from "@/lib/user-api-limit";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { toast } from "react-hot-toast";
import Replicate from "replicate";

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN_KEY!,
});

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { prompt } = body;
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }
    if (!prompt) {
      return new NextResponse("Prompt are required", { status: 400 });
    }
    const freeTrial = await checkApiLimit();
    const isPro = await checkSubscription();
    if (!freeTrial) {
      return new NextResponse("Your freeTrial is ended.", { status: 403 });
    }
    const response = await replicate.run(
      "anotherjesse/zeroscope-v2-xl:9f747673945c62801b13b84701c783929c0ee784e4748ec062204894dda1a351",
      {
        input: {
          prompt,
        },
      }
    );
    if (!isPro) {
      await incrementApiLimit();
    }
    return NextResponse.json(response);
  } catch (error) {
    toast.error('Music generation error')
    return new NextResponse("Internal Error", { status: 500 });
  }
}
