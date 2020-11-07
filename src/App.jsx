import logo from './logo.svg';
import './App.css';
import Login from './Page/Auth/Login/Login'
import Register from './Page/Auth/Register/Register'
import ProtectedRoute from "./Component/ProtectedRoute";

import { BrowserRouter, Route, Switch } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
        <ProtectedRoute path="/" exact component={Login} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
