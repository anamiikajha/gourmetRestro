import './App.css';
import ErrorBoundary from './Components/ErrorBoundary';
import Home from './Components/Home';
import About from "./Components/About";
import Work from "./Components/Work";
import Testimonials from './Components/Testimonials';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
    return <div className="App">
      <ErrorBoundary>
        <Home/>
        <About/>
        <Work/>
        <Testimonials/>
        <Contact/>
        <Footer/>
      </ErrorBoundary>
      </div>;
}

export default App;
