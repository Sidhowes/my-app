import logo from './logo.svg';
import './App.css';

import {Home} from './Home';
import {Department, Departments} from './Department';
import {Employee, Employees} from './Employee';
import {Navigation} from './Navigation';

import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="container">
     <h3 className="m-3 d-flex justify-content-center">
       React JS Tutorial
     </h3>

     <Navigation/>

     <Routes>
       <Route path='/' component={Home} exact/>
       <Route path='/department' component={Departments}/>
       <Route path='/employee' component={Employees}/>
     </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
