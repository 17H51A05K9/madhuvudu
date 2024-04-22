import Image from "next/image";
import Container from "./container";
import heroImg from "../public/img/hero.jpg";
import Link from "next/link";

export default function Hero() {
  return <>
    <Container className="flex flex-wrap ">
      <div className="flex items-center w-full lg:w-1/2">
        <div className="max-w-2xl mb-8">
          <h1 className="text-3xl font-bold text-gray-800 md:text-4xl lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
            Indian Exporter: Empowering Farmers, Delivering Excellence
          </h1>
          <p className="py-5 text-md leading-normal text-gray-500 md:text-xl xl:text-2xl dark:text-gray-300">
            Welcome to Madhavudu International, your trusted partner for exporting and
            importing high-quality pulses, grains, and fruits from
            India, offering competitive pricing and unwavering support to our
            valued farmers.
          </p>

          <div className="flex flex-col items-start space-x-3 space-y-3 sm:space-y-0 sm:items-center sm:flex-row">
            <Link
              href="/products"
              className="px-4 py-2 text-lg font-medium text-center text-white bg-green-600 rounded-md md:px-8 md:py-4 ">
              
                Explore Products
              
            </Link>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center w-full lg:w-1/2">
        <div className="hidden lg:block">
          <Image
            src={heroImg}
            width="616"
            height="617"
            alt="Hero Illustration"
            loading="eager"
            placeholder="blur"
            style={{
              maxWidth: "100%",
              height: "auto"
            }} />
        </div>
      </div>
    </Container>
    <Container>
      <div className="flex flex-col justify-center">
        <div className="text-xl text-center text-gray-700 dark:text-white">
          A Government of India
          <span className="text-green-600"> Registered</span> Business
        </div>
      </div>
    </Container>
  </>;
}
