
'use client';

import Link from 'next/link';
import { Menu, Home, Info, Rss, Mic, Handshake, Music, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Image from 'next/image';
import AudioPlayer from './AudioPlayer';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import StickyAudioPlayer from './StickyAudioPlayer';
import { useAppContext } from './AppContext';
import { useScrollDirection } from '@/hooks/useScrollDirection';
import { getHeaderData } from '@/lib/data';
import { ThemeToggleButton } from './ThemeToggleButton';

// A helper to map icon names from JSON to actual components
const iconMap: { [key: string]: React.ElementType } = {
  Home,
  Info,
  Music,
  Mic,
  Shield,
};

export default function Header() {
  const { setIsHeaderPlayerVisible } = useAppContext();
  const [isStickyPlayerVisible, setIsStickyPlayerVisible] = useState(false);
  const scrollDirection = useScrollDirection();
  const [isAtTop, setIsAtTop] = useState(true);

  const headerData = getHeaderData();
  const { logo, navLinks, sponsorButton } = headerData;

  useEffect(() => {
    const handleScroll = () => {
      const atTop = window.scrollY < 100;
      setIsAtTop(atTop);
      
      const shouldBeSticky = !atTop;
      if (isStickyPlayerVisible !== shouldBeSticky) {
        setIsStickyPlayerVisible(shouldBeSticky);
        setIsHeaderPlayerVisible(!shouldBeSticky);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); 
    return () => window.removeEventListener('scroll', handleScroll);
  }, [setIsHeaderPlayerVisible, isStickyPlayerVisible]);

  return (
    <>
      <header
        className={cn(
          'sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-transform duration-300',
          {
            '-translate-y-full': !isAtTop && scrollDirection === 'down',
            'translate-y-0': scrollDirection === 'up' || isAtTop,
          }
        )}
      >
        <div className="container mx-auto flex h-20 max-w-6xl items-center justify-between px-4">
          {/* Logo */}
          <Link href={logo.href} className="flex items-center gap-2" prefetch={false}>
            <Image
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={30}
                className="h-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-4 md:flex">
            {navLinks.map((link) => {
              const IconComponent = iconMap[link.icon];
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className="transition-colors hover:text-primary text-foreground/80 flex items-center gap-1 text-sm font-medium"
                >
                  {IconComponent && <IconComponent className="h-4 w-4" />}
                  {link.name}
                </Link>
              );
            })}
            <div className="flex items-center gap-2">
                <AudioPlayer />
                <ThemeToggleButton />
            </div>
             <Button variant="outline" className="border-primary text-primary hover:bg-primary/10" asChild>
                <Link href={sponsorButton.href}>
                  <Handshake className="mr-2 h-4 w-4" />
                  {sponsorButton.text}
                </Link>
            </Button>
          </nav>
          
          {/* Mobile Nav Trigger */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="default" size="icon" className="rounded-full bg-primary h-10 w-10">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <div className="flex flex-col gap-4 p-4">
                <Link href={logo.href} className="mb-4" prefetch={false}>
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={150}
                      height={38}
                      className="h-auto"
                    />
                  </Link>
                  <div className="flex items-center justify-center">
                    <AudioPlayer />
                    <ThemeToggleButton />
                  </div>
                  <nav className="flex flex-col gap-2">
                    {navLinks.map((link) => {
                       const IconComponent = iconMap[link.icon];
                       return (
                        <Button key={link.name} variant="ghost" className="justify-start gap-2" asChild>
                          <Link href={link.href}>
                            {IconComponent && <IconComponent className="h-4 w-4" />}
                            {link.name}
                          </Link>
                        </Button>
                      )
                    })}
                    <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 mt-4" asChild>
                      <Link href={sponsorButton.href}>
                        <Handshake className="mr-2 h-4 w-4" />
                        {sponsorButton.text}
                      </Link>
                    </Button>
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
      <StickyAudioPlayer isVisible={isStickyPlayerVisible} />
    </>
  );
}
