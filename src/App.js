//import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import "./App.scss"
import Home from './components/Home';

import Navbar from './components/Navbar';
import Task from './data/Context';

function App() {

  return (
    <div id='bootlock'>

      <Task>
        <Navbar />
        <Home />
      </Task>

    </div>
  );
}

export default App;
