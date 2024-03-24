interface PillProps {
  children: React.ReactNode;
}

const Pill = ({ children }: PillProps) => (
  <div className='border-primary-50 border-2 rounded-3xl text-primary-500 bg-primary-50 flex items-center justify-center px-2 py-1'>
    <p>{children}</p>
  </div>
);

export default Pill;
