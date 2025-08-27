
'use client';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import { getTeamData } from '@/lib/data';

export default function TeamSection() {
    const teamMembers = getTeamData();
    return (
        <section className="py-12">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-headline font-bold text-primary">Introduce Our Team</h2>
                <div className="inline-block w-20 h-1 bg-primary mt-2 rounded-full"></div>
            </div>
            <Carousel
                opts={{
                    align: 'start',
                    loop: true,
                }}
                plugins={[
                    Autoplay({
                      delay: 3000,
                    }),
                  ]}
                className="w-full"
            >
                <CarouselContent>
                    {teamMembers.map((member, index) => (
                        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
                             <div className="p-4 text-center">
                                <div className="relative mx-auto h-60 w-60 mb-4 overflow-hidden rounded-lg">
                                    <Image 
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover"
                                        data-ai-hint={member.hint}
                                    />
                                </div>
                                <p className="font-bold text-lg">{member.name}</p>
                                <p className="text-muted-foreground">{member.role}</p>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="absolute left-[-1rem] top-1/2 -translate-y-1/2 z-10 hidden md:flex" />
                <CarouselNext className="absolute right-[-1rem] top-1/2 -translate-y-1/2 z-10 hidden md:flex" />
            </Carousel>
        </section>
    )
}
