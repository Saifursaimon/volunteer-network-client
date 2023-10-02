import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import Home from './Compnents/Home/Home';
import Login from './Compnents/Login/Login';
import Register from './Compnents/Register/Register';

function App() {

  // Routes
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/',
          element:<Home></Home>,
          loader: () => fetch('Events.json')
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/register',
          element:<Register></Register>
        },
      ]
    }
  ])


  return (
    <div className="max-w-7xl m-auto">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
