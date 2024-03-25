import { motion } from 'framer-motion';
import Image from 'next/image';
import Enrich from 'public/images/enrich2.jpg';

import ArrowLink from '@/components/links/ArrowLink';
import UnderlineLink from '@/components/links/UnderlineLink';

const OtherProjectsSection = () => {
  return (
    <>
      <motion.div className='bg-primary-500 w-full pb-40 pt-20'>
        <motion.div className='flex flex-col max-w-7xl mx-auto px-4 gap-10 text-center items-center'>
          <motion.div className='flex flex-col gap-4 text-center items-center'>
            <motion.h2 className='text-4xl font-bold text-text-50'>
              Competitions & Awards
            </motion.h2>
            <motion.p className='text-lg text-text-50 lg:w-3/5'>
              For the last 3 years of university, I have been part of a rescue
              robotics student initiative called{' '}
              <UnderlineLink href='https://www.clubcapra.com' target='_blank'>
                Capra
              </UnderlineLink>
              . In July 2022, I had the chance to participate at the{' '}
              <UnderlineLink href='https://2022.robocup.org/' target='_blank'>
                Robocup 2022
              </UnderlineLink>{' '}
              where we competed against various international teams. In June
              2023, we participated in the{' '}
              <UnderlineLink
                href='https://enrich2023.european-robotics.eu/'
                target='_blank'
              >
                EnRicH 2023
              </UnderlineLink>{' '}
              competition where we won the Best in Class in Search & Rescue
              award.
            </motion.p>
            <ArrowLink
              href='https://www.linkedin.com/feed/update/urn:li:activity:7076642547237822464'
              target='_blank'
              className='text-text-50'
            >
              See our robot in action
            </ArrowLink>
          </motion.div>
          <motion.h2 className='text-4xl font-bold text-text-50 pb-5'>
            What I did
          </motion.h2>
        </motion.div>
      </motion.div>
      <motion.div className='flex flex-col md:flex-row items-center justify-center md:items-stretch max-w-7xl mx-auto px-4 -mt-40 gap-4 '>
        <div className='bg-white rounded-lg p-6 shadow-primary text-center gap-4 flex flex-col col-span-2 lg:w-1/2'>
          <div className='flex flex-col gap-2'>
            <h3 className='text-xl font-bold pb-2'>
              @ Robocup 2022 in Bangkok
            </h3>
            <p>Collaborated with a global community of talented engineers.</p>
            <p>
              Enhanced the user interface (UI) for controlling our rescue robot.
            </p>
            <p>
              Contributed to our overall performance through seamless control
              experiences.
            </p>
          </div>
          <hr />
          <div className='flex flex-col gap-2'>
            <h3 className='text-xl font-bold pb-2'>@ EnRicH 2023 in Austria</h3>
            <p>Took over as the software team lead for our 2022-2023 season.</p>
            <p>
              Streamlined UI layout for swift interactions in emergency
              scenarios.
            </p>
            <p>
              Updated our video streaming protocols to reduce latency and
              network usage.
            </p>
          </div>
        </div>
        <div className='bg-white rounded-lg md:w-1/3 lg:w-1/4'>
          <Image
            src={Enrich}
            alt='Enrich 2023 Competition'
            className='rounded-lg'
            height={500}
          />
        </div>
      </motion.div>
    </>
  );
};

export default OtherProjectsSection;
