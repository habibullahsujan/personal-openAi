import { checkSubscription } from '@/lib/subscription';
import { checkApiLimit, incrementApiLimit } from '@/lib/user-api-limit';
import { auth } from '@clerk/nextjs';
import { NextResponse } from 'next/server';
import {Configuration,OpenAIApi} from 'openai'
import { toast } from 'react-hot-toast';

const configuration=new Configuration({
    apiKey:process.env.OPEN_AI_SECRET_KEY
})

const openai=new OpenAIApi(configuration);

export async function POST(req:Request){
    try {
        const {userId} =auth();
        const body=await req.json();
        const {prompt, amount=1, resolution='512x512'}=body;
        if(!userId){
            return new NextResponse('Unauthorized',{status:401})
        }
        if(!configuration.apiKey){
            return new NextResponse('OpenAI api key not configured',{status:500})
        }
        if(!prompt){
            return new NextResponse('Prompt are required',{status:400})
        }
        const freeTrial = await checkApiLimit();
        const isPro=await checkSubscription()
        if (!freeTrial) {
          return new NextResponse("Your freeTrial is ended.", { status: 403 });
        }
        const response=await openai.createImage({
            prompt,
            n:parseInt(amount,10),
            size:resolution
        })
        if(!isPro){
            await incrementApiLimit();
            }
        return NextResponse.json(response.data.data)
    } catch (error) {
        toast.error('Open AI Api image generation error')
        return new NextResponse('Internal Error',{status:500})
    }
}