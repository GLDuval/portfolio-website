import CaeLogo from 'public/images/cae-logo.png';
import ExpediaLogo from 'public/images/expedia-group-Logo.png';
import OraMedicalLogo from 'public/images/ora-medical-logo.png';

import ExperienceCard from '@/app/components/experience-section/ExperienceCard';

const ExperienceSection = () => {
  return (
    <div className='max-w-7xl mx-auto text-center px-4'>
      <div className='space-y-5'>
        <h2 className='text-4xl font-bold'>Experience</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 content-center justify-stretch'>
          <ExperienceCard
            title='Software Engineer Intern'
            logo={ExpediaLogo}
            period='4 months in 2023'
            tasks={[
              'Developed a web application',
              "Maintained the company's website",
              "Worked on the company's mobile app",
            ]}
            skills={[
              'Kotlin',
              'Spring',
              'Kubernetes',
              'React',
              'TypeScript',
              'GraphQL',
              'gRPC',
            ]}
          />
          <ExperienceCard
            title='Software Developer'
            logo={OraMedicalLogo}
            period='4 months in 2022'
            tasks={[
              'Developed a web application',
              "Maintained the company's website",
              "Worked on the company's mobile app",
            ]}
            skills={[
              'React',
              'React Native',
              'TypeScript',
              'Next.js',
              'GraphQL',
              'Apollo',
              'Realm',
            ]}
          />
          <ExperienceCard
            title='Software Developer'
            logo={CaeLogo}
            period='4 months in 2021'
            tasks={[
              'Developed a web application',
              "Maintained the company's website",
              "Worked on the company's mobile app",
            ]}
            skills={[
              'C#',
              '.NET',
              'PHP',
              'Laravel',
              'React',
              'Node.js',
              'TypeScript',
              'SQL',
            ]}
          />
          <ExperienceCard
            title='Web Developer'
            logo={CaeLogo}
            period='8 months in 2020'
            tasks={[
              'Developed a web application',
              "Maintained the company's website",
              "Worked on the company's mobile app",
            ]}
            skills={['PHP', 'JavaScript', 'SQL', 'JQuery']}
          />
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
