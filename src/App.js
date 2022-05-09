
import './App.css';
import Home from './Home';
import Navbar from './navbar';
import {BrowserRouter, Switch, Link,Route} from "react-router-dom";
import Bookmark from './bookmark';

function App() {
  return (
    <div className="App">
   <BrowserRouter>
   <Switch>
     <Route path="/" exact>
       <Home/>
     </Route>
     <Route path="/bookmark">
       <Bookmark/>
     </Route>

        </Switch>
   </BrowserRouter>
   
    </div>
  );
}

export default App;
