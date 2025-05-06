import React from "react";
import { Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TicketDetail from "./screens/TicketDetail";
import { lazy } from "react";

const TicketDetail = lazy(() => import("./screens/TicketDetail"));
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
