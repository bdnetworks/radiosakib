import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="container mx-auto max-w-5xl p-4 py-8">
      <Card className="overflow-hidden">
        <div className="relative h-64 w-full">
            <Image 
                src="https://picsum.photos/1200/400"
                alt="Radio Station Control Room"
                fill
                className="object-cover"
                data-ai-hint="radio studio control"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6">
                <CardTitle className="text-4xl font-headline text-white">About Us</CardTitle>
            </div>
        </div>
        <CardContent className="p-6 prose prose-lg max-w-none dark:prose-invert">
          <p>
            Welcome to Radio Sakib Reborn, the modern iteration of your favorite online radio station. Our journey began with a simple mission: to share the music we love with a community of listeners around the world.
          </p>
          <p>
            This new platform is built on the latest technology to provide you with a seamless, high-quality listening experience, whether you're on your desktop or on the go. We are dedicated to curating the best playlists, producing engaging content, and connecting with our audience.
          </p>
          <p>
            Our team is a blend of experienced RJs and young, passionate music lovers who work tirelessly to keep the vibe alive. From classic hits to the latest chartbusters, we have something for everyone.
          </p>
          <p>
            Thank you for being part of our story. We're excited for what's to come!
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
