import Image, { StaticImageData } from 'next/image';

import Pill from '@/components/Pill';

interface ExperienceCardProps {
  logo: StaticImageData;
  title: string;
  period: string;
  tasks: string[];
  skills: string[];
}

const ExperienceCard = ({
  title,
  logo,
  period,
  tasks,
  skills,
}: ExperienceCardProps) => (
  <div className='rounded-xl p-5 shadow-primary'>
    <div className='flex flex-col space-y-5 justify-center'>
      <div className='mx-auto'>
        <Image src={logo} alt='Company Logo' height={100} />
      </div>
      <div>
        <h3>{title}</h3>
        <p>{period}</p>
      </div>
      <div>
        {tasks.map((task) => (
          <p key={task}>{task}</p>
        ))}
      </div>

      <div className='flex flex-wrap gap-2 justify-center'>
        {skills.map((skill) => (
          <Pill key={skill}>{skill}</Pill>
        ))}
      </div>
    </div>
  </div>
);

export default ExperienceCard;
