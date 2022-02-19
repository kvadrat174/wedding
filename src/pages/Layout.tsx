import { Link, Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

export function Layout() {
    return (
        <><Header sections={[{ title: "Home", url: "/" }, { title: "About", url: "/about" }, { title: "Dashboard", url: "/dashboard" }, { title: "Fourth", url: "/" }, { title: "Fith", url: "/" }]} title={"Wedding"} />
        <Outlet/>
        <Footer description={"Something here to give the footer a purpose!"} title={"Любовь и море"} /></>
        );
  }