import TagSuggestionClient from "@/components/TagSuggestionClient";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Save, Upload } from "lucide-react";

export default function NewPostPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold font-headline mb-8">Create New Post</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Post Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Post Title</Label>
                <Input id="title" placeholder="Enter a catchy title for your post" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="excerpt">Excerpt</Label>
                <Textarea id="excerpt" placeholder="A short summary to grab attention" rows={3} />
              </div>
               <div className="space-y-2">
                <Label htmlFor="content">Main Content</Label>
                <Textarea id="content" placeholder="Write your full blog post here. You can use HTML for formatting." rows={20} />
              </div>
            </CardContent>
          </Card>
          <Button size="lg">
            <Save className="mr-2 h-4 w-4" />
            Save Post
          </Button>
        </div>
        <div className="lg:col-span-1 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Featured Image</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="w-full aspect-video bg-muted rounded-lg flex items-center justify-center flex-col gap-2 text-muted-foreground">
                 <Upload className="h-8 w-8" />
                 <span>Click to upload</span>
              </div>
               <Input id="picture" type="file" className="mt-4" />
            </CardContent>
          </Card>
           <Card>
            <CardHeader>
              <CardTitle>AI-Powered Tag Suggestions</CardTitle>
              <CardDescription>Write your post content in the main editor. Our AI will analyze it and suggest relevant tags here.</CardDescription>
            </CardHeader>
            <CardContent>
              <TagSuggestionClient />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
