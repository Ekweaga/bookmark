
import './App.css';
import Home from './Home';
import Navbar from './navbar';
import {BrowserRouter, Switch, Link,Route} from "react-router-dom";
import Bookmark from './bookmark';
import Index from './Authentication';

function App() {

  const token = JSON.parse(localStorage.getItem('token'))
  const user = JSON.parse(localStorage.getItem('user'))
  return (
    <div className="App">
   <BrowserRouter>
   <Switch>
     <Route path="/" exact>
       <Home/>
     </Route>
     <Route path="/bookmark" exact>
       {token?<Bookmark user={user}/>:<Index/>}
     </Route>
     <Route path="auth" exact>
      <Index/>
     </Route>

        </Switch>
   </BrowserRouter>
   
    </div>
  );
}

export default App;
