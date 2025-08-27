
import type { Post } from '@/lib/types';
import postsData from '@/data/posts.json';
import headerData from '@/data/header.json';
import heroSliderData from '@/data/heroSlider.json';
import homePageData from '@/data/homePage.json';
import scheduleData from '@/data/schedule.json';
import teamData from '@/data/team.json';
import galleryData from '@/data/gallery.json';
import radioData from '@/data/radio.json';
import footerData from '@/data/footer.json';

const posts: Post[] = postsData as Post[];

export const getHeaderData = () => headerData;
export const getHeroSliderData = () => heroSliderData;
export const getHomePageData = () => homePageData;
export const getScheduleData = () => scheduleData;
export const getTeamData = () => teamData;
export const getGalleryData = () => galleryData;
export const getRadioData = () => radioData;
export const getFooterData = () => footerData;

export const getPosts = (): Post[] => {
    return posts;
};

export const getPostBySlug = (slug: string): Post | undefined => {
  return posts.find((post) => post.slug === slug);
};

export const getTags = (): string[] => {
  const allTags = posts.flatMap(post => post.tags);
  return [...new Set(allTags)];
}
