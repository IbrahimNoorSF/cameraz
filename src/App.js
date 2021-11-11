import './App.css';
import NavBar from './pages/Shared/NavBar/NavBar';
import Home from './pages/Home/Home';
import Footer from './pages/Shared/Footer/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Explore from './pages/Explore/Explore';
import Purchase from './pages/Purchase/Purchase';
import Login from './pages/Login/Login';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './pages/Shared/PrivateRoute/PrivateRoute';
import Register from './pages/Register/Register';

function App() {
  return (
    <AuthProvider>
      <Router>
        <NavBar></NavBar>
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
          <PrivateRoute path="/purchase">
            <Purchase></Purchase>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </AuthProvider>
  );
}

export default App;
