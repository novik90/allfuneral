import React from "react";
import { Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";
import HomePage from "./Pages/HomePage";
import CompanyPage from "./Pages/CompanyPage";

import "./App.scss";
import SearchPage from "./Pages/SearchPage";
import Footer from "./components/Footer";
import SettingsPage from "./Pages/SettingsPage";
import ChatPage from "./Pages/ChatPage";
import ExitPage from "./Pages/ExitPage";

function App() {
    return (
        <>
            <div className="page__template">
                <Menu />
                <div className="page__content">
                    <Routes>
                        <Route path="/home" element={<HomePage />} />
                        <Route path="/" element={<CompanyPage />} />
                        <Route path="/search" element={<SearchPage />} />
                        <Route path="/settings" element={<SettingsPage />} />
                        <Route path="/chat" element={<ChatPage />} />
                        <Route path="/exit" element={<ExitPage />} />
                    </Routes>
                </div>
            </div>
            <div className="page__footer">
                <Footer />
            </div>
        </>
    );
}

export default App;
