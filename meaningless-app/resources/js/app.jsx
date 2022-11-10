import "./bootstrap";

import React from 'react'
import ReactDOM from "react-dom/client";
import Header from "./components/header";
import Footer from "./components/footer";
import Contents from "./components/contents";

function App() {
    return (
        <>
            <Header />
            <main>
                <Contents />
            </main>
            <Footer />
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<App />);