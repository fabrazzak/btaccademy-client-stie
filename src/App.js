import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Pages/Header';
import Home from './Pages/Home';
import Result from './Pages/Result/Result';
import Course from './Pages/Course/Course';
import Dashboard from './Pages/Dashboard/Dashboard';
import Addmissions from './Pages/Addmission/Addmissions';
import Addresult from './Pages/Addresult/Addresult';
import Addcourse from './Pages/Addcourse/Addcourse';
import Addteacher from './Pages/Addteacher/Addteacher';
import Allstudent from './Pages/Allstudent/Allstudent';

function App() {
  return (
    <div className="">
      <Header></Header>

      <Routes>

        <Route path='/' element={<Home></Home>}></Route>
        <Route path='home' element={<Home></Home>}></Route>
        <Route path='result' element={<Result></Result>}></Route>
        <Route path='course' element={<Course></Course>}></Route>
        <Route path='dashboard' element={<Dashboard></Dashboard>}>
          <Route path='addmission' element={<Addmissions></Addmissions>}></Route>
          <Route path='addresult' element={<Addresult></Addresult>}></Route>
          <Route path='addcourse' element={<Addcourse></Addcourse>}></Route>
          <Route path='addteacher' element={<Addteacher></Addteacher>}></Route>
          <Route path='allstudent' element={<Allstudent></Allstudent>}></Route>

        </Route>
        
      </Routes>
     
    </div>
  );
}

export default App;
