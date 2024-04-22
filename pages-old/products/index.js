import Head from "next/head";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import PopupWidget from "../../components/popupWidget";

import { products } from "../../components/productsData";
import {categories} from "../../components/categoriesData";
import Container from "../../components/container";
import { useState } from "react";

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

      <ProductsList />

      {/* <Cta /> */}
      <Footer />
      <PopupWidget />
    </>
  );
}

const ProductCard = (props) => {
  return (
    <div className="w-82 shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
      <a href={`/products/${props.name}`} className="flex flex-col items-center justify-center h-60">
        <img className="" src={props.icon} alt="" />
      </a>
      <div className="p-5 flex flex-col items-center justify-center h-40">
        <a href={`/products/${props.name}`}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {props.name} 
            &nbsp;
            <span>&#8594;</span>
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {props.desc}
        </p>
      </div>
    </div>
  );
};
const ProductsList = () => {
  const [filterString, setFilterString] = useState("");

  return (
    <Container className="flex flex-col">
      <Container className="flex flex-col gap-3">
        
        <span className="text-4xl font-bold">
            Explore Our Diverse Categories
        </span>
        <span className="text">
        At Jaywin, we pride ourselves on being a hub of international commerce. Our categories page is designed to seamlessly guide you through our extensive range of products and services, ensuring you find exactly what you're looking for in the vast world of import and export.
        </span>

      </Container>
      <Container className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
        {categories
          .sort((a, b) => {
            return a.name.localeCompare(b.name);
          })
          .map((product) => (
            <ProductCard
              name={product.name}
              desc={product.desc}
              icon={product.icon}
            />
          ))}
      </Container>
    </Container>
  );
};
