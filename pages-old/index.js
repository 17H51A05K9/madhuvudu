import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";

//import dynamic from "next/dynamic";

// const Video = dynamic(() => import("../components/video"));

// const Benefits = dynamic(() => import("../components/benefits"));
// const Footer = dynamic(() => import("../components/footer"));
// const Testimonials = dynamic(() => import("../components/testimonials"));
// const Cta = dynamic(() => import("../components/cta"));
// const Faq = dynamic(() => import("../components/faq"));

// const PopupWidget = dynamic(() => import("../components/popupWidget"));

export default function Home() {
  return (
    <>
      <Head>
        <title>Jaywin - Exports & Imports</title>
        <meta
          name="description"
          content="Jaywin is a import and export business based out of india, delivering excellence worldwide"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <SectionTitle
        pretitle="Jaywin Benefits"
        title=" Why use us to import your goods"
      >
        We have a wide network of suppliers, we are experts in the export
        process, and we offer a personalized service. We can help you find the
        products you need at the best possible prices, navigate the complex
        regulations and paperwork involved, and ensure that your goods are
        exported safely and efficiently.
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      {/* <SectionTitle
        pretitle="Watch a video"
        title="Learn how to fullfil your needs"
      >
        This section is to highlight a promo or demo video of your product.
        Analysts says a landing page with video has 3% more conversion rate. So,
        don't forget to add one. Just like this.
      </SectionTitle> */}
      {/* <Video /> */}
      <SectionTitle
        pretitle="Testimonials"
        title="Here's what our customers said"
      ></SectionTitle>
      <Testimonials />
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        You can always feel free to contact us at info@jaywin.in or click the
        chat icon at bottom right corner.
      </SectionTitle>
      <Faq />
      <Footer />
      <PopupWidget />
    </>
  );
}
