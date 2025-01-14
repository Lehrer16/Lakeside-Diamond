import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CSS/index.css';

import App from './App.tsx';
import ErrorPage from './Pages/ErrorPage.tsx';
import Home from './Pages/HomePage.tsx';
import Photos from './Pages/Photos.tsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />
      },  
      {
        path: "/Photos",
        element: <Photos />
      }, 
      {
        path: "/Login",
        element: <Photos />
      },  



    ]
  }
])

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<RouterProvider router={router} />);
}
