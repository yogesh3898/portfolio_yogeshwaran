
import './App.scss';
import About from './components/about';
import Navbar from './components/navbar';
import Projects from './components/projects';
import Work from './components/work';
import Education from './components/education';
import Contact from './components/contact';
function App() {
  return (
    <>
    <Navbar></Navbar>
    <About></About>
    <Work></Work>
    <Projects></Projects>
    <Education></Education>
    <Contact></Contact>
    </>
  );
}

export default App;
