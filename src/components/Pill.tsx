interface PillProps {
  children: React.ReactNode;
}

const Pill = ({ children }: PillProps) => (
  <div className='border-primary-500 border-2 rounded-3xl text-text-500'>
    <div className='px-2 py-1'>{children}</div>
  </div>
);

export default Pill;
