import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import Skills from './components/Skills';
import Contact from './components/Contact';
import About from './components/About';
import Projects from './components/Projects';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/about" element={<About />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    );
}

export default App;
