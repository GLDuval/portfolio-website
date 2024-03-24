import Pill from '@/components/Pill';

interface ExperienceCardProps {
  logo: React.ReactNode;
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
  <div className='rounded-xl border-2 border-primary-700 p-5'>
    <div className='flex flex-row space-x-3 align-middle'>
      {logo}
      <div className='flex flex-col space-y-2'>
        <div>
          <h3>{title}</h3>
          <p>{period}</p>
        </div>
        <ul className='ml-5'>
          {tasks.map((task) => (
            <li key={task} className='list-disc'>
              {task}
            </li>
          ))}
        </ul>

        <div className='flex flex-row space-x-2'>
          {skills.map((skill) => (
            <Pill key={skill}>{skill}</Pill>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default ExperienceCard;
