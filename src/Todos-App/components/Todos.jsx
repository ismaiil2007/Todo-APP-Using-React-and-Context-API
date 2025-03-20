import React from "react";
import { Context } from "../../context/TodosContext";

const Todos = () => {
  const { todos, setTodos } = React.useContext(Context);
  console.log(todos)

  const deleteItem = (indexToDelete) => {
    const new_todos = todos.filter((_, index) => index !== indexToDelete);
    // const new_todos = todos.filter((_,index)=>{index!==indexToDelete}) //This will not work as expected if we use curly braces then we have to use return statement otherwise we can just remove curly braces and it will work perfectly
    console.log("indexToDelete", indexToDelete);
    console.log(new_todos);
    // setTodos([...todos,todos.(new_todos)])
    setTodos(new_todos);
  };

  const completedTask = (completedTaskIndex) => {
    const new_Todos = todos.map((todo, index) => {
      if (index === completedTaskIndex) {
        return { ...todo, completed: !todo.completed };
      }
      return todo; // Ye line zaroori hai - har item ko return karna hai
    });

    console.log("new_Todos", new_Todos); // For debugging
    setTodos(new_Todos);
  };

  // const [ isEditable,setEditable]=React.useState(false)
  // const [editingFeild,updateTask]=React.useState(
  //   <div>
  //   <input type="text" value={item.title}/>
  //   <button onClick={()=>{}}>Save</button>
  //   </div>
  // )

  // const todosEditable = React.useRef(null)
  // const [inputValue, setInputValue] = React.useState(item.title)

  // const editTodos = ()=>{

  //   if (todosEditable.current.value =  "📁") {

  //    setInputValue(<div>
  //     <input type="text" placeholder="Edit Todo..." />

  //     </div>
  //   )

  //   }

  // }

  const [editedText, setEditedText] = React.useState(null);
  // const [ isEditable,setEditable]=React.useState(false)
  const [editingId, setEditingId] = React.useState(null);
  const inputRef = React.useRef(null);


  const handleEdit = (index) => {
    // setEditable(!isEditable)
    // setInputValue(todos[index].title)
    if (editingId === index) {
      // Save changes
      const newTodos = todos.map((todo, i) => {
        if (i === index) {
          return { ...todo, title: editedText };
        }
        return todo;
      });
      setTodos(newTodos);
      setEditingId(null);
    } else {
      // Start editing
      setEditingId(index);
      setEditedText(todos[index].title);
      setTimeout(() => {
        inputRef.current?.focus();
      }, 0);
    }
  };

  return (
    <>
      {todos.map((item, index) => {
        return (
          <div
            className={`w-full  justify-between h-auto  flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
              item.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
            }`}
          >
            <div className="flex gap-2.5 items-center ">
              <input
                type="checkbox"
                onChange={() => completedTask(index)}
                checked={item.completed}
              />
              {
                // (item.title ? setEditedText(item.title): isEditable) ? <input
                editingId == index ? ( //These round brackets are not necessary
                  <input
                    type="text"
                    className={`border outline-none w-full bg-transparent  rounded-lg  ${
                      editingId == index
                        ? "border-black/10 px-2"
                        : "border-transparent"
                    } ${item.completed ? "line-through" : ""}`}
                    defaultValue={item.title}
                    value={editedText}
                    ref={inputRef}
                    onChange={(e) => {
                      setEditedText(e.target.value);
                    }}
                  />
                ) : (
                  <div className="w-full max-w-100  " style={{  overflowWrap: 'break-word' }}key={index}>
                    {item.completed ? <del >{item.title}</del> : item.title}
                  </div>
                )
              }
            </div>
            {/* <div key={index}>{item.completed==true ? <del>{item.title}</del>:item.title}</div> */}

            <div>
              <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {
                  handleEdit(index);
                }}
                // ref={todosEditable}

                disabled={item.completed}
              >
                {/* {isEditable ? "✏️" : "📁" }  */}
                {editingId === index ? "📁" : "✏️"}
                {/*isEditable ? "📁" : "✏️"*/}
              </button>

              <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => deleteItem(index)}
              >
                X
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Todos;
// import React from 'react'
// import { Context } from '../../context/TodosContext'

// const Todos = () => {
//   const {todos, setTodos} = React.useContext(Context)
//   const [editingId, setEditingId] = React.useState(null)
//   const [editText, setEditText] = React.useState('')

//   const deleteItem = (indexToDelete) => {
//     const new_todos = todos.filter((_, index) => index !== indexToDelete)
//     setTodos(new_todos)
//   }

//   const completedTask = (completedTaskIndex) => {
//     const new_Todos = todos.map((todo, index) => {
//       if (index === completedTaskIndex) {
//         return {...todo, completed: !todo.completed}
//       }
//       return todo
//     })
//     setTodos(new_Todos)
//   }

//   const handleEdit = (item) => {
//     if (editingId === item.id) {
//       // Save the edit
//       const newTodos = todos.map(todo => {
//         if (todo.id === item.id) {
//           return {...todo, title: editText}
//         }
//         return todo
//       })
//       setTodos(newTodos)
//       setEditingId(null)
//     } else {
//       // Start editing
//       setEditingId(item.id)
//       setEditText(item.title)
//     }
//   }

//   return (
//     <>
//       {todos.map((item, index) => {
//         return (
//           <div key={item.id} className={`w-full justify-between flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300 text-black ${
//             item.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
//           }`}>
//             <div className='flex gap-2.5 items-center'>
//               <input
//                 type="checkbox"
//                 onChange={() => completedTask(index)}
//                 checked={item.completed}
//               />
//               {editingId === item.id ? (
//                 <input
//                   type="text"
//                   value={editText}
//                   onChange={(e) => setEditText(e.target.value)}
//                   className="border rounded px-2"
//                 />
//               ) : (
//                 <div>{item.completed ? <del>{item.title}</del> : item.title}</div>
//               )}
//             </div>

//             <div>
//               <button
//                 className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
//                 onClick={() => handleEdit(item)}
//                 disabled={item.completed}
//               >
//                 {editingId === item.id ? "💾" : "✏️"}
//               </button>

//               <button
//                 className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
//                 onClick={() => deleteItem(index)}
//               >
//                 X
//               </button>
//             </div>
//           </div>
//         )
//       })}
//     </>
//   )
// }

// export default Todos

