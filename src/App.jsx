import React from 'react'

import { BrowserRouter } from "react-router-dom";
import { Routes } from "./routers";
import { HelmetProvider } from "react-helmet-async";

const App = () => {
  return (
    <>
      <HelmetProvider>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </HelmetProvider>
    </>
  )
}

export default App

