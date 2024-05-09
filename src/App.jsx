

import './index.scss';
import NewDetails from './component/NewsDetail';

import May from './component/MaytoSep';


import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Creater from './component/Creater';
import Single from './pages/Single';
import Home from './pages/Home';
import Navbar from './component/Navbar';
import Footer from './component/Footer'

import Oct from './component/Oct';
import Relief from './Relief';
import Mays from './component/Mays';
import October from './component/October';
import ReliefCamp from './component/ReliefCamp';
import Organization from './component/Organisaztion';
import Dead from './component/Dead';

import BlogDisplay from './component/BlogDisplay';


// ...



const router = createBrowserRouter([
  {
   
      path:"/",
      element:<Home/>


      }, 
  
  
  
  {
    path:"/post",
    element:<Single></Single>,
  },

  



  {
    path:"/may",
    element:<May/>
  },
  {
    path:"/oct",
    element:<Oct/>
  },
  {
    path:"/relief",
    element:<Relief/>
  },

  {
    path:"/details",
    element:<NewDetails/>
  },
  
  {
    path:"/mays",
    element:<Mays/>
  },
  {
    path:"/october",
    element:<October/>
  },
  {
    path:"/rom",
    element:<ReliefCamp></ReliefCamp>
  },
  {
    path:"/org",
    element:<Organization/>
  },

  {
    path:"/dead",
    element:<Dead/>
  },
  
  {
    path:"/displayblog",
    element:<BlogDisplay></BlogDisplay>
  },
  {
    path:"/creater",
    element:<Creater/>
  },

]);
function App() {
  return (
   <div className='app'>
    <div className='container'>
       <RouterProvider router={router}/>
  </div>
   </div>)
}



export default App;


