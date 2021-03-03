// IMPORT UTILITIES
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

// IMPORT STYLES
import './App.scss';

// IMPORT ROUTES
import About from './routes/About';
import Blog from './routes/Blog';
import Contact from './routes/Contact';
import Home from './routes/Home';
import NotFound from './routes/NotFound';
import Projects from './routes/Projects';

// IMPORT COMPONENTS
import Footer from './components/Footer';
import Header from './components/Header';

library.add(fas);
library.add(fab);

const App = () => {
  return (
    <main className="App">
      <BrowserRouter>
        <Header />
        <main className='website-content'>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/about'>
              <About />
            </Route>
            <Route exact path='/projects'>
              <Projects />
            </Route>
            <Route path='/projects/:slug'>
              <h1>Project Page</h1>
            </Route>
            <Route exact path='/blog'>
              <Blog />
            </Route>
            <Route path='/blog/:slug'>
              <h1>Blog Page</h1>
            </Route>
            <Route path='/project_category' exact>
              <Redirect to='/projects'/>
            </Route>
            <Route exact path='/contact'>
              <Contact />
            </Route>
            <Route>
              <NotFound />
            </Route>
          </Switch>
        </main>
      </BrowserRouter>
      <Footer />
    </main>
  );
}

export default App;
