import React from "react";
import SearchForm from "./components/SearchForm";
import Stories from "./components/Stories";
import Buttons from "./components/Buttons";
import { AppProvider } from "./assets/context";

import "./assets/index.css";

function HackerNews() {
  return (
    <AppProvider>
      <Index />
    </AppProvider>
  )
};

function Index() {
  return (
    <>
      <SearchForm />
      <Buttons />
      <Stories />
    </>
  )
};

export default HackerNews;
