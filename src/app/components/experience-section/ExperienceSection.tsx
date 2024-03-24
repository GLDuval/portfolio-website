import ExperienceCard from '@/app/components/experience-section/ExperienceCard';

const ExperienceSection = () => {
  return (
    <div className='max-w-7xl mx-auto px-4'>
      <h2>Experience</h2>
      <ExperienceCard
        title='Software Developer'
        logo={<img src='https://example.com/logo.png' alt='logo' />}
        period='2020 - 2021'
        tasks={[
          'Developed a web application',
          "Maintained the company's website",
          "Worked on the company's mobile app",
        ]}
        skills={['React', 'Node.js', 'TypeScript', 'GraphQL']}
      />
    </div>
  );
};

export default ExperienceSection;
