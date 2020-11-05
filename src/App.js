import 'fontsource-roboto';
import SignUp from './components/Registration/SignUp'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
 <Router>
    <div className="App">
      <Switch>
        <Route exact path='/' render={() => <SignUp/>}/>
      </Switch>
    </div>
    </Router>
  
  );
}

export default App;
