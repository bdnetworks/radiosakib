import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Music, Send } from "lucide-react";
import Image from "next/image";

export default function SongRequestPage() {
  return (
    <div className="container mx-auto max-w-5xl p-4 py-8">
      <Card>
         <CardHeader className="text-center">
          <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
            <Music className="h-10 w-10 text-primary"/>
          </div>
          <CardTitle className="text-4xl font-headline">Request a Song</CardTitle>
          <CardDescription className="text-lg">
            Got a song you want to hear? Let us know and we'll try to play it for you!
          </CardDescription>
        </CardHeader>
        <CardContent>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="relative h-full min-h-[400px] rounded-lg overflow-hidden">
                <Image 
                    src="https://picsum.photos/600/800?music"
                    alt="Song request"
                    fill
                    className="object-cover"
                    data-ai-hint="jukebox music"
                />
            </div>
            <div>
                <h3 className="text-2xl font-semibold mb-4 font-headline text-primary">Your Request Details</h3>
                <form className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="name">Your Name</Label>
                        <Input id="name" placeholder="Your Name" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="song">Song Title</Label>
                        <Input id="song" placeholder="e.g., Bohemian Rhapsody" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="artist">Artist Name</Label>
                        <Input id="artist" placeholder="e.g., Queen" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="message">Dedication / Message (Optional)</Label>
                        <Textarea id="message" placeholder="Your message here..." rows={5} />
                    </div>
                    <Button type="submit" className="w-full">
                        <Send className="mr-2 h-4 w-4" />
                        Send Request
                    </Button>
                </form>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
