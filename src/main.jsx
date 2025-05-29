import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./styles.css";
import Root from "./Root.jsx"
import ErrorPage from './components/ErrorPage.jsx'
import HomePage from "./components/HomePage.jsx"; 
import ShopPage from './components/ShopComponents/ShopPage.jsx';
import ItemPage from './components/ItemComponents/ItemPage.jsx';
import CartPage from './components/CartComponents/CartPage.jsx';
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
      },
      {
        path: "cart",
        element: <CartPage/>
      }
    ],
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
