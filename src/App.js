import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Notes from './components/Notes';
import Create from './components/Create';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Notes />
        </Route>
        <Route exact path="/create">
          <Create />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
