import {v4 as uuidv4} from "uuid";
import { useState } from "react";

export default function TodoList() {
  let[todos,setTodos]=useState([{task:"sample task", id:uuidv4(),isDone:false}])
  let [newTodo,setNewTodo]=useState("")

  let addNewTask = () =>{
    setTodos((prevTodos) =>{
     return [...prevTodos,{task:newTodo ,id:uuidv4(),isDone:false}]})
    setNewTodo("");

  };

  let updateTodoValue=(event)=>{
    setNewTodo(event.target.value);

  
  };

  let deleteTodo=(id) =>{
    setTodos((prevTodos)=>todos.filter((prevTodos)=>prevTodos.id!=id))
  }

   let upperCaseAll=()=>{
    setTodos((Todos)=>
      Todos.map((todo)=>{
        return{
          ...todo,
            task:todo.task.toUpperCase()
        }
      })
    )
   }


   let upperCaseOne=(id)=>{
    setTodos((Todos)=>
      Todos.map((todo)=>{
        if(todo.id==id){
          return{
            ...todo,
              task:todo.task.toUpperCase(),
          };
        }else{
            return todo;
          }
        
      })
    )
   }


   let  markAsDone=(id)=>{
    setTodos((Todos)=>
      Todos.map((todo)=>{
        if(todo.id==id){
          return{
            ...todo,
              isDone:true,
          };
        }else{
            return todo;
          }
        
      })
    )
   }

   let MarkAllDone=()=>{
    setTodos((Todos)=>
      Todos.map((todo)=>{
        return{
          ...todo,
            isDone:true
        }
      })
    )
   }


   

  
  return (
    <div>
      <input placeholder="add a task" value={newTodo} onChange={updateTodoValue} />


      <button onClick={addNewTask}>ADD task</button>

      <br />
      <br />
      <br />



      <h4>Tasks Todo</h4>
      <ul>
        {todos.map((todo) =>{
         return <li key={todo.id} >
         <span style={todo.isDone ? {textDecorationLine:"line-through"}:{}}>{todo.task} </span>
         &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
         <button onClick={()=>deleteTodo(todo.id)}>delete</button>
         &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
         <button onClick={()=>upperCaseOne(todo.id)}>upperCaseOne</button>
         &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
         <button onClick={()=>markAsDone(todo.id)}>MarkAsDone</button>
        
         

          </li>
        })}
      </ul>
      <br/><br/>
      <button onClick={upperCaseAll}>UpperCase All</button>
      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
         <button onClick={MarkAllDone}>MarkAllDone</button>
    </div>
  );
} 
    