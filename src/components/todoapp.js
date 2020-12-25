import React from 'react';
import './todoapp.css';

export default function Todoapp(){

    const arr=[
{
    item:"Reading",
},
{
    item:"Writing",
},
{
    item:"Running",
},

];

    const[todo,setTodo]=React.useState(arr);
    const[item,setItem]=React.useState({})
    const handleSubmit=(e)=>{
    
       //console.log(e)
       //alert("clicked")
        let newArr=todo.slice();
        console.log(newArr)
        newArr.splice(e,1);
        setTodo(newArr)
         
    }

    const handleInput=(e)=>{

         let inp=e.target.value;
         
         console.log(inp);
         let newItem={
             item:inp,
         }
         setItem(newItem);
        
    }
    const handleSave=()=>{
        let newarr=todo.slice();
        if(item===null){
            alert("Please enter something....")
        }
        else{
            newarr.unshift(item);
            setTodo(newarr)
        }
    }
   

        return (
            <div className="todo-container">
                
                <div className="input-section">
                    <h1>Todo App</h1>
                    <input type="text" onChange={handleInput}  placeholder="Enter items...."/ >
                     <button className="btn btn-info mt-1" onClick={handleSave}>ADD</button>
                </div>
               <div className="itms">
                <ul>
                    {
                        todo.map((data,ky)=>{

                            return(
                                <li>{data.item} <i onClick={()=>handleSubmit(ky)} class="fas fa-trash-alt"></i></li>
                            )
                        })
                    }
                 
                </ul>
                </div>
            </div>
        
        )}
