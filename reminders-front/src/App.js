import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import TopNavigation from "./TopNavigation";
import HomePage from "./HomePage";
import ListPage from "./ListPage";
import AboutPage from "./AboutPage";
import AddReminderPage from "./AddReminderPage";

function App() {
  return (
    <>
        <Router>
            <TopNavigation />
            <Routes>
                <Route exact path="/list" element={<ListPage />} />
                <Route exact path="/add" element={<AddReminderPage />} />
                <Route exact path="/about" element={<AboutPage />} />
                <Route exact path="/" element={<HomePage />} />
            </Routes>
        </Router>
    </>

  );
}

export default App;
