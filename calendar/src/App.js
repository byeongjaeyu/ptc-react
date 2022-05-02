import logo from './logo.svg';
import './App.css';
import {Switch,Route} from 'react-router-dom'
import Start from './pages/Start';
import Reservation from './pages/Reservation';
import Reservation2 from './pages/Reservation2';
import Confirm from './pages/Confirm';
import Complete from './pages/Complete';
import Nav from './components/Nav'
import Reservation21 from './pages2/Reservation'
import Reservation22 from './pages2/Reservation2'
import Reservation23 from './pages2/Reservation2-1'
import Confirm2 from './pages2/Confirm';
import Complete2 from './pages2/Complete';
function App() {
  return (
    <div className="App">
      <Nav/>
      <Switch>
        <Route exact path='/'>
          <Start/>
        </Route>
        <Route exact path='/reservation'>
          <Reservation/>
        </Route>
        <Route exact path='/reservation2'>
          <Reservation2/>
        </Route>
        <Route exact path='/confirm'>
          <Confirm/>
        </Route>
        <Route exact path='/complete'>
          <Complete/>
        </Route>
        <Route exact path='/reservation21'>
          <Reservation21/>
        </Route>
        <Route exact path='/reservation22'>
          <Reservation22/>
        </Route>
        <Route exact path='/reservation23'>
          <Reservation23/>
        </Route>
        <Route exact path='/confirm2'>
          <Confirm2/>
        </Route>
        <Route exact path='/complete2'>
          <Complete2/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
