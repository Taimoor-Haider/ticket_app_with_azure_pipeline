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
      <Suspense fallback={<h2>Loading at compoenent Level</h2>}>
        <Header />
      </Suspense>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/ticket/:id" element={<TicketDetail />} />
      </Routes>
      <Suspense fallback={<h2>Loading at compoenent Level</h2>}>
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
