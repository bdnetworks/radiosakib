import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageCircle, Phone, MapPin, Building } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="container mx-auto max-w-6xl p-4 py-8">
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-4xl font-headline">Get In Touch</CardTitle>
          <CardDescription className="text-lg">
            We'd love to hear from you. Whether it's feedback, a question, or just a hello!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
                <h3 className="text-2xl font-semibold mb-4 font-headline text-primary">Send us a Message</h3>
                <form className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" placeholder="Your Name" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="your@email.com" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="subject">Subject</Label>
                        <Input id="subject" placeholder="What is this about?" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea id="message" placeholder="Your message here..." rows={5} />
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <Button type="submit" className="w-full">
                            <Mail className="mr-2 h-4 w-4" />
                            Send Email
                        </Button>
                        <Button variant="outline" className="w-full" asChild>
                            <Link href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                                <MessageCircle className="mr-2 h-4 w-4" />
                                Chat on WhatsApp
                            </Link>
                        </Button>
                    </div>
                </form>
            </div>
             <div className="space-y-8">
                <div className="relative h-64 w-full rounded-lg overflow-hidden">
                    <Image 
                        src="https://picsum.photos/600/400"
                        alt="Contact us"
                        fill
                        className="object-cover"
                        data-ai-hint="telephone booth"
                    />
                </div>
                <div>
                    <h3 className="text-2xl font-semibold mb-4 font-headline text-primary">Contact Information</h3>
                    <div className="space-y-4 text-foreground/80">
                         <div className="flex items-start gap-4">
                            <Building className="h-6 w-6 text-primary mt-1"/>
                            <div>
                                <h4 className="font-semibold">Office Address</h4>
                                <p>123 Music Lane, Beat Street, Dhaka, Bangladesh</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <Phone className="h-6 w-6 text-primary mt-1"/>
                            <div>
                                <h4 className="font-semibold">Mobile Number</h4>
                                <p>+880 123 456 7890</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <Mail className="h-6 w-6 text-primary mt-1"/>
                            <div>
                                <h4 className="font-semibold">Email Address</h4>
                                <p>contact@radiosakib.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
