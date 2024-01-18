import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard.jsx';
import Products from './components/products/Products.jsx';
import ProductDetail from './components/product-detail/ProductDetail.jsx';
import Category from './components/category/Category.jsx';
import ContactUs from './components/contact-us/ContactUs.jsx';
import NotFound from './components/not-found-page/NotFound.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/categories",
        element: <Category />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/product/:id",
        element: <ProductDetail />,
      }
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
