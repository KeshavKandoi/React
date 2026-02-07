 import "./App.css";
 import Title from "./Title.jsx";
 import ProductTab from "./ProductTab.jsx";
 import MsgBox from "./MsgBox";



// <div> ke jgh <> likhte jisme multiple return de sakte hai

function App() {
  return(
  <>       
  <MsgBox userName="PRINCE" textColor="yellow"/>
  <ProductTab/> 
  </>
)
};

export default App
