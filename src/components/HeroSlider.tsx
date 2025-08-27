
'use client';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import { Button } from './ui/button';
import { Eye } from 'lucide-react';
import Link from 'next/link';
import { getHeroSliderData } from '@/lib/data';

export default function HeroSlider() {
  const slides = getHeroSliderData();

  return (
    <section className="w-full">
      <Carousel
        className="w-full"
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
        opts={{
            loop: true,
        }}
      >
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              <div className="relative h-[80vh] min-h-[500px] md:h-[70vh]">
                <Image
                  src={slide.image}
                  alt={slide.titleLine1}
                  fill
                  className="object-cover brightness-50"
                  data-ai-hint={slide.hint}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
                  <h1 className="text-4xl md:text-6xl font-headline font-bold text-shadow-lg uppercase">
                    {slide.titleLine1}
                    <br/>
                    {slide.titleLine2}
                  </h1>
                  <p className="mt-4 text-md md:text-lg max-w-2xl text-shadow">
                    {slide.description}
                  </p>
                  <Button asChild className="mt-8 rounded-full bg-primary/80 backdrop-blur-sm border border-primary-foreground/20 px-8 py-6 text-lg hover:bg-primary" size="lg">
                    <Link href={slide.buttonLink}>
                        <Eye className="mr-2 h-5 w-5"/>
                        {slide.buttonText}
                    </Link>
                  </Button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
