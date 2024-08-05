interface Props {
  heading: string;
  subHeading: string;
}

const SectionTitle = ({ heading, subHeading }: Props) => {
  return (
    <>
      <h2 className='text-4xl from-neutral-900 text-center py-3'>{heading}</h2>
      {subHeading !== '' && (
        <p className='text-base text-zinc-700 text-center'>{subHeading}</p>
      )}
    </>
  );
};

export default SectionTitle;
