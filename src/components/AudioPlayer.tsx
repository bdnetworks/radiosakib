'use client';
import { getAudioSource } from '@/ai/flows/get-audio-source';
import { useEffect, useState, useRef } from 'react';
import { Play, Pause } from 'lucide-react';
import { useAppContext } from './AppContext';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';

export default function AudioPlayer({ className }: { className?: string }) {
  const [audioSrc, setAudioSrc] = useState<string | undefined>(undefined);
  const { isPlaying, setIsPlaying, isHeaderPlayerVisible, volume } = useAppContext();
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    async function fetchAudioSource() {
      try {
        const result = await getAudioSource();
        setAudioSrc(result.url);
      } catch (err) {
        console.error('Error fetching audio source:', err);
        setAudioSrc('https://stream.zeno.fm/sg1hy1wdlcavv');
      }
    }
    fetchAudioSource();
  }, []);

  useEffect(() => {
    if(typeof window !== 'undefined' && !audioRef.current) {
      audioRef.current = new Audio();
    }
  }, []);
  
  useEffect(() => {
    if (audioRef.current && audioSrc) {
      if(audioRef.current.src !== audioSrc) {
        audioRef.current.src = audioSrc;
        audioRef.current.preload = 'auto';
      }

      if (isPlaying) {
        audioRef.current.play().catch(e => console.error("Error playing audio:", e));
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, audioSrc]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  // This effect ensures that the audio element is properly cleaned up.
  useEffect(() => {
    const audio = audioRef.current;
    return () => {
      if (audio) {
        audio.pause();
      }
    }
  }, []);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className={cn("flex items-center gap-4 transition-opacity duration-300", 
      isHeaderPlayerVisible ? "opacity-100" : "opacity-0",
      className)}>
        <Button
            onClick={togglePlayPause}
            variant="ghost"
            size="icon"
            className={cn("h-14 w-14 rounded-full bg-primary/10 text-primary hover:bg-primary/20 border-2 border-primary/20", {
              'pointer-events-none': !isHeaderPlayerVisible
            })}
            aria-label={isPlaying ? 'Pause' : 'Play'}
            >
            {isPlaying ? (
                <Pause className="h-6 w-6 fill-current" />
            ) : (
                <Play className="h-6 w-6 fill-current" />
            )}
        </Button>
    </div>
  );
}
