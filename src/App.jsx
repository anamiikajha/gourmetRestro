import './App.css';
import ErrorBoundary from './Components/ErrorBoundary';
import Home from './Components/Home';

function App() {
    return <div className="App">
      <ErrorBoundary>
        <Home/>
      </ErrorBoundary>
      </div>;
}

export default App;
