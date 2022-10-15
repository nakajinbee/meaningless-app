import "./bootstrap";
import React from 'react'
import ReactDOM from "react-dom/client";
import Header from "./components/header";
import SideBar from "./components/sidebar";
import Footer from "./components/footer";
import Contents from "./components/contents";

function App() {
    return (
        <>
            <Header />
            <Contents />
            <Footer />
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<App />);