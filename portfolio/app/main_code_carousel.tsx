'use client';

import { Carousel } from 'react-responsive-carousel';
import { useParallax } from "react-scroll-parallax";
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const items = [
  {
    title: "Backend",
    img: "https://picsum.photos/800/600?random=1",
    imgAlt: "picture describing backend",
  },
  {
    title: "Frontend",
    img: "https://picsum.photos/800/600?random=2"
  },
  {
    title: "Mobile",
    img: "https://picsum.photos/800/600?random=3"
  },
  {
    title: "Full-stack",
    img: "https://picsum.photos/800/600?random=4"
  },
  {
    title: "Database",
    img: "https://picsum.photos/800/600?random=5"
  },
  {
    title: "Testing",
    img: "https://picsum.photos/800/600?random=6"
  },
]

export default function MainCodeCarousel() {
  const carousel = useParallax<HTMLDivElement>({
    scale: [0.25, 1.5, 'easeInQuad'],
    rotateX: [-45, 0],
    opacity: [0.01, 3],
  });
  const RenderItems = items.map((item, idx) => (
    <div key={idx} className="relative">
      <p className='absolute left-4 bg-[#11182744]'>{item.title}</p>
      <img className='w-full rounded-xl' src={item.img} alt={item?.imgAlt} />
    </div>
  ));
  return (
    <div className='min-w-full' ref={carousel.ref}>
      <Carousel
        className='w-full'
        infiniteLoop
        showThumbs={false}>
        {RenderItems}
      </Carousel>
    </div>
  );
}
