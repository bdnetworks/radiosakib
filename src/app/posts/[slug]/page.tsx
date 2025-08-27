
import { getPostBySlug, getPosts } from '@/lib/data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, UserCircle, Tag } from 'lucide-react';
import Sidebar from '@/components/Sidebar';

export async function generateStaticParams() {
  const posts = getPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

interface PostPageProps {
  params: {
    slug: string;
  };
}

export default function PostPage({ params }: PostPageProps) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="container mx-auto max-w-6xl p-4">
      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
        <article className="md:col-span-2">
          <Card>
            <CardHeader>
              <div className="mb-4">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={1200}
                  height={600}
                  className="aspect-video w-full rounded-md object-cover"
                  data-ai-hint={post.imageHint}
                />
              </div>
              <CardTitle className="text-4xl font-headline leading-tight">
                {post.title}
              </CardTitle>
              <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <UserCircle className="h-4 w-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4" />
                  <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div
                className="prose max-w-none dark:prose-invert"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
              <div className="mt-8 border-t pt-4">
                 <div className="flex items-center gap-2">
                    <Tag className="h-5 w-5 text-muted-foreground" />
                    {post.tags.map(tag => (
                        <Badge key={tag} variant="secondary" className="capitalize">
                            {tag}
                        </Badge>
                    ))}
                 </div>
              </div>
            </CardContent>
          </Card>
        </article>
        <aside className="md:col-span-1">
          <Sidebar />
        </aside>
      </div>
    </div>
  );
}
