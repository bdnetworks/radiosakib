
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getPosts } from "@/lib/data";
import { PlusSquare, FileText, Trash2, Pencil } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AdminPage() {
  const posts = getPosts();

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold font-headline">Admin Dashboard</h1>
        <Button asChild>
          <Link href="/admin/new-post">
            <PlusSquare className="mr-2 h-4 w-4" />
            Create New Post
          </Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Manage Posts</CardTitle>
          <CardDescription>Here you can view, edit, and delete your blog posts.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {posts.length > 0 ? (
              posts.map(post => (
                <div key={post.slug} className="flex items-center justify-between p-3 rounded-lg border bg-card-foreground/5">
                  <div className="flex items-center gap-4">
                    <Image src={post.image} alt={post.title} width={80} height={45} className="rounded-md object-cover aspect-video" />
                    <div>
                      <h3 className="font-semibold">{post.title}</h3>
                      <p className="text-sm text-muted-foreground">Published on: {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                     <Button variant="outline" size="sm" asChild>
                        <Link href={`/posts/${post.slug}`} target="_blank">
                          <FileText className="mr-2 h-4 w-4" /> View
                        </Link>
                    </Button>
                     <Button variant="outline" size="sm">
                        <Pencil className="mr-2 h-4 w-4" /> Edit
                    </Button>
                    <Button variant="destructive" size="sm">
                      <Trash2 className="mr-2 h-4 w-4" /> Delete
                    </Button>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-12">
                <FileText className="mx-auto h-12 w-12 text-muted-foreground" />
                <h3 className="mt-4 text-lg font-semibold">No posts yet</h3>
                <p className="mt-1 text-sm text-muted-foreground">Click "Create New Post" to get started.</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
