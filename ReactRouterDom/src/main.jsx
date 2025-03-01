import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import { Home, About, ContactUs, User, GitHub} from './components/index'
import { githubInfoLoader } from './components/GitHub/GitHub'

// const router = createBrowserRouter([
//   {
//     path: '',
//     element: <Layout />,
//     children: [
//       {
//         path: "/",
//         element: <Home/>
//       },
//       {
//         path: "/about",
//         element: <About/>
//       }
//     ]
    
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home/>} />
      <Route path="about" element={<About/>} />
      <Route path="contactus" element={<ContactUs/>} />
      <Route path="contactus" element={<ContactUs/>} />
      <Route path="user/:userid" element={<User />} /> 

      <Route 
      loader={githubInfoLoader}
      path="github" 
      element={<GitHub />}
       />     

    </Route>
  )
)



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
