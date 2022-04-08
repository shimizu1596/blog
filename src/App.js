import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Header from './components/Header';
import Index from './components/Index';
import NotFound from './components/NotFound';
import Number from './components/Number';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Index />} />
        <Route path="about" element={<About />} />
        <Route path="number">
          <Route path=":Id" element={<Number />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
