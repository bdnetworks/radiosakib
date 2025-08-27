import type { Post } from '@/lib/types';
import Link from 'next/link';
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, UserCircle } from 'lucide-react';
import { Badge } from './ui/badge';

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <Card className="flex h-full flex-col overflow-hidden bg-card/80 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 border-border/20 hover:border-primary/40">
      <CardHeader className="p-0">
        <Link href={`/posts/${post.slug}`} prefetch={false} className="group block overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            width={800}
            height={400}
            className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-110"
            data-ai-hint={post.imageHint}
          />
        </Link>
      </CardHeader>
      <CardContent className="flex-grow p-4">
        <div className="mb-2 flex flex-wrap gap-2">
            {post.tags.slice(0, 2).map(tag => (
                <Badge key={tag} variant="secondary" className="text-xs capitalize">
                    {tag}
                </Badge>
            ))}
        </div>
        <CardTitle className="font-headline text-lg leading-tight">
          <Link href={`/posts/${post.slug}`} className="hover:text-primary transition-colors" prefetch={false}>
            {post.title}
          </Link>
        </CardTitle>
        <div className="mt-2 flex items-center gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <UserCircle className="h-4 w-4" />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Calendar className="h-4 w-4" />
            <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button asChild variant="link" className="p-0 text-sm">
          <Link href={`/posts/${post.slug}`} prefetch={false}>
            Read More &rarr;
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
