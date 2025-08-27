
'use client';
import { getPosts } from '@/lib/data';
import PostCard from './PostCard';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

export default function PostCarousel() {
  const posts = getPosts();

  return (
    <section className="py-12">
      <h2 className="text-3xl font-headline font-bold text-primary mb-8 text-center">
        Recent Posts
      </h2>
      <Carousel
        opts={{
          align: 'start',
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {posts.map((post, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <PostCard post={post} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
    </section>
  );
}
