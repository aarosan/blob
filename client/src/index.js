import React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';

import App from './App';
import Home from './pages/Home';
import Error from './pages/Error';
import MyBlobs from './pages/MyBlobs';
import AddBlobs from './pages/AddBlobs';
import Login from './pages/Login';
import Signup from './pages/Signup';
import BlobDetails from './pages/BlobDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/signup',
        element: <Signup />
      },
      {
        path: '/myBlobs',
        element: <MyBlobs />
      },
      {
        path: '/addBlobs',
        element: <AddBlobs />
      },
      {
        path: '/blob/:blobName',
        element: <BlobDetails />
      }
    ]
  }
])

const root = createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
)