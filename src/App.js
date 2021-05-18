import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.scss';
import { Redirect } from 'react-router-dom'
import Layout from './components/layout/layout'
// Import Pages
// import Main from './pages/main'
import Dashboard from './pages/dashboard'
import Order from './pages/order'
import Checkout from './pages/checkout'
import Login from './pages/auth/login'
import Register from './pages/auth/Register'
import Forgot from './pages/auth/Forgot'
import ListDonasiSatu from './pages/listdonasisatu'
import ListDonasiDua from './pages/listdonasidua'
function App() {
  return (
    <Router>
      <Switch>
        {/* Auth Route */}
        <Route path="/" exact>
          <Redirect to="/dashboard" />
        </Route>
        <Route path="/login" exact component={Login}/>
        <Route path="/register" exact component={Register}/>
        <Route path="/forgot" exact component={Forgot}/>
        {/* Loign */}
        {/* End Auth Route */}
        
        {/* Main Route */}
        <Layout>
          <Route path="/dashboard" exact component={Dashboard}/>
          <Route path="/order" exact component={Order}/>
          <Route path="/checkout" exact component={Checkout}/>
          <Route path="/list-donasi" exact component={ListDonasiSatu}/>
          <Route path="/list-donasi-dua" exact component={ListDonasiDua}/>
        </Layout>
        {/* End Main Route */}
      </Switch>
    </Router>
  );
}

export default App;
