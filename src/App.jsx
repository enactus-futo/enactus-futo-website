import React from 'react'

import { BrowserRouter } from "react-router-dom";
import { Routes } from "./routers";
import { HelmetProvider } from "react-helmet-async";
import ErrorBoundary from "./component/ErrorBoundary";

const App = () => {
  return (
    <>
      <ErrorBoundary>
        <HelmetProvider>
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </HelmetProvider>
      </ErrorBoundary>
    </>
  )
}

export default App

