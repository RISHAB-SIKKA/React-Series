import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


// function customRender(reactElement, container) {
//   const domElement = document.createElement(reactElement.type)
//   domElement.innerHTML = reactElement.children

//   for(const prop in reactElement.props){
//       if(prop === 'children') continue;
//       domElement.setAttribute(prop, reactElement.props[prop]);
//   }

//   container.appendChild(domElement);

// }

// const reactElement =
//     {
//     type: 'a',
//     props:{
//         href: "https://google.com",
//         target: "_blank"
//     }, children: "Click me to visit google"
// }

const anotherUSer = "Rishab Sikka"
const reactElement = React.createElement(
  'a',
  {
    href: "https://google.com", target:"_blank"
  },
  "click me to visit google",
  anotherUSer
)

const anotherElement = (
  <a href='https://google.com' target="_blank">google</a>
)


createRoot(document.getElementById('root')).render(
  // <App/>
  reactElement
)
