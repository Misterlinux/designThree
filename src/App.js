//import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import "./App.scss";
import { useEffect, useRef } from 'react';
import Home from './components/Home';

import Navbar from './components/Navbar';
import Task from './data/Context';

function App() {

  let navParent = useRef([])

  return (
    <div id='bootlock'>

      <Task>
        <Navbar navParent={navParent} />
        <Home navParent={navParent} />
      </Task>

    </div>
  );
}

export default App;
