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
import PageTitle from './components/PageTItle'
import Project from './routes/Project';
import ProjectCategory from './routes/ProjectCategory';
import Projects from './routes/Projects';
import ProjectType from './routes/ProjectType';
import Technologies from './routes/Technology';

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
              <Project />
            </Route>
            <Route exact path='/blog'>
              <Blog />
            </Route>
            <Route path='/blog/:slug'>
              <PageTitle title='Blog Post' />
            </Route>
            <Route exact path='/project_category'>
              <Redirect to='/projects'/>
            </Route>
            <Route path='/project_category/:slug'>
              <ProjectCategory />
            </Route>
            <Route exact path='/project_type'>
              <Redirect to='/projects'/>
            </Route>
            <Route path='/project_type/:slug'>
              <ProjectType />
            </Route>
            <Route path='/technology' exact>
              <Redirect to='/projects'/>
            </Route>
            <Route path='/technology/:slug'>
              <Technologies />
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
