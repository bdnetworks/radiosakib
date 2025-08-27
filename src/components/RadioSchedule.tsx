
'use client';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Image from 'next/image';
import { Card } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Waves, Mic, Music, Coffee, Moon } from 'lucide-react';
import { getScheduleData } from '@/lib/data';

const iconMap: { [key: string]: React.ElementType } = {
    Waves,
    Mic,
    Music,
    Coffee,
    Moon,
};

type Show = {
    time: string;
    day: string;
    show: string;
    hosts: string[];
    image: string;
    hint: string;
    icon?: string;
    avatars: string[];
};

export default function RadioSchedule() {
    const scheduleData: Show[] = getScheduleData();

    // Get unique days from the schedule
    const days = [...new Set(scheduleData.map(show => show.day))];

    // Helper to group shows by day
    const getShowsByDay = (day: string) => {
        return scheduleData.filter(show => show.day === day);
    }

    const renderShowCard = (show: Show, index: number) => {
        const IconComponent = show.icon ? iconMap[show.icon] : null;
        return (
            <Card key={index} className="relative aspect-[4/3.5] w-full overflow-hidden rounded-xl text-white shadow-lg transition-transform hover:scale-105 group">
                <Image
                    src={show.image}
                    alt={show.show}
                    fill
                    className="object-cover brightness-75 group-hover:brightness-60 transition-all duration-300"
                    data-ai-hint={show.hint}
                />
                <div className="absolute inset-0 flex flex-col justify-between p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-sm font-semibold">{show.time}</p>
                            <p className="text-xl font-bold font-headline">{show.show}</p>
                        </div>
                        {IconComponent && <IconComponent className="h-6 w-6 text-white/80" />}
                    </div>

                    <div className="flex items-center justify-between">
                        <p className="text-sm font-semibold">{show.hosts.join(', ')}</p>
                        <div className="flex items-center">
                            {show.avatars.map((avatar: string, i: number) => (
                                 <Avatar key={i} className={`h-10 w-10 border-2 border-primary/50 ${i > 0 ? '-ml-4' : ''}`}>
                                    <AvatarImage src={avatar} alt={show.hosts[i] || 'Host'} />
                                    <AvatarFallback>{show.hosts[i]?.charAt(0) || 'H'}</AvatarFallback>
                                </Avatar>
                            ))}
                        </div>
                    </div>
                </div>
            </Card>
        );
    }
    
    return (
        <section className="py-12">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-headline font-bold text-primary">Show Schedule</h2>
                <div className="inline-block w-20 h-1 bg-primary mt-2 rounded-full"></div>
            </div>
            
            <Tabs defaultValue={days[0]} className="w-full">
                <TabsList className="grid w-full grid-cols-3 sm:grid-cols-4 md:grid-cols-7 mb-8">
                    {days.map(day => (
                        <TabsTrigger key={day} value={day}>{day.toUpperCase()}</TabsTrigger>
                    ))}
                </TabsList>

                {days.map(day => (
                    <TabsContent key={day} value={day}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {getShowsByDay(day).map((show, index) => (
                                renderShowCard(show, index)
                            ))}
                        </div>
                    </TabsContent>
                ))}
            </Tabs>
        </section>
    );
}
