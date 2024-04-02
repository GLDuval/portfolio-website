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
    title: 'Capra UI',
    thumbnail:
      'https://aceternity.com/images/products/thumbnails/new/moonbeam.png',
    description:
      'This application allows the teleoperation of rescue robots by seamlessly integrating real-time sensor information and live video feeds. This user interface was built with React, Electron, Redux and Roslibjs to retrieve information from remote robots.',
    github: 'https://github.com/clubcapra/capra_web_ui',
  },
  {
    title: 'RamsAI',
    thumbnail:
      'https://aceternity.com/images/products/thumbnails/new/cursor.png',
    description:
      'A React Native mobile app, powered by Firebase and the GPT API that scrapes local supermarkets for weekly on-sale ingredients. It then crafts personalized recipes for users on a weekly basis using GPT language models',
    github: 'https://github.com/GLDuval/LOG450-APP-EQUIPE03',
  },
  {
    title: 'Club Capra Website',
    link: 'https://www.clubcapra.com/',
    thumbnail:
      'https://aceternity.com/images/products/thumbnails/new/rogue.png',
    description:
      'This website was designed and deployed by me for the student initivative Capra. The website is used as a promotional tool to recruit new members or show potential sponsors what our student club does.',
    github: 'https://github.com/clubcapra/clubcapra.github.io',
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
        <div className='flex flex-col items-center gap-4 py-20 px-4 text-center'>
          <h2 className='text-3xl font-bold'>Want to know more about me?</h2>
          <ButtonLink href='https://theodorusclarence.com?ref=tsnextstarter'>
            Download my full resume
          </ButtonLink>
        </div>

        <footer className='flex flex-col items-center bg-primary-500 pt-20 pb-5 gap-4 text-text-50 px-4 text-center'>
          <h2 className='text-3xl font-bold text-text-50'>
            Get in touch with me
          </h2>
          <div className='flex text-text-50 text-xl gap-4'>
            <a
              className='rounded-full border-2 border-primary-50 p-3'
              href='https://github.com/GLDuval'
              target='_blank'
            >
              <FaGithub />
            </a>
            <a
              className='rounded-full border-2 border-primary-50 p-3'
              href='https://www.linkedin.com/in/gabriel-levesque-duval-80a78b15a/'
              target='_blank'
            >
              <FaLinkedin />
            </a>
            <a
              className='rounded-full border-2 border-primary-50 p-3'
              href='mailto:glevesqueduval@gmail.com'
              target='_blank'
            >
              <FaEnvelope />
            </a>
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
