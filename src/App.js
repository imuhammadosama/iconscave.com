import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Anron from './pages/Anron';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Anron />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  );
}
