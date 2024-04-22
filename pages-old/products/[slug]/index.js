'use client'
import Head from "next/head";
import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";
import PopupWidget from "../../../components/popupWidget";

import { products } from "../../../components/productsData";
import Container from "../../../components/container";
import { useState } from "react";
import { usePathname } from 'next/navigation'

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


export default function Page({ params}) {
  const pathname = usePathname()
  console.log(pathname);
  console.log(params);
  return pathname ? (
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

      <ProductsList slug={decodeURI(pathname).split('/')[2]}/>

      {/* <Cta /> */}
      <Footer />
      <PopupWidget />
    </>
  ): (<Loader/>);
}

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
  const [filterString, setFilterString] = useState("");
  const categoryName = slug;
  

  return (
    <Container className="flex flex-col">
      <Container className="flex flex-row gap-3">
        <input
          value={filterString}
          onChange={(el) => setFilterString(el.target.value)}
          type="text"
          id="large-input"
          placeholder="&#x1f50d; Search Products"
          class="block w-full p-4 text-gray-900 shadow-md border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </Container>
      <Container className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
        {products(categoryName)
          .filter((ele) =>
            ele.name.toLowerCase().includes(filterString.toLowerCase())
          )
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
