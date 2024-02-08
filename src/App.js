import './App.css';
import "./App.scss"
import Primo from './components/1Primo';
import Secondo from './components/2Second';
import Terzo from './components/3Terzo';
import Navbar from './components/Navbar';
import Task from './data/Context';

function App() {
  return (
    <div id='bootlock'>

      <Task>
        <Navbar />
        <Primo />
      </Task>

    </div>
  );
}

export default App;
