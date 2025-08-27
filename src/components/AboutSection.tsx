
import Image from 'next/image';
import { Button } from './ui/button';
import Link from 'next/link';
import { getHomePageData } from '@/lib/data';

export default function AboutSection() {
    const { aboutSection } = getHomePageData();
    return (
        <section className="py-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                    <h2 className="text-3xl font-headline font-bold text-primary mb-4">{aboutSection.title}</h2>
                    <p className="text-muted-foreground mb-4">
                        {aboutSection.description1}
                    </p>
                    <p className="text-muted-foreground mb-6">
                        {aboutSection.description2}
                    </p>
                    <Button asChild>
                        <Link href={aboutSection.button.href}>{aboutSection.button.text}</Link>
                    </Button>
                </div>
                <div className="relative h-80 rounded-lg overflow-hidden">
                    <Image 
                        src={aboutSection.image.src}
                        alt={aboutSection.image.alt}
                        fill
                        className="object-cover"
                        data-ai-hint={aboutSection.image.hint}
                    />
                </div>
            </div>
        </section>
    )
}
