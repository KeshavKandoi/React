import { useState } from 'react'
import './App.css'
import Form from './form'
import CommentForm from "./CommentForm"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   {/* <Form/> */}
   <CommentForm/>
    </>
  )
}

export default App
