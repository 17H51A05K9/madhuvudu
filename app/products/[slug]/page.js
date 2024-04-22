
import Head from "next/head";
import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";
import PopupWidget from "../../../components/popupWidget";

import { products } from "../../../components/productsData";
import Container from "../../../components/container";
// import { useState } from "react";
import NextImage from "next/image";
import { categories } from "../../../components/categoriesData";

const Loader = () => {
  let circleCommonClasses = 'h-2.5 w-2.5 bg-current   rounded-full';

  return (
      <div className='flex w-full h-full justify-center items-center vh-100' style={{height: '100vh'}}>
          <div className={`${circleCommonClasses} mr-1 animate-bounce`}></div>
          <div
              className={`${circleCommonClasses} mr-1 animate-bounce200`}
          ></div>
          <div className={`${circleCommonClasses} animate-bounce400`}></div>
      </div>
  );
};

export const generateStaticParams = () => {
  return categories.map((category) => {
    return {
        slug: encodeURI(category.name),
    };
  });
};

export default function Page({params}) {


  const category_decoded = decodeURI(params.slug);

  return category_decoded ? (
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

      <ProductsList slug={category_decoded}/>

      {/* <Cta /> */}
      <Footer />
      <PopupWidget />
    </>
  ): (<Loader/>);
}

const ExploreCard = ({ title, description, imgSrc, href }) => (
    <article
      className="rounded-lg shadow-lg flex flex-col justify-between align-middle dark:border-gray-800  dark:border-2"
      style={{ width: '100%' }}
    >
      <a
        href={href}
        className="flex justify-center items-center flex-grow-0"
        style={{ minHeight: '45%', margin: 'auto' }}
      >
        <NextImage
          alt={title}
          className="block h-auto"
          src={imgSrc}
          width={512}
          height={256}
          style={{ backgroundBlendMode: 'darken', maxHeight: '300px' }}
        />
      </a>
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
      </div>
      <div className="flex-grow"></div>
    </article>
  );


const ProductCard = (props) => {
  return (
    <div class="w-72 shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
      <a href="#">
        <img class="rounded-t-lg" src={props.icon} alt="" />
      </a>
      <div class="p-5">
        <a href="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {props.name}
          </h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {props.desc}
        </p>
      </div>
    </div>
  );
};
const ProductsList = ({ slug }) => {
  // const [filterString, setFilterString] = useState("");
  const categoryName = slug;
  

  return (
    <div className="flex flex-col">
      {/* <Container className="flex flex-row gap-3">
        <input
          value={filterString}
          onChange={(el) => setFilterString(el.target.value)}
          type="text"
          id="large-input"
          placeholder="&#x1f50d; Search Products"
          class="block w-full p-4 text-gray-900 shadow-md border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </Container> */}
      <Container className="w-fit mx-auto cards-grid grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
        {products(categoryName)
          // .filter((ele) =>
          //   ele.name.toLowerCase().includes(filterString.toLowerCase())
          // )
          .sort((a, b) => {
            return a.name.localeCompare(b.name);
          })
          .map((product) => (
            <ExploreCard
            key={product.name}
            title={product.name}
            description={product.desc}
            imgSrc={product.icon}
            href={"#"}
            />
          ))}
      </Container>
    </div>
  );
};
