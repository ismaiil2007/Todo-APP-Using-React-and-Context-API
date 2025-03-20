import React from 'react'
import { Context } from '../../context/TodosContext'

const Form = () => {
  const {todos,setTodos} = React.useContext(Context)
  const [inputValue,setInput] = React.useState('')

const handleTodo = (e) =>{
  e.preventDefault()  
  const newTodo = {
    id: Date.now(),
    // title: e.target.value,
    title: inputValue,
    completed: false
  }
  if (newTodo.title!==''){
  setTodos([...todos,newTodo])
  setInput('')
  }

}

  return (
    <>
    <form onSubmit={handleTodo} className='flex'>
    <input 
    className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
    type="text" 
    placeholder="Add a new todo..."
    // onMouseEnter={handleTodo}
    // value={todos.title}
    value={inputValue}
    onChange={(e)=>setInput(e.target.value)}
    // onChange={}
  
  
    />

<button onClick={()=>handleTodo} type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
              Add
          </button>

    </form>
    </>
  )
}

export default Form;