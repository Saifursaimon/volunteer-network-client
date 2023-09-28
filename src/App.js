import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';

function App() {

  // Routes
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
    }
  ])


  return (
    <div className="max-w-7xl m-auto">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
