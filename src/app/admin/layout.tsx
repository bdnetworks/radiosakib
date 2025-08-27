import Link from 'next/link';
import { Home, PlusSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

const adminNavLinks = [
    { name: 'Dashboard', href: '/admin', icon: Home },
    { name: 'New Post', href: '/admin/new-post', icon: PlusSquare },
]

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen w-full">
      <aside className="hidden w-64 flex-col border-r bg-card p-4 sm:flex">
        <div className="mb-8">
            <Link href="/admin" className="text-2xl font-bold font-headline text-foreground">
                Admin Panel
            </Link>
        </div>
        <nav className="flex flex-col gap-2">
            {adminNavLinks.map(link => (
                <Button key={link.name} variant="ghost" className="justify-start gap-2" asChild>
                    <Link href={link.href}>
                        <link.icon className="h-4 w-4"/>
                        {link.name}
                    </Link>
                </Button>
            ))}
        </nav>
      </aside>
      <div className="flex-1 bg-background p-8">
        {children}
      </div>
    </div>
  )
}
