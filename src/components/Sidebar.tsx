
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Mail, Facebook, Tag, Users } from "lucide-react"
import { getTags } from "@/lib/data"
import Link from "next/link"

export default function Sidebar() {
  const tags = getTags();

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg font-headline">
            <Mail className="h-5 w-5" />
            Follow by Email
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4 text-sm text-muted-foreground">
            Get new posts delivered directly to your inbox.
          </p>
          <div className="flex w-full items-center space-x-2">
            <Input type="email" placeholder="Email" />
            <Button type="submit">Subscribe</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg font-headline">
            <Facebook className="h-5 w-5" />
            Our Facebook Page
          </CardTitle>
        </CardHeader>
        <CardContent>
          {/* A proper Facebook widget would require their SDK. This is a placeholder. */}
          <div className="flex h-32 items-center justify-center rounded-md bg-muted">
            <p className="text-sm text-muted-foreground">Facebook Page Plugin</p>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg font-headline">
            <Tag className="h-5 w-5" />
            Categories
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="capitalize hover:bg-accent cursor-pointer">
                    {tag}
                </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg font-headline">
            <Users className="h-5 w-5" />
            Total Visitors
          </CardTitle>
        </CardHeader>
        <CardContent>
            <p className="text-4xl font-bold text-foreground">1,234,567</p>
            <p className="text-sm text-muted-foreground">Pageviews since launch</p>
        </CardContent>
      </Card>
    </div>
  )
}
