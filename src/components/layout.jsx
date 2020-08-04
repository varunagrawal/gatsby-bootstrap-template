import React from "react";
import { Footer } from "./footer";
import { Head } from "./head";
import { Header } from "./header";

export default ({ children }) => (
  <>
    <Head />
    <Header />
    {children}
    <Footer />
  </>
)
