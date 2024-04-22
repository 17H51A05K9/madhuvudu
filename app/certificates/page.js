'use client'
import Head from "next/head";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import PopupWidget from "../../components/popupWidget";
import Container from "../../components/container";
import Image from "next/image";
import gst from "../../public/img/GST.jpg";
import jaywin from "../../public/img/jaywinimpexp.jpg";
import fssai from "../../public/img/FSSAI.jpg";
import spices from "../../public/img/spices.jpg";
import udyam from "../../public/img/udyam.jpg";
import tcci from "../../public/img/TCCI.jpg";
import apeda from "../../public/img/apeda.jpg";
import IEC from "../../public/img/IEC.jpg";
import { images } from "../../components/certificates";

export default function Home() {
  return (
    <>
      <Head>
        <title>Benefits</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <Container className="w-100 mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
      
        <Benefit title="Good's Service Tax" icon={gst}>
        </Benefit>
        
        <Benefit title="UDYAM Registration Certificate" icon={udyam}>
        </Benefit>
        
        <Benefit title="Certificate of Telangana Chambers of Commerce" icon={tcci}>
        </Benefit>
        <Benefit title="Importer-Exporter Code" icon={IEC}>
        </Benefit>
      </Container>
      <Footer />
      <PopupWidget />
    </>
  );
}

const Benefit = (props) => {
  return (
    <div className="w-72 shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
      <Image
        src={props.icon} className="hover:scale-125 transition duration-500 cursor-pointer"
        alt="Benefits"
        placeholder="blur"
        style={{
          maxWidth: "100%",
          height: "auto"
        }} />
      <div className="p-5 items-stretch">
        <a href="#">
          <h5 className="mb-2 text-2xl font-light italic tracking-tight text-gray-900 dark:text-white">
            {props.title}
          </h5>
        </a>
        <p className="mb-3 font-normal italic text-gray-700 dark:text-gray-400">
          {props.children}
        </p>
      </div>
    </div>
  );
};