

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router'
import { TodosContextProvider } from './context/TodosContext.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(

  <BrowserRouter>
  <TodosContextProvider>
 
 <App></App>
      </TodosContextProvider>
  </BrowserRouter>

    // <RouterProvider router={router} />
)

// // =============================================

// // import React from 'react'
// // import { createRoot } from 'react-dom/client'
// // import './index.css' 
// // import App from './App'
// // // import TestTailwind from './Day-4/Tailwind-component'
// // // import Page from './Day-7/page'


// // function Myfunction(){
// //   console.log("aha maza aya")

// //   return (<h1>Hanji aya maza <a href="google.com" target='_blank'>click to google</a></h1>
    
// //   )
// // }


// // const reactelement = {
// //   type : "a",
// //   props:{
// // href:"google.com",
// // target:"_blank"
// //   },
// //   Children: "Clcik me to open google.com"
// // }  //this will not work bcz the .render funtion doesn't expect an object of this type to render, instead the below with a little bit of different object will work

// // const realreactElement = React.createElement(
// //   'a',
// //   {
// //     href:"google.com",target:"_blank"
// //   },
// //   "Click to open google.com"
// // )//this syntax will be renderd if we pass it inside the .render function, the first thing is considered as the tag name, the second is it's properties or attibutes and last is the content inside it

// // function isGoalProp(){
// //   return true;
// // }

// // createRoot(document.getElementById('root')).render(
// //   <App/>
// //   // <Page isGoal={isGoalProp}></Page>
// //   // <TestTailwind/>
// //   // realreactElement
// //   // reactelement
// //   //  <Myfunction />
// //   // Myfunction() //these will also work bcz in the end react is javascript
   
// //   // <StrictMode> //App will be rendered without strict mode, it is just for safety and a good practice.
   
// //   // </StrictMode>
// // )


// //DAY 12 - REACT-ROUTER

// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
// import { BrowserRouter, Route, Routes, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router'
// import Home from './Day-12(React-router)/Home.jsx'
// import About from './Day-12(React-router)/About.jsx'
// import Contact from './Day-12(React-router)/Contact.jsx'
// import ContextProvider from './context/UserContext.jsx'
// // import User from './Day-12(React-router)/User.jsx'
// import Github,{ githubInfoLoader } from './Day-12(React-router)/Github.jsx'
// import Login from './Day-12(React-router)/Login.jsx'
// import { ThemeProvider } from './context/Themes.jsx'
// import { TodosContextProvider } from './context/TodosContext.jsx'
// // import Github from './Day-12(React-router)/Github.jsx'

// // const router = createBrowserRouter([
// //   {
// //     path: '/',
// //     element: <Layout/>,
// //     children: [
// //       {
// //         path: "",
// //         element: <Home />
// //       },
// //       {
// //         path: "about",
// //         element: <About />
// //       },
// //       {
// //         path: "contact",
// //         element: <Contact />
// //       }
// //     ]
// //   }
// // ])

// // const router = createBrowserRouter(
// //   createRoutesFromElements(
// //     <Route path='/' element={<App />}>
// //       <Route path='' element={<Home />} />
// //       <Route path='/about' element={<About />} />
// //       <Route path='/contact' element={<Contact />} />
// //       {/* <Route path='user/:userid' element={<User />} /> */}
// //       <Route 
// //       loader={githubInfoLoader}
// //       path='/github/:userid' 
// //       element={<Github />}
// //        />
// //     </Route>
// //   )
// // )

// ReactDOM.createRoot(document.getElementById('root')).render(

//   <BrowserRouter>
//   <TodosContextProvider>
//   <ThemeProvider>
//   <ContextProvider>
//     <Routes>
//   <Route path='/' element={<App />}>
//       <Route path='/' element={<Home />} />
//       <Route path='/about' element={<About />} />
//       <Route path='/contact' element={<Contact />} />
//       {/* <Route path='user/:userid' element={<User />} /> */}
//       <Route 
//       loader={githubInfoLoader}
//       path='/github/:userid' 
//       element={<Github />}
//        />
//        <Route path='/login' element={<Login/>}/>
//     </Route>
//     </Routes>
//       </ContextProvider>
//       </ThemeProvider>
//       </TodosContextProvider>
//   </BrowserRouter>

//     // <RouterProvider router={router} />
// )

