import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import DesktopNavContainer from "./Components/Misc/DesktopNavContainerComponent";
import MobileTabletNavContainer from "./Components/Misc/MobileTabletNavContainerComponent";
import NotFoundContainer from "./Components/Misc/NotFoundContainerComponent";
import IndexContainer from "./Components/Gateway/IndexContainer";
import DashboardContainer from "./Components/Dashboard/Container";
import MusicContainer from "./Components/Music/Container";
import BookContainer from "./Components/Book/Container";


function App() {
    return (
        <>
            <Router>
                <div className="w3-hide-medium w3-hide-small">
                    <DesktopNavContainer />
                </div>
                <Routes>
                    <Route exact path="/books" element={<BookContainer />} />
                    <Route exact path="/music" element={<MusicContainer />} />
                    <Route exact path="/Dashboard" element={<DashboardContainer />} />
                    <Route exact path="/" element={<IndexContainer />} />
                    <Route exact path="*" element={<NotFoundContainer />} />
                </Routes>
                <div className="w3-hide-large">
                    <MobileTabletNavContainer />
                </div>
            </Router>
        </>
    );
}

export default App;
