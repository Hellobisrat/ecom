import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Route, RouterProvider,createRoutesFromElements } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import PrivateRoute from './components/PrivateRoute.jsx'
import store from './redux/features/store.js'

import Login from './pages/Auth/Login.jsx'
import Register from './pages/Auth/Register.jsx'
import Profile from './pages/User/Profile.jsx'
import AdminRoute from './pages/Admin/AdminRoute.jsx'
import UserList from './pages/Admin/UserList.jsx'
import CategoryList from "./pages/Admin/CategoryList";
const router = createBrowserRouter(
  createRoutesFromElements(


    
      <Route path='/' element={<App/>}>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>

           {/* Registered users */}
      <Route path="" element={<PrivateRoute />}>
        <Route path="/profile" element={<Profile />} />
        {/* <Route path="/shipping" element={<Shipping />} /> */}
        {/* <Route path="/placeorder" element={<PlaceOrder />} /> */}
        {/* <Route path="/order/:id" element={<Order />} /> */}
      </Route>
        {/* Admin Routes */}
        <Route path='/admin' element={<AdminRoute/>}>
          <Route path='userlist' element={<UserList/>}/>
           <Route path="categorylist" element={<CategoryList />} />
        </Route>


      </Route>
    
    
  )
)

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router}/>
   </Provider>
)
