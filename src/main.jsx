import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./styles.css";
import Root from "./Root.jsx"
import ErrorPage from './components/ErrorPage.jsx'
import HomePage from "./components/HomePage.jsx"; 
import ShopPage from './components/ShopPage.jsx';
import ItemPage from './components/ItemPage.jsx';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "home",
        element: <HomePage/>
      },
      {
        path: "shop",
        element: <ShopPage/>,
        children: [
          {
            path: ":id",
            element: <ItemPage/>
          }
        ]
      }
    ],
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
