
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Components/Home'
import Login from './Components/Login'
import SignUp from './Components/SignUp'
import ProtectRoute from './Components/ProtectRoute'
import Gallery from './Components/Gallery';

function App() {
  return (
    <BrowserRouter>
    <Switch>
        {/* <Route exact path="/">{<Home/>}</Route> */}
        <Route exact path="/login">{<Login />}</Route>
        <Route exact path="/signup/:status">{<SignUp />}</Route>
        <Route exact path="/gallery">{<Gallery />}</Route>
        <ProtectRoute exact path ="/" >{<Home/>}</ProtectRoute>
    </Switch>
    </BrowserRouter>
  
  );
}
export default App;
