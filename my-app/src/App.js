import {Route, Routes, BrowserRouter as Router} from "react-router-dom"
import Products from "./Products"
import ProductItem from "./ProductItem"
import NotFound from "./NotFound"

function App() {
  return (
    <div>
        <Router>
          <Routes>
            <Route exact path="/" element={<Products />} />
            <Route path="/products">
              <Route exact path=":id" element={<ProductItem />} />
            </Route>
            <Route exact path="*" element={<NotFound />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
