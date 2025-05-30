import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '../components/layout';
import Home from '../pages/home';
import About from '../pages/about';


export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </Router>
  );
}