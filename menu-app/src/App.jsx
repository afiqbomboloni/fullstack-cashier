
import './App.css'
import ProductList from './ProductList';
import Admin from './Admin';
import Post from './Post';
import Edit from './Edit';
import Show from './Show';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/post" element={<Post />} />
          <Route path="/admin/edit/:id" element={<Edit />} />
          <Route path="/admin/:id" element={<Show />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App
