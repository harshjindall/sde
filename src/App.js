import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProfileSection from './MyComponents/ProfileSection';
import BackgroundAnimation from './MyComponents/BackgroundAnimation';
import Navbar from './MyComponents/Navbar';
import ExperiencePage from './MyComponents/ExperiencePage';
import BuildsPage from './MyComponents/BuildsPage';
import ContactPage from './MyComponents/ContactPage';
import FloatingSocialIcons from './MyComponents/FloatingSocialIcons';
import './MyComponents/styles/Main.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProfileSection />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/builds" element={<BuildsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
