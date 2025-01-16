import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CSS/index.css';

import App from './App.tsx';
import ErrorPage from './Pages/ErrorPage.tsx';
import Home from './Pages/HomePage.tsx';
import Gallery from './Pages/Gallery.tsx';
import Login from './Pages/Login.tsx';
import Editor from './Pages/GalleryEditor.tsx';


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
        path: "/Gallery",
        element: <Gallery />
      }, 
      {
        path: "/Login",
        element: <Login />
      }, 
      {
        path: "/Editor",
        element: <Editor />
      },  



    ]
  }
])

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<RouterProvider router={router} />);
}
