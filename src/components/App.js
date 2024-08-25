import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom' 
import { Provider } from 'react-redux'
import Header from './Header'
import Body from './Body'
import Cart from './Cart'
import store from '../store/store'

const App = () => {
  return (
    <div>
      <Provider store={store}>
      <Header/>
      <Outlet/>
      </Provider>
    </div>
  )
}

 const appRouter= createBrowserRouter([{
    path: '/',
    element : <App/>,
    children: [
      
      { path: '/', element: <Body/>  },
      { path: '/cart', element: <Cart/>  },
       
    ]
}])
const root=ReactDOM.createRoot(document.getElementById('root'))

root.render(<RouterProvider router={appRouter} />)
