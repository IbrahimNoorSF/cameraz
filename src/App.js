import './App.css';
import Home from './pages/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Explore from './pages/Explore/Explore';
import Purchase from './pages/Purchase/Purchase';
import Login from './pages/Login/Login';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './pages/Shared/PrivateRoute/PrivateRoute';
import Register from './pages/Register/Register';
import ContactUs from './pages/ContactUs/ContactUs';
import Dashboard from './pages/Dashboard/Dashboard';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/explore">
            <Explore></Explore>
          </Route>
          <PrivateRoute path="/purchase/:product">
            <Purchase></Purchase>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route path="/contact">
            <ContactUs></ContactUs>
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
