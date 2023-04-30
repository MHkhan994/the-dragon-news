import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  RouterProvider
} from "react-router-dom";
import router from './routes/Routes.jsx';
import Main from './layout/Main.jsx';
import AuthProvider from './provider/AuthProvider';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}>
        <Main></Main>
      </RouterProvider>
    </AuthProvider>
  </React.StrictMode>
)
