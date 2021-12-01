import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom"
import IndexPage from "./Components/IndexPage";
import ItemListPage from "./Components/Item/ListPage";
import AddItemPage from "./Components/Item/AddPage";
import SearchItemPage from "./Components/Item/SearchPage";
import ItemDetailPage from "./Components/Item/DetailPage";

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route exact path="/item/:id" element={ <ItemDetailPage /> } />
                    <Route exact path="/items/search" element={ <SearchItemPage /> } />
                    <Route exact path="/items/add" element={ <AddItemPage /> } />
                    <Route exact path="/items" element={ <ItemListPage /> } />
                    <Route exact path="/" element={ <IndexPage /> } />
                </Routes>
            </Router>
        </>
    );
}

export default App;
