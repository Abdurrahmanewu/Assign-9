import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from './Layout/Main';
import Home from './component/Home/Home';
import Blog from './component/Blog/Blog';
import Statistics from './component/Statistics/Statistics';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home></Home>
        },
        {
          path: '/statistics',
          element: <Statistics></Statistics>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '*',
          element: <div><p>404</p>
            <br />
            <p>This file is not found</p>
          </div>
        }

      ]
    }
  ])
  return (
    <div className="App">

      <RouterProvider router={router}>

      </RouterProvider>
    </div>
  );
}

export default App;
