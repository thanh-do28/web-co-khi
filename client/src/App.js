
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePages from './pages/homePages/HomePages';
import Header from './components/header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePages />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
