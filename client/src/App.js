import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Detail from './views/Detail';
import Main from './views/Main';
import Update from './views/Update';

function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Main/>}></Route>
          <Route path="/api/products/:id" element={<Detail/>}></Route>
          <Route path="/api/products/:id/edit" element={<Update/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
