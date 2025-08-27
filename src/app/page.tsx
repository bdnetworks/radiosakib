import AboutSection from '@/components/AboutSection';
import HeroSlider from '@/components/HeroSlider';
import PostCarousel from '@/components/PostCarousel';
import RadioGallery from '@/components/RadioGallery';
import RadioSchedule from '@/components/RadioSchedule';
import TeamSection from '@/components/TeamSection';

export default async function Home() {
  return (
    <>
      <HeroSlider />
      <div className="container mx-auto max-w-6xl p-4 space-y-0">
        <AboutSection />
        <RadioSchedule />
        <TeamSection />
        <RadioGallery />
        <PostCarousel />
      </div>
    </>
  );
}
