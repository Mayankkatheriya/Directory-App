import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./RouteError";
import Layout from "./Layout";
import AddNewPage from './AddNewPage/AddNewPage';
import Retrievepage from './Retrieve/Retrievepage';
function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      errorElement: <ErrorPage />,
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <AddNewPage />,
        },
        {
          path: "/retrieve",
          element: <Retrievepage />
        }
      ]
      
    }
  ])
  return (
   <>
    <RouterProvider router = {routes} />
   </>
  );
}

export default App;
