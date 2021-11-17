import { React, Component } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

import NoteDeletePage from "./Components/NoteDeletePage";
import NoteUpdatePage from "./Components/NoteUpdatePage";
import NoteDetailsPage from "./Components/NoteDetailsPage";
import NoteListPage from "./Components/NoteListPage";
import NotFoundPage from "./Components/404";
import NoteAddPage from "./Components/NoteAddPage";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <>
                <Router>
                    <Routes>
                        <Route exact path="/:id/delete" element={<NoteDeletePage/>}/>
                        <Route exact path="/:id/update" element={<NoteUpdatePage/>}/>
                        <Route exact path="/:id" element={<NoteDetailsPage/>}/>
                        <Route exact path="/add" element={<NoteAddPage/>}/>
                        <Route exact path="/" element={<NoteListPage/>}/>
                        <Route path="*" element={<NotFoundPage/>}/>
                    </Routes>
                </Router>
            </>
        );
    }
}

export default App;
