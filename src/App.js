import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Navbar from './Components/Navbar';
import DocumentList from "./Components/DocumentList.jsx";
import SingleDocument from './Components/SingleDocument';
import AddRevision from './Components/AddRevision';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<DocumentList />} />
        <Route path="/pages/:id" element={<SingleDocument />} />
        <Route path="/pages/:id/add-revision" element={<AddRevision />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;