import { useDispatch } from "react-redux";
import "./App.css";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { fetchAllCategory } from "./pages/category/catAction";
import { fetchAllProduct } from "./pages/product/productAction";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllCategory());
    dispatch(fetchAllProduct());
  }, [dispatch]);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
