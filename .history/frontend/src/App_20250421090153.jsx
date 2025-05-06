import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./components/ErrorBoundary"; // Your fallback UI

const Header = lazy(() => import("./components/Header"));
const Footer = lazy(() => import("./components/Footer"));
const HomeScreen = lazy(() => import("./screens/HomeScreen"));
const TicketDetail = lazy(() => import("./screens/TicketDetail"));

function App() {
  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback={<div>Loading Header...</div>}>
          <Header />
        </Suspense>
      </ErrorBoundary>

      <Routes>
        <Route
          path="/"
          element={
            <ErrorBoundary FallbackComponent={ErrorFallback}>
              <Suspense fallback={<div>Loading Home...</div>}>
                <HomeScreen />
              </Suspense>
            </ErrorBoundary>
          }
        />
        <Route
          path="/ticket/:id"
          element={
            <ErrorBoundary FallbackComponent={ErrorFallback}>
              <Suspense fallback={<div>Loading Ticket Detail...</div>}>
                <TicketDetail />
              </Suspense>
            </ErrorBoundary>
          }
        />
      </Routes>

      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback={<div>Loading Footer...</div>}>
          <Footer />
        </Suspense>
      </ErrorBoundary>
    </>
  );
}

export default App;
