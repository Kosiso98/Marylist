import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import { contractABI, contractAddress } from "./constant/index";

function Todolistt() {
  const [todos, setTodos] = useState([]);
  const [newTodoDescription, setNewTodoDescription] = useState("");

  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const contract = new ethers.Contract(contractAddress, contractABI, signer);

  async function fetchTodos() {
    const todos = await contract.viewTodos();
    setTodos(todos);
  }

  useEffect(() => {
    fetchTodos();
  }, []);

//   const handleAddTodo = async () => {
//   await contract.addTodo(newTodoDescription).then(() => {
//     fetchTodos();
//     setNewTodoDescription("");
//   });
// };
const handleAddTodo = async () => {
  await contract.addTodo(newTodoDescription).then(() => {
    fetchTodos();
    setNewTodoDescription("");
  });
  setTodos([...todos, { description: newTodoDescription, isCompleted: false }]);
};

const handleCompleteTodo = async (index) => {
  await contract.completeTodo(index).then(() => {
    fetchTodos().then((todos) => {
      const updatedTodos = todos.map((todo, i) => {
        if (i === index) {
          todo.isCompleted = !todo.isCompleted;
        }
        return todo;
      });
      setTodos(updatedTodos);
    });
  });
};

const handleDeleteCompletedTodos = async () => {
  await contract.deleteCompletedTodos().then(() => {
    fetchTodos().then((todos) => {
      setTodos(todos.filter((todo) => !todo.isCompleted));
    });
  });
};

  return (
    <div id="todo">
      <h1 style={{borderRadius:'10px',fontSize:'22px', padding:'10px',textAlign:'center',backgroundColor:'yellowgreen'}}>Todos</h1>
      <ul style={{fontSize:'18px',backgroundColor:'blue',color:'whitesmoke',paddingLeft:'30px'}}>
        {todos.map((todo, index) => (
          <li key={index}>
  <input
  style={{borderRadius:'10px',fontSize:'16px', padding:'10px',textAlign:'right',backgroundColor:'whitesmoke'}}
    type="checkbox"
    checked={todo.isCompleted}
    onChange={() => handleCompleteTodo(index)}
  />
  {todo.description}
</li>

        ))}
      </ul>
      <input
      style={{borderRadius:'10px',fontSize:'14px', padding:'10px',textAlign:'right',backgroundColor:'wheat',margin:'10px'}}
        type="text"
        value={newTodoDescription}
        onChange={(e) => setNewTodoDescription(e.target.value)}
      />
      <button style={{borderRadius:'10px',fontSize:'18px', padding:'10px',textAlign:'right',backgroundColor:'wheat',margin:'10px'}}
       onClick={handleAddTodo}>Add Todo</button>
      <button style={{borderRadius:'10px',fontSize:'18px', padding:'10px',textAlign:'right',backgroundColor:'wheat'}}
       onClick={handleDeleteCompletedTodos}>
        Delete Completed Todos
      </button>
    </div>
  );
}

export default Todolistt;
