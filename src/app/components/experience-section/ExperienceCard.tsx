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
    <div className='flex flex-col gap-4 justify-between items-stretch'>
      <div>
        <div className='flex gap-4 items-center'>
          <Image src={logo} alt='Company Logo' height={50} />
          <div>
            <h3>{title}</h3>
            <p>{period}</p>
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-2'>
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
