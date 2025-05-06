import React from "react";
import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
const TicketDetail = lazy(() => import("./screens/TicketDetail"));
const Footer = lazy(() => import("./components/Footer"));
const Header = lazy(() => import("./components/Header"));
const HomeScreen = lazy(() => import("./screens/HomeScreen"));

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/ticket/:id" element={<TicketDetail />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
