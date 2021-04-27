import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.scss';
import Layout from './components/layout/layout'

// Import Pages
import Main from './pages/main'
import Coba from './pages/coba'

function App() {
  return (
    <Router>
      <Switch>
        {/* Auth Route */}
        <Route path="/" exact component={Main}/>
        {/* Loign */}
        {/* End Auth Route */}
        
        {/* Main Route */}
        <Layout>
          <Route path="/coba" exact component={Coba}/>
          {/* Dashboard */}
        </Layout>
        {/* End Main Route */}
      </Switch>
    </Router>
  );
}

export default App;
