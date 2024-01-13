import { Lead } from "@/components/Lead";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { SliderLayout } from "@/components/SliderLayout";
import { PodcastsLayout } from "@/components/PodcastsLayout";

const Home = () => {
  return (
    <>
      <Lead />
      <Services />
      <About />
      <SliderLayout />
      <PodcastsLayout />
    </>
  );
};

export default Home;
