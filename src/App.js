// IMPORT UTILITIES
import {BrowserRouter as Router, Route} from 'react-router-dom';

// IMPORT STYLES
import './App.sass';

// IMPORT ROUTES
import Home from './routes/Home';
import About from './routes/About';
import Projects from './routes/Projects';
import Blog from './routes/Blog';
import Contact from './routes/Contact';

// IMPORT COMPONENTS
import Header from './components/Header';



const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className='website-content'>
          <Route path='/' component={Home} exact />
          <Route path='/about' component={About} exact />
          <Route path='/projects' component={Projects} exact />
          <Route path='/blog' component={Blog} exact />
          <Route path='/contact' component={Contact} exact />
        </div>
      </div>
    </Router>
  );
}

export default App;
