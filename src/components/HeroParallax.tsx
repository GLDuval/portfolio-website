'use client';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import Profile from 'public/images/profile.jpg';
import React from 'react';
import { FaGithub, FaLink } from 'react-icons/fa';

export const HeroParallax = ({
  products,
}: {
  products: {
    title: string;
    link?: string;
    github?: string;
    thumbnail: string | StaticImageData;
    description: string;
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
  // Only show the text when the user has scrolled all the way down
  const textOpacity = useSpring(
    useTransform(scrollYProgress, [0.19, 0.2], [0, 1]),
    springConfig
  );

  //Animate blue background when scrolling
  const bgTranslateY = useSpring(
    useTransform(scrollYProgress, [0.1, 0.2], [-400, 0]),
    springConfig
  );
  const bgBottomBorderRadius = useSpring(
    useTransform(scrollYProgress, [0.1, 0.2], [4000, 0]),
    springConfig
  );
  const bgScale = useSpring(
    useTransform(scrollYProgress, [0.1, 0.2], [0, 1]),
    springConfig
  );

  return (
    <div
      ref={ref}
      className='py-40 overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]'
    >
      <Header />

      <motion.div
        className='bg-primary-500 w-full pb-60'
        style={{
          translateY: bgTranslateY,
          borderRadius: bgBottomBorderRadius,
          scale: bgScale,
        }}
      >
        <motion.div
          style={{
            rotateX,
            rotateZ,
            translateY,
            opacity: textOpacity,
          }}
        >
          <motion.div className='flex flex-col max-w-6xl mx-auto px-4 gap-20 '>
            <motion.div className='flex flex-col md:flex-row gap-4 justify-between items-center'>
              <motion.div className='flex flex-col gap-4 lg:w-3/5'>
                <motion.h2 className='text-4xl font-bold text-text-50'>
                  About Me
                </motion.h2>
                <motion.p className='text-lg text-text-50'>
                  I’m a recent graduate in Software Engineering from École de
                  Technologie Supérieure in Montreal. I have a passion for
                  full-stack development and especially for all things front end
                  related. As a software engineer, I thrive on turning ideas
                  into elegant, functional solutions.
                </motion.p>
              </motion.div>
              <Image
                src={Profile}
                alt='Gabriel Lévesque-Duval'
                width={300}
                height={300}
                className='rounded-full'
              />
            </motion.div>
            <motion.h2 className='text-4xl font-bold text-text-50'>
              Recent Projects
            </motion.h2>
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
      >
        <motion.div className='max-w-6xl mx-auto px-4 pt-10 -mt-60'>
          <motion.div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 content-center'>
            {firstRow.map((product) => (
              <ProductCard product={product} key={product.title} />
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className='max-w-6xl relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0'>
      <h1 className='text-4xl md:text-7xl font-bold'>
        Hey, I'm <br />
        <span className='text-primary-500'>Gabriel Lévesque-Duval</span>
      </h1>
      <p className='max-w-2xl text-lg md:text-xl mt-8 '>
        I'm a software engineer who loves building things that are meaningful to
        people's lives.
      </p>
    </div>
  );
};

export const ProductCard = ({
  product,
}: {
  product: {
    title: string;
    link?: string;
    github?: string;
    thumbnail: string | StaticImageData;
    description: string;
  };
}) => {
  return (
    <motion.div
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className='group/product relative justify-center rounded-xl mx-auto'
      style={{
        height: 350,
        width: 350,
      }}
    >
      <div className='block group-hover/product:shadow-2xl rounded-xl'>
        <Image
          src={product.thumbnail}
          height={350}
          width={350}
          className='object-left-top absolute h-full w-full inset-0 rounded-xl'
          alt={product.title}
        />
      </div>
      <div className='absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-90 bg-black pointer-events-none rounded-xl' />
      <motion.div className='absolute w-full h-full py-4 px-4 opacity-0 group-hover/product:opacity-100'>
        <div className='flex flex-col h-full items-center justify-between gap-4'>
          <h2 className='text-text-50'>{product.title}</h2>
          <p className='text-text-50 text-center'>{product.description}</p>
          <div className='flex gap-4'>
            {product.github && (
              <a
                className='rounded-full border-2 border-primary-50 p-3'
                href={product.github}
                target='_blank'
              >
                <FaGithub className='text-text-50' />
              </a>
            )}
            {product.link && (
              <a
                className='rounded-full border-2 border-primary-50 p-3'
                href={product.link}
                target='_blank'
              >
                <FaLink className='text-text-50' />
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
