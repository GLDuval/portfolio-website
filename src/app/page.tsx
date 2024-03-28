'use client';

import Head from 'next/head';
import * as React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import '@/lib/env';

import { HeroParallax } from '@/components/HeroParallax';
import ButtonLink from '@/components/links/ButtonLink';

import ExperienceSection from '@/app/components/experience-section/ExperienceSection';
import OtherProjectsSection from '@/app/components/other-projects-section/OtherProjectsSection';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

export const products = [
  {
    title: 'Moonbeam',
    link: 'https://gomoonbeam.com',
    thumbnail:
      'https://aceternity.com/images/products/thumbnails/new/moonbeam.png',
  },
  {
    title: 'Cursor',
    link: 'https://cursor.so',
    thumbnail:
      'https://aceternity.com/images/products/thumbnails/new/cursor.png',
  },
  {
    title: 'Rogue',
    link: 'https://userogue.com',
    thumbnail:
      'https://aceternity.com/images/products/thumbnails/new/rogue.png',
  },
];

export default function HomePage() {
  return (
    <main>
      <Head>
        <title>Hi</title>
      </Head>
      <section className='fle'>
        <HeroParallax products={products} />
        <ExperienceSection />
        <div className='pt-20'>
          <OtherProjectsSection />
        </div>
        <div className='flex flex-col items-center gap-4 py-20'>
          <h2 className='text-3xl font-bold'>Want to know more about me?</h2>
          <ButtonLink href='https://theodorusclarence.com?ref=tsnextstarter'>
            Download my full resume
          </ButtonLink>
        </div>

        <footer className='flex flex-col items-center bg-primary-500 pt-20 pb-5 gap-4 text-text-50'>
          <h2 className='text-3xl font-bold text-text-50'>
            Get in touch with me
          </h2>
          <div className='flex text-text-50 text-xl gap-4'>
            <div className='rounded-full border-2 border-primary-50 p-3'>
              <FaGithub />
            </div>
            <div className='rounded-full border-2 border-primary-50 p-3'>
              <FaLinkedin />
            </div>
            <div className='rounded-full border-2 border-primary-50 p-3'>
              <FaEnvelope />
            </div>
          </div>
          <div className='py-4'>
            © {new Date().getFullYear()} Built and Designed By Gabriel
            Lévesque-Duval
          </div>
        </footer>
      </section>
    </main>
  );
}
