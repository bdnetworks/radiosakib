'use client';

import { Play, Pause, Volume2, VolumeX, Music } from 'lucide-react';
import { useAppContext } from './AppContext';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { Slider } from './ui/slider';
import Link from 'next/link';

function MusicWave() {
    const { isPlaying } = useAppContext();
    return (
        <div className={cn("flex items-center justify-center gap-1 h-8 w-20", isPlaying && 'animate-dance')}>
            {Array(5).fill(0).map((_, i) => (
                <div
                    key={i}
                    className="wave-bar w-1.5 h-full bg-primary/80 rounded-full"
                    style={{ animationDelay: `${i * 0.2}s` }}
                />
            ))}
        </div>
    );
}

export default function StickyAudioPlayer({ isVisible }: { isVisible: boolean }) {
  const { isPlaying, setIsPlaying, volume, setVolume } = useAppContext();

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const isMuted = volume === 0;

  const toggleMute = () => {
    setVolume(isMuted ? 0.75 : 0);
  }

  return (
    <div
      className={cn(
        'fixed bottom-0 left-0 right-0 z-40 transition-transform duration-300',
        isVisible ? 'translate-y-0' : 'translate-y-full'
      )}
    >
      <div className="bg-background/80 backdrop-blur-lg border-t border-border/60">
        <div className="container mx-auto flex h-20 items-center justify-between">
          <div className="flex items-center gap-4">
            <Button
              onClick={togglePlayPause}
              size="icon"
              className="h-12 w-12 rounded-full bg-primary text-primary-foreground"
              aria-label={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? (
                <Pause className="h-6 w-6" />
              ) : (
                <Play className="h-6 w-6 fill-current" />
              )}
            </Button>
            <div>
              <p className="font-bold">Radio Sakib</p>
              <p className="text-sm text-muted-foreground">Live Stream</p>
            </div>
          </div>
          
          <div className="hidden md:flex">
             <MusicWave />
          </div>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" asChild>
                <Link href="/song-request">
                    <Music className="h-5 w-5" />
                    <span className="sr-only">Request a song</span>
                </Link>
            </Button>
             <Popover>
              <PopoverTrigger asChild>
                <Button variant="ghost" size="icon" onClick={toggleMute}>
                  {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
                   <span className="sr-only">Volume</span>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-28 p-2 mb-2">
                <Slider
                  defaultValue={[volume * 100]}
                  max={100}
                  step={1}
                  onValueChange={(value) => setVolume(value[0] / 100)}
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
    </div>
  );
}
