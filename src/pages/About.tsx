import PageTitle from '../components/common/PageTitle';
import SectionTitle from '../components/SectionTitle';
import PageLayout from '../layouts/PageLayout';

const About = () => {
  return (
    <PageLayout>
      <PageTitle title='About Us' />
      <section>
        <SectionTitle heading='About Us' subHeading='Learn More About Us' />
      </section>
    </PageLayout>
  );
};

export default About;
