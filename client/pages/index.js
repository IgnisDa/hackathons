import React from "react";
import Head from "next/head";
import Link from "next/link";
import GoogleFontsComponent from "../src/components/GoogleFonts";
import Banner from '../src/components/index/Banner.js'

export default function Home() {
  return (
    <React.Fragment>
      <GoogleFontsComponent></GoogleFontsComponent>
      <Head>
        <title>Salve</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col justify-between h-screen bg-not-quite-black">
        <main className="flex flex-col items-center justify-center flex-grow space-y-5">
          <Banner />
        </main>
        <footer className="flex items-center justify-center flex-none w-full py-3 border-t border-gray-600 bg-almost-black">
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center"
          >
            <div className="hidden text-lg font-semibold text-gray-100 sm:block">
              Powered by
            </div>
            <img src="/vercel.svg" alt="Vercel Logo" className="h-6" />
          </a>
        </footer>
      </div>
    </React.Fragment>
  );
}
