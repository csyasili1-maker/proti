import Navbar from '@/pages/home/components/Navbar';
import Footer from '@/pages/home/components/Footer';
import QAHero from './components/QAHero';
import QAOverview from './components/QAOverview';
import QADescription from './components/QADescription';
import QACurriculum from './components/QACurriculum';
import QADurationCapstone from './components/QADurationCapstone';
import QAJobs from './components/QAJobs';
import QASalary from './components/QASalary';
import QAWhyChoose from './components/QAWhyChoose';
import QAFaq from './components/QAFaq';
import QACTA from './components/QACTA';

export default function QATestingPage() {
  return (
    <div className="w-full min-h-screen bg-white">
      <Navbar />
      <QAHero />
      <QAOverview />
      <QADescription />
      <QACurriculum />
      <QADurationCapstone />
      <QAJobs />
      <QASalary />
      <QAWhyChoose />
      <QAFaq />
      <QACTA />
      <Footer />
    </div>
  );
}