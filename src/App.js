import './App.css';
import LayoutDefault from './components/LayoutDefault';
import {Routes,Route} from "react-router-dom"
import Home from './pages/Home';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Register from './pages/Register';
import PrivateRouter from './components/PrivateRouter';
import Dashboard from './pages/Dashboard';
import LayoutAdmin from './components/LayoutAdmin';
import SearchResult from './pages/SearchResult';
import JobDetail from './pages/JobDetail';
import CompanyDetail from './pages/CompanyDetail';
import Test from './pages/test';
import InfoCompany from './pages/InfoCompany';
import JobManage from './pages/JobManage';
import Job from './pages/JobManage/Job';
import CreateJob from './pages/JobManage/CreateJob';
import CVManage from './pages/CVManage';
import CVDetail from './pages/CVManage/CVDetail';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<LayoutDefault/>}>
          <Route index element={<Home></Home>}></Route>
          <Route path='login' element={<Login></Login>}></Route>
          <Route path='logout' element={<Logout></Logout>}></Route>
          <Route path='register' element={<Register></Register>}></Route>
          <Route path='search' element={<SearchResult></SearchResult>}></Route>
          <Route path='job/:id' element={<JobDetail></JobDetail>}></Route>
          <Route path='company/:id' element={<CompanyDetail></CompanyDetail>}></Route>
          
        </Route>
        <Route element={<PrivateRouter></PrivateRouter>}>
          <Route element={<LayoutAdmin></LayoutAdmin>}>
            <Route path='admin' element={<Dashboard></Dashboard>}></Route>
            <Route path='infoCompany' element={<InfoCompany/>}></Route>
            <Route path='jobManage' element={<JobManage/>}></Route>
            <Route path='jobDetail/:id' element={<Job/>}></Route>
            <Route path='createJob' element={<CreateJob/>}></Route>
            <Route path='cvManage' element={<CVManage></CVManage>}></Route>
            <Route path='cvDetail/:id' element={<CVDetail></CVDetail>}></Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
