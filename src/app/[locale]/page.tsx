import { Lead } from "@/components/Lead";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { SliderLayout } from "@/components/SliderLayout";
import { PodcastsLayout } from "@/components/PodcastsLayout";
import { WeAreTrustedLayout } from "@/components/WeAreTrustedLayout";
import { ContactUs } from "@/components/ContactUs";
import { FormLayout } from "@/components/FormLayout";

const Home = () => {
  return (
    <>
      <Lead />
      <Services />
      <About />
      <SliderLayout />
      <PodcastsLayout />
      <WeAreTrustedLayout />
      <ContactUs />
      <FormLayout />
    </>
  );
};

export default Home;
