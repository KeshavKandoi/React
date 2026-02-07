// import { useState } from "react";

// export default function Form(){
//   let[fullName,setFullName]=useState("")
//   let[username,setUsername]=useState("")



// let handleNameChange=(event)=>{
//   setFullName(event.target.value)
// };

// let handleUsername=(event)=>{
//   setUsername(event.target.value)
// };



//   return(
  
//     <form>
//       <label htmlFor="fullname">FULLNAME</label>
//       <input placeholder="Enter your fullname" type="text" value={fullName} onChange={handleNameChange} id="fullname "/>
 
//      <br/>
//      <br/>

//       <label htmlFor="username">Username</label>
//       <input placeholder="Enter your fullname" type="text" value={username} onChange={handleUsername} id="username "/>
  
//   <button>Submit</button>
//   </form>
//   )
// }




import { useState } from "react";

export default function Form(){
let[formData,setFormData]= useState({
  fullName:"", 
  username:"",
  password:""
})

let handleInputChange =(event)=>{
  let fieldName=event.target.name;
  let newValue=event.target.value;

  setFormData((currData)=>{
    return {...currData ,[fieldName]:newValue}
  })

}
 
let handleSubmit=(event)=>{
  event.preventDefault();
  setFormData({
    fullName:"",
    username:"",
    password:""
  })
};

  return(
   
    <form onSubmit={handleSubmit}>
      <label htmlFor="fullname">FULLNAME</label>
      <input placeholder="Enter your fullname" type="text" value={formData.fullName} onChange={handleInputChange} id="fullname" name="fullName" />
 
     <br/>
     <br/>

      <label htmlFor="username">Username</label>
      <input placeholder="Enter your username" type="text" value={formData.username} onChange={handleInputChange} id="username" name="username"/>

      <br/>
     <br/>

      <label htmlFor="password">password</label>
      <input placeholder="Enter your password" type="text" value={formData.password} onChange={handleInputChange} id="password" name="password"/>



  
  <button>Submit</button>
  </form>
  )
}

