import UserContextprovider from "./context/UserContextProvider"

function App() {


  return (
    <>
     <UserContextprovider>
      <h1>React with Chai and share is important</h1>
     </UserContextprovider>
    </>
  )
}

export default App
