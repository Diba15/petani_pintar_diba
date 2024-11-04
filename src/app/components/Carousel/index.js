"use client";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import Image from "next/image";

const Carousel = () => {
    const [emblaRef] = useEmblaCarousel({loop: false, dragFree: true}, [AutoScroll()]);

    return (
        <div className="overflow-hidden" ref={emblaRef}>
            <div className="relative flex h-64">
                <div className="embla__slide">
                    <Image fill className="embla__slide" src="https://placehold.co/300x200?text=Hello+World"
                           alt="Alt"/>
                    <Image fill className="embla__slide" src="https://placehold.co/300x200/orange/white"
                           alt="Alt"/>
                    <Image fill className="embla__slide" src="https://placehold.co/300x200/red/white"
                           alt="Alt"/>
                    <Image fill className="embla__slide" src="https://placehold.co/300x200/green/white"
                           alt="Alt"/>
                </div>
            </div>
        </div>
    )
}

export default Carousel