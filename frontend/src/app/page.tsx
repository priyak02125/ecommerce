import Hero from '../components/home/Hero';
import LatestCollection from '../components/LatestCollection';
import BestSeller from '../components/BestSeller';
import OurPolicy from '../components/OurPolicy';
import NewletterBox from '../components/NewletterBox';
export default function Home() {
  return (
    <>
       <div>
       <Hero/>
       <LatestCollection/>
       <BestSeller/>
       <OurPolicy/>
       <NewletterBox/>
       </div>
    </>
  );
}