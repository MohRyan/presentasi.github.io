import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Detail } from './pages/Detail.tsx';
import { Vote } from './pages/Vote.tsx';
import { DashBoard } from './pages/Admin/DashBoard.tsx';
import { ListPaslon } from './pages/Admin/ListPaslon.tsx';
import { ListPartai } from './pages/Admin/ListPartai.tsx';
import { AddPartai } from './pages/Admin/AddPartai.tsx';
import { AddPaslon } from './pages/Admin/AddPaslon.tsx';
import { LoginStatus } from './pages/LoginStatus.tsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginStatus />,
  },
  {
    path: "/home",
    element: <App />,
  },
  {
    path: "/detail1",
    element: <Detail />,
  },
  {
    path: "/vote",
    element: <Vote />,
  },
  {
    path: "/admin",
    element: <DashBoard />,
  },
  {
    path: "/listpaslon",
    element: <ListPaslon />,
  },
  {
    path: "/listpartai",
    element: <ListPartai />,
  },
  {
    path: "/addpaslon",
    element: <AddPaslon />,
  },
  {
    path: "/addpartai",
    element: <AddPartai />,
  },
  // {
  //   path: "/coba",
  //   element: < />,
  // }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
