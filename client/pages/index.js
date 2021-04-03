import React from "react";
import Head from "next/head";
import Link from "next/link";
import GoogleFontsComponent from "../src/components/GoogleFonts";
import Banner from '../src/components/index/Banner.js'
import Layout from "../src/components/Layout";
import Footer from "../src/components/Footer";


export default function Home() {
  return (
    <React.Fragment>
      <Layout noFooter>
      <div className="flex flex-col justify-between h-screen bg-not-quite-black">
        <main className="flex flex-col items-center justify-center flex-grow space-y-5">
          <Banner />
        </main>
      <Footer />
      </div>
    </Layout>
    </React.Fragment>
  );
}
