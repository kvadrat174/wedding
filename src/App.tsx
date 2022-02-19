import * as React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { About } from "./pages/About";
import { Dashboard } from "./pages/Dashboard";
import Home from "./pages/Home"
import { Layout } from "./pages/Layout";

export default function App() {
  return (

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="dashboard" element={<Dashboard />} />

        </Route>
      </Routes>

  );
}

