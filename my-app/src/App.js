import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Front from './components/FrontPage/Front';
import Home from './components/HomePage/Home';
import ClassDetails from './components/ClassDetails/ClassDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<><Front/><Home/></>} />
        <Route path="/class/:classId" element={<ClassDetails/>} />
      </Routes>
    </Router>
  );
}

export default App;
