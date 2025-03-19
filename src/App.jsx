// import React from 'react'
// import './App.css'
// import Chai from './Chai'

// const App = () => {

//   let name = "Ismail"
//   function changname(){
//     console.log(name)
//     name = "Adnan"
//     console.log(name)
//   }
//   return (
//     <div>
//             <Chai/>
//       <h1>My name is {name}</h1>
//       <button onClick={changname}>Click to change name</button>       {/*  This will not work*/}

//     </div>
//   )
// }

// export default App;

//DAY 3

// import React from 'react'
// import Counter from './Day-3/Counter'

// const App = () => {
//   return (
//     <div>
//       <Counter></Counter>
//     </div>
//   )
// }

// export default App

// //DAY 4

// import React from 'react'
// import TestTailwind from './Day-4/Tailwind-component'
// import Props from './Day-4/Props'
// import FirstProject from './Day-4/First-project'

// const App = () => {
//   return (
//     <div>
//       {/* <TestTailwind></TestTailwind>
//       <Props age={20} ></Props> */}
//       {/* <FirstProject></FirstProject> */}
//     </div>
//   )
// }

// export default App;

// DAY 5

// import React from 'react'
// import SecondProject from './Day-5/Second-Project';
// import './App.css'

// const App = () => {
//   return (
//     <div>

//       <SecondProject></SecondProject>
//     </div>
//   )
// }

// export default App;

//DAY 7

// import React from 'react'
// import Page from './Day-7/page'

// const App = () => {
//   return (
//     <div>
//       <Page />
//     </div>
//   )
// }

// export default App

//DAY 8

// import React from 'react'
// import Page from './Day-8/page'

// const App = () => {
//   return (
//     <div>
//       <Page />
//     </div>
//   )
// }

// export default App

//DAY 9

// import React,{ useEffect,useState } from 'react'
// import Timer from './Day-9/Counter-with-useRef'

// const App = () => {

//   //   const [count, setCount] = useState(0);
//   // console.log(count)
//   //   if (count < 100){
//   //   useEffect(() => {
//   //     setTimeout(() => {
//   //       setCount((count) => count + 1);
//   //       console.log(count)
//   //     }, 100);
//   //   },);
//   // }

//   return (
//     <div>
// {/* <Timer number={count}></Timer> */}
// <Timer ></Timer>
//     </div>
//   )
// }

// export default App;

// //DAY 10

// import React from 'react'
// import Todos from './Day-10-(useCallback-and-useMemo)/useCallback'
// import UseMemo from './Day-10-(useCallback-and-useMemo)/usememo'

// const App = () => {
//   return (
//     <div>
//       {/* <Todos/> */}
// <UseMemo/>
//     </div>
//   )
// }

// export default App;

// //DAY 11

// import React from 'react'
// import CurrencyConvertor from './Day-11(Currency-Convertor)/page'

// const App = () => {
//   return (
//     <div>
//       <CurrencyConvertor />
//     </div>
//   )
// }

// export default App

//DAY 12

// import React from 'react'
// import Header from './Day-12(React-router)/components/Header'
// import Footer from './Day-12(React-router)/components/Footer'
// import {Outlet} from 'react-router'

// const App = () => {
//   return (
//     <div>
//       <Header/>
//       <Outlet/>
//       <Footer/>

//     </div>
//   )
// }

// export default App;

//THEME CHANGER PROJECT

// import { useContext, useEffect, useState } from 'react'
// import './App.css'
// import ThemeBtn from './Theme-Changer-Project/ThemeBtn'
// import Card from './Theme-Changer-Project/Card'
// import { ThemeContext } from './context/Themes'

// function App() {
//   const {theme} = useContext(ThemeContext)

//   useEffect(()=>{
//     document.querySelector('html').classList.remove("light", "dark")
//     document.querySelector('html').classList.add(theme)
//     },[theme])

//   return (

//     <div className="flex flex-wrap min-h-screen items-center">
//           <div className="w-full">
//               <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
//                   <ThemeBtn />
//               </div>

//               <div className="w-full max-w-sm mx-auto">
//                   <Card />
//               </div>
//           </div>
//       </div>

//   )
// }

// export default App

// Todos app Project

import React from "react";
import Todos from "./Todos-App/components/Todos";
import Form from "./Todos-App/components/Form";
import './index.css'

const App = () => {
  return (
    <div className="bg-[#172842] min-h-screen py-8">
      <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
        <h1 className="text-2xl font-bold text-center mb-8 mt-2">
          Manage Your Todos
        </h1>
        <div className="mb-4 ">
          <Form />
        </div>
        <div className="flex flex-wrap gap-y-3 w-full">
          <Todos />
        </div>
      </div>
    </div>
  );
};

export default App;
