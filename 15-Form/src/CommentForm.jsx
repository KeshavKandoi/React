import { useState } from "react";

   
   
   
   
   export default  function CommentForm() {


  let [formData,setFormData]=useState({
   username:"",
   remarks:"",
   rating:7
  })

  let handleInputChange=(event)=>{
   setFormData((currData)=>{
      return {...currData,[event.target.name]:event.target.value};
   });
  }

  let handleSubmit=(event)=>{
   console.log(formData);
   event.preventDefault();
   setFormData({

      username:"",
      remarks:"",
      rating:7

   })
 
  }

    return(


    <div>

    <h4>GIVE A COMMENT</h4>
    
    <form onSubmit={handleSubmit}>

    <label htmlFor="username">Username</label>
    <input placeholder="username" type="text" value={formData.username} onChange={handleInputChange} id="username" name="username"/>    

    <br/> <br/> <br/>

    <label htmlFor="remarks">Remarks</label>
    <textarea value={formData.remarks} placeholder="remarks" onChange={handleInputChange} id="remarks"  name="remarks">Remarks</textarea>

    <br/> <br/> <br/>

    <label htmlFor="rating">Rating</label>
    <input placeholder="rating" type="number"value={formData.rating} onChange={handleInputChange} id="rating" name="rating"/>

    <br/> <br/> <br/>

    <button>Add Comment</button>

    </form>
    </div>








    );
   }