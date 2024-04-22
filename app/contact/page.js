"use client";
import Head from "next/head";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import PopupWidget from "../../components/popupWidget";
import React, { useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { Disclosure, Transition } from "@headlessui/react";
import Container from "../../components/container";

//import dynamic from "next/dynamic";

// const Video = dynamic(() => import("../components/video"));

// const Benefits = dynamic(() => import("../components/benefits"));
// const Footer = dynamic(() => import("../components/footer"));
// const Testimonials = dynamic(() => import("../components/testimonials"));
// const Cta = dynamic(() => import("../components/cta"));
// const Faq = dynamic(() => import("../components/faq"));

// const PopupWidget = dynamic(() => import("../components/popupWidget"));

export default function Home() {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm({
    mode: "onTouched",
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [Message, setMessage] = useState("");

  const userName = useWatch({
    control,
    name: "name",
    defaultValue: "Someone",
  });

  const onSubmit = async (data, e) => {
    console.log(data);
    await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data, null, 2),
    })
      .then(async (response) => {
        let json = await response.json();
        if (json.success) {
          setIsSuccess(true);
          setMessage(json.message);
          e.target.reset();
          reset();
        } else {
          setIsSuccess(false);
          setMessage(json.message);
        }
      })
      .catch((error) => {
        setIsSuccess(false);
        setMessage("Client Error. Please check the console.log for more info");
        console.log(error);
      });
  };

  return <>
    <Head>
      <title>Madhavudu International - Exports & Imports</title>
      <meta
        name="description"
        content="Madhavudu International is a import and export business based out of india, delivering excellence worldwide"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Navbar />
    <Container className="flex flex-row">
      <Container className="p-16">
        <div class="mb-12 w-full shrink-0 grow-0 basis-auto">
          <div class="flex items-start">
            <div class="shrink-0">
              <div class="inline-block rounded-md bg-primary-100 p-4 text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  class="h-6 w-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                  />
                </svg>
              </div>
            </div>
            <div class="ml-6 grow">
              <p class="mb-2 font-bold dark:text-white">Sales questions</p>
              <p class="text-neutral-500 dark:text-neutral-200">
                info@madhavuduinternational.com
              </p>
              <p class="text-neutral-500 dark:text-neutral-200">
                +91-9494422121
              </p>
            </div>
          </div>
        </div>
        <div class="mb-12 w-full shrink-0 grow-0 basis-auto">
          <div class="align-start flex">
            <div class="shrink-0">
              <div class="inline-block rounded-md bg-primary-100 p-4 text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  class="h-6 w-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
                  />
                </svg>
              </div>
            </div>
            <div class="ml-6 grow">
              <p class="mb-2 font-bold dark:text-white">Order Support</p>
              <p class="text-neutral-500 dark:text-neutral-200">
                suuport@madhavuduinternational.com
              </p>
              <p class="text-neutral-500 dark:text-neutral-200">
                +91 9494422121
              </p>
            </div>
          </div>
        </div>
      </Container>
      <Container className=" flex flex-col  overflow-hidden h-full w-full rounded-md">
        <div className="flex-grow h-full p-6 overflow-auto ">
          {!isSubmitSuccessful && (
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              <input
                type="hidden"
                value="YOUR_ACCESS_KEY_HERE"
                {...register("apikey")}
              />
              <input
                type="hidden"
                value={`${userName} sent a message from Nextly`}
                {...register("subject")}
              />
              <input
                type="hidden"
                value="Nextly Template"
                {...register("from_name")}
              />
              <input
                type="checkbox"
                className="hidden"
                style={{ display: "none" }}
                {...register("botcheck")}
              ></input>

              <div className="mb-4">
                <label
                  htmlFor="full_name"
                  className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="full_name"
                  placeholder="John Doe"
                  {...register("name", {
                    required: "Full name is required",
                    maxLength: 80,
                  })}
                  className={`w-full px-3 py-2 placeholder-gray-300 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring   ${
                    errors.name
                      ? "border-red-600 focus:border-red-600 ring-red-100"
                      : "border-gray-300 focus:border-green-600 ring-green-100"
                  }`}
                />
                {errors.name && (
                  <div className="mt-1 text-sm text-red-400 invalid-feedback">
                    {errors.name.message}
                  </div>
                )}
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  {...register("email", {
                    required: "Enter your email",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Please enter a valid email",
                    },
                  })}
                  placeholder="you@company.com"
                  className={`w-full px-3 py-2 placeholder-gray-300 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring   ${
                    errors.email
                      ? "border-red-600 focus:border-red-600 ring-red-100"
                      : "border-gray-300 focus:border-green-600 ring-green-100"
                  }`}
                />

                {errors.email && (
                  <div className="mt-1 text-sm text-red-400 invalid-feedback">
                    {errors.email.message}
                  </div>
                )}
              </div>

              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                >
                  Your Message
                </label>

                <textarea
                  rows="4"
                  id="message"
                  {...register("message", {
                    required: "Enter your Message",
                  })}
                  placeholder="Your Message"
                  className={`w-full px-3 py-2 placeholder-gray-300 bg-white border border-gray-300 rounded-md h-28 focus:outline-none focus:ring   ${
                    errors.message
                      ? "border-red-600 focus:border-red-600 ring-red-100"
                      : "border-gray-300 focus:border-green-600 ring-green-100"
                  }`}
                  required
                ></textarea>
                {errors.message && (
                  <div className="mt-1 text-sm text-red-400 invalid-feedback">
                    {errors.message.message}
                  </div>
                )}
              </div>
              <div className="mb-3">
                <button
                  type="submit"
                  className="w-full px-3 py-4 text-white bg-green-500 rounded-md focus:bg-green-600 focus:outline-none"
                >
                  {isSubmitting ? (
                    <svg
                      className="w-5 h-5 mx-auto text-white animate-spin"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </div>
              <p className="text-xs text-center text-gray-400" id="result">
                <span>
                  Powered by{" "}
                  <a
                    href="https://Web3Forms.com"
                    className="text-gray-600"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Web3Forms
                  </a>
                </span>
              </p>
            </form>
          )}

          {isSubmitSuccessful && isSuccess && (
            <>
              <div className="flex flex-col items-center justify-center h-full text-center text-white rounded-md">
                <svg
                  width="60"
                  height="60"
                  className="text-green-300"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M26.6666 50L46.6666 66.6667L73.3333 33.3333M50 96.6667C43.8716 96.6667 37.8033 95.4596 32.1414 93.1144C26.4796 90.7692 21.3351 87.3317 17.0017 82.9983C12.6683 78.6649 9.23082 73.5204 6.8856 67.8586C4.54038 62.1967 3.33331 56.1283 3.33331 50C3.33331 43.8716 4.54038 37.8033 6.8856 32.1414C9.23082 26.4796 12.6683 21.3351 17.0017 17.0017C21.3351 12.6683 26.4796 9.23084 32.1414 6.88562C37.8033 4.5404 43.8716 3.33333 50 3.33333C62.3767 3.33333 74.2466 8.24998 82.9983 17.0017C91.75 25.7534 96.6666 37.6232 96.6666 50C96.6666 62.3768 91.75 74.2466 82.9983 82.9983C74.2466 91.75 62.3767 96.6667 50 96.6667Z"
                    stroke="currentColor"
                    strokeWidth="3"
                  />
                </svg>
                <h3 className="py-5 text-xl text-green-500">
                  Message sent successfully
                </h3>
                <p className="text-gray-700 md:px-3">{Message}</p>
                <button
                  className="mt-6 text-green-600 focus:outline-none"
                  onClick={() => reset()}
                >
                  Go back
                </button>
              </div>
            </>
          )}

          {isSubmitSuccessful && !isSuccess && (
            <div className="flex flex-col items-center justify-center h-full text-center text-white rounded-md">
              <svg
                width="60"
                height="60"
                viewBox="0 0 97 97"
                className="text-red-400"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M27.9995 69C43.6205 53.379 52.3786 44.621 67.9995 29M26.8077 29L67.9995 69M48.2189 95C42.0906 95 36.0222 93.7929 30.3604 91.4477C24.6985 89.1025 19.554 85.6651 15.2206 81.3316C10.8872 76.9982 7.44975 71.8538 5.10454 66.1919C2.75932 60.53 1.55225 54.4617 1.55225 48.3333C1.55225 42.205 2.75932 36.1366 5.10454 30.4748C7.44975 24.8129 10.8872 19.6684 15.2206 15.335C19.554 11.0016 24.6985 7.56418 30.3604 5.21896C36.0222 2.87374 42.0906 1.66667 48.2189 1.66667C60.5957 1.66667 72.4655 6.58333 81.2172 15.335C89.9689 24.0867 94.8856 35.9566 94.8856 48.3333C94.8856 60.7101 89.9689 72.58 81.2172 81.3316C72.4655 90.0833 60.5957 95 48.2189 95Z"
                  stroke="CurrentColor"
                  strokeWidth="3"
                />
              </svg>

              <h3 className="text-xl text-red-400 py-7">
                Oops, Something went wrong!
              </h3>
              <p className="text-gray-700 md:px-3">{Message}</p>
              <button
                className="mt-6 text-green-600 focus:outline-none"
                onClick={() => reset()}
              >
                Go back
              </button>
            </div>
          )}
        </div>
      </Container>
    </Container>

    {/* <Cta /> */}
    <Footer />
    <PopupWidget />
  </>;
}
