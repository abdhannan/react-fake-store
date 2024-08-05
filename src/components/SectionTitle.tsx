interface Props {
  heading: string;
  subHeading: string;
}

const SectionTitle = ({ heading, subHeading }: Props) => {
  return (
    <div className='py-8'>
      <h2 className='text-4xl from-neutral-900 text-center'>{heading}</h2>
      {subHeading !== '' && (
        <p className='text-base text-zinc-700 text-center'>{subHeading}</p>
      )}
    </div>
  );
};

export default SectionTitle;
