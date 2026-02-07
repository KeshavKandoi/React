import { StrictMode } from 'react'
import React from 'react';
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
 
// khud ka react element

/*
const reactElement={
    type: 'a',
    props:{
      href:'https://google.com',
      target:'_blank'
  
    },
    children: 'click me to visit google'
  }
  */
 
// ye bhi bana skte hai  exmaple ki liye y app bhi use kr skte hai 

/*const anotherElement=(
    <a href="https://google.com" target='_blank'>visit google </a>
)
*/

// ye bhi use kr skte hai react ka format aisa hota h likhne ka 

const anotherUser=" chai aur react "

const reactElement =React.createElement('a',
{href:'https://google.com',target:'_blank'},
'click me to visit google',
 anotherUser
)
createRoot(document.getElementById('root')).render(

    reactElement

  //anotherElement
    //<App />

)
//npm run dev