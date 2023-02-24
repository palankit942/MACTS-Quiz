import './App.css';
import { Routes, Route } from "react-router-dom";
import { Navbar, Footer, NotFound } from "./components/Components.jsx";
import { Home, Category, Result, Quiz } from "./pages/Pages.jsx";

function App() {
  return (
    <div className="App flex flex-col min-h-screen">
      <div className="header">
        <Navbar />
      </div>
      <div className="main grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category" element={<Category />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/result" element={<Result />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
