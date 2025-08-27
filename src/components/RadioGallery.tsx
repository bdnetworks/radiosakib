
'use client';
import Image from 'next/image';
import { getGalleryData } from '@/lib/data';

export default function RadioGallery() {
    const galleryData = getGalleryData();
    const { title, galleryImages } = galleryData;
    return (
        <section className="py-12">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-headline font-bold text-primary">{title}</h2>
                <div className="inline-block w-20 h-1 bg-primary mt-2 rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 auto-rows-[minmax(0,_250px)]">
                {galleryImages.map((image, index) => {
                    let colSpan = 'md:col-span-1';
                    let rowSpan = 'md:row-span-1';
                    if (index === 0) {
                        colSpan = 'md:col-span-2';
                        rowSpan = 'md:row-span-2';
                    } else if (index === 5) {
                        colSpan = 'md:col-span-2';
                    }

                    return (
                        <div key={index} className={`relative rounded-lg overflow-hidden group col-span-1 ${colSpan} ${rowSpan}`}>
                            <Image 
                                src={image.src}
                                alt={image.alt}
                                fill
                                className="object-cover transition-transform duration-300 group-hover:scale-110"
                                data-ai-hint={image.hint}
                                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
                            />
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors"></div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}
