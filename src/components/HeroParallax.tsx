'use client';
import {
  motion,
  MotionValue,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const HeroParallax = ({
  products,
}: {
  products: {
    title: string;
    link: string;
    thumbnail: string;
  }[];
}) => {
  const firstRow = products.slice(0, 5);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-1200, 100]),
    springConfig
  );
  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-100, 200]),
    springConfig
  );
  // Only show the text when the user has scrolled all the way down
  const textOpacity = useSpring(
    useTransform(scrollYProgress, [0.19, 0.2], [0, 1]),
    springConfig
  );

  return (
    <div
      ref={ref}
      className='py-40 overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]'
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=''
      >
        <motion.div className='flex flex-col max-w-7xl mx-auto px-4 space-y-20'>
          <motion.h2
            className='text-4xl font-bold'
            style={{ opacity: textOpacity }}
          >
            About Me
          </motion.h2>
          <motion.p className='text-lg' style={{ opacity: textOpacity }}>
            I'm a software engineer who loves building things that are
            meaningful to people's lives.
          </motion.p>
          <motion.h2
            className='text-4xl font-bold'
            style={{ opacity: textOpacity }}
          >
            Projects
          </motion.h2>
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              key={product.title}
              textOpacity={textOpacity}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className='max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full  left-0 top-0'>
      <h1 className='text-2xl md:text-7xl font-bold'>
        Hey, I'm <br />
        <span className='text-primary-500'>Gabriel Lévesque-Duval</span>
      </h1>
      <p className='max-w-2xl text-base md:text-xl mt-8 '>
        I'm a software engineer who loves building things that are meaningful to
        people's lives.
      </p>
    </div>
  );
};

export const ProductCard = ({
  product,
  showDetails,
  textOpacity,
  translateX,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
  };
  showDetails?: boolean;
  textOpacity?: MotionValue<number>;
  translateX?: MotionValue<number>;
}) => {
  return (
    <motion.div
      className='flex flex-row justify-between'
      style={{ translateX: translateX }}
    >
      <motion.div
        style={{
          opacity: textOpacity,
        }}
      >
        <h2 className='text-white'>{product.title}</h2>
      </motion.div>
      <motion.div
        whileHover={{
          y: -20,
        }}
        key={product.title}
        className='group/product h-96 w-[30rem] relative flex-shrink-0'
      >
        <Link
          href={product.link}
          className='block group-hover/product:shadow-2xl '
        >
          <Image
            src={product.thumbnail}
            height='600'
            width='600'
            className='object-cover object-left-top absolute h-full w-full inset-0'
            alt={product.title}
          />
        </Link>
        <div className='absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none'></div>
        <h2 className='absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white'>
          {product.title}
        </h2>
      </motion.div>
    </motion.div>
  );
};
