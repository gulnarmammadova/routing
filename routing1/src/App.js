import './App.css';
import { Routes, Route, NavLink } from 'react-router-dom';
import About from './Components/About';
import Contacts from './Components/Contacts';
import JobExample from "./Components/JobExample";

function App() {
  return (
    <div className="App">
      <div>
        <NavLink className="about" to="/about">
          About
        </NavLink>
        <NavLink className="contacts" to="/contacts">
          Contacts
        </NavLink>
        <NavLink className="jobexample" to="/jobexample">
          Job Example
        </NavLink>
      </div>

      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/jobexample" element={<JobExample />} />
      </Routes>
    </div>
  );
}

export default App;
