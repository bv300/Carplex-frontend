import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';
import ProductsPage from './pages/ProductsPage/ProductsPage';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import PageLoader from './components/PageLoader/PageLoader';
import MarqueeBar from './components/MarqueeBar/Marqueebar';
import './App.css';

function App() {
  return (
    <Router>
      <PageLoader />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
      </Routes>
      <ScrollToTop />
      <MarqueeBar /> 
      <Footer />
    </Router>
  );
}

export default App;
