import Head from "next/head";
import Navbar from "../components/navbar";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import PopupWidget from "../components/popupWidget";

import SectionTitle from "../components/sectionTitle";
import MissionImg from "../public/img/20943892.jpg";
import VisionImg from "../public/img/Business_team_2.jpg";
import IntegrityImg from "../public/img/Business_team_3.jpg";
import SuccessImg from "../public/img/Success.jpg";
import IdeaImg from "../public/img/idea.jpg";
import EarthImg from "../public/img/savePlanet.jpg";
import userOneImg from "../public/img/7309681.jpg";

import {
  NewspaperIcon,
  GlobeAltIcon,
  UserGroupIcon,
  FilterIcon,
  BadgeCheckIcon,
  EmojiHappyIcon,
} from "@heroicons/react/outline";
import Container from "../components/container";
import Image from "next/image";
import { Avatar } from "../components/testimonials";

//import dynamic from "next/dynamic";

// const Video = dynamic(() => import("../components/video"));

// const Benefits = dynamic(() => import("../components/benefits"));
// const Footer = dynamic(() => import("../components/footer"));
// const Testimonials = dynamic(() => import("../components/testimonials"));
// const Cta = dynamic(() => import("../components/cta"));
// const Faq = dynamic(() => import("../components/faq"));

// const PopupWidget = dynamic(() => import("../components/popupWidget"));

const benefitOne = {
  title: "Mission",
  desc: " At Jaywin, our mission is to connect farmers in India with global markets, ensuring fair prices and support for their products.",
  image: MissionImg,
  bullets: [
    {
      title: "Be trusted partner",
      desc: "We strive to be a trusted partner for importers and exporters, providing efficient and reliable courier services for pulses, grains, fruits, and textiles.",
      icon: <GlobeAltIcon />,
    },
    {
      title: "Provide efficient and reliable courier services",
      desc: "Our commitment to excellence and sustainability drives us to continuously improve and contribute to the growth of agricultural communities and international trade",
      icon: <NewspaperIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Vision",
  desc: "We envision to be the leading and most trusted exporter of high-quality Indian products to the world",
  image: VisionImg,
  bullets: [
    {
      title: "Expand into new markets",
      desc: "We plan to expand into new markets in Europe, North America, and Asia. We believe that there is a growing demand for high-quality Indian products in these markets, and we want to be a part of this growth.",
      icon: <GlobeAltIcon />,
    },
    {
      title: "Become a leader in the export industry",
      desc: "We plan to become a leader in the export industry. We want to be known for our high-quality products, our excellent customer service, and our commitment to innovation.",
      icon: <NewspaperIcon />,
    },
  ],
};

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

      <div className="grid gap-10 lg:grid-cols-1 xl:grid-cols-1">
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              <h6 className="font-bold">The CEO's Vision</h6>
              <br />
              <i>
                "I believe that Jaywin has a bright future. We are committed to
                providing our customers with the best possible products and
                services, and we are confident that we can continue to grow and
                succeed."
              </i>
            </p>

            <Avatar
              image={userOneImg}
              name="Kashi viswanath"
              title="CEO Jaywin"
            />
          </div>
        </div>
      </div>

      <Benefits data={benefitOne}></Benefits>
      <Benefits data={benefitTwo} imgPos="right"></Benefits>
      <Container className="flex items-center">
        <h5 className="mb-2 content-center self-center text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
          Our Values
        </h5>
      </Container>

      <Container className="w-100 mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
        <Benefit title="Integrity" icon={IntegrityImg}>
          We always act with honesty and transparency in our dealings with our
          customers, suppliers, and partners.
        </Benefit>
        <Benefit title="Excellence" icon={SuccessImg}>
          We strive to provide our customers with the best possible products and
          services.
        </Benefit>
        <Benefit title="Innovotion" icon={IdeaImg}>
          We are always looking for new ways to improve our products and
          services.
        </Benefit>
        <Benefit title="Sustainability" icon={EarthImg}>
          We are committed to operating our business in a sustainable way.
        </Benefit>
      </Container>

      <Footer />
      <PopupWidget />
    </>
  );
}

const Benefit = (props) => {
  return (
    <div class="w-72 shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
      <Image
        src={props.icon}
        alt="Benefits"
        placeholder="blur"
        style={{
          maxWidth: "100%",
          height: "auto"
        }} />
      <div class="p-5">
        <a href="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {props.title}
          </h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {props.children}
        </p>
      </div>
    </div>
  );
};
