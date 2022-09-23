import React ,{useState,useEffect} from 'react';
import './App.css';
// import Header from './Header.js';
// import AddContact from './AddContact';
// import ContactList from './ContactList';
import Form from './Form.js'
import Formlist from './Formlist.js'

const App = ()=> {
	const [inputText,setInputText] = useState("");
	const [todos,SetTodos] = useState([]);
  const [status,setStatus] = useState("all");
  const [filteredTodos,setFilteredTodos]= useState([]);
  
  useEffect(()=>{
    getLocalTodos();
  },[]) 
  useEffect(()=>{
    filterHandler();
  },[todos,status]);




  //Functions
  const filterHandler = ()=>{
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo=>todo.completed===true));
        break
        case 'uncompleted':
          setFilteredTodos(todos.filter(todo=> todo.completed===false));
          break 
        default:
          setFilteredTodos(todos);
          break    
    }
  }


  const saveLocalTodos = ()=>{
   
    localStorage.setItem('todos',JSON.stringify(todos));
    
  }
  const getLocalTodos = ()=>{
     if(localStorage.getItem('todos')===null){
      localStorage.setItem('todos', JSON.stringify([]));

    }else {
      
      let todoLocal=JSON.parse(localStorage.getItem("todos"));
      SetTodos(todoLocal);
    }
 
  }

  return (
    <div>
    <header>
    <h1>Yinks todo list</h1>
    	</header>
    	<Form inputText={inputText}  todos={todos} SetTodos={SetTodos} setInputText={setInputText} setStatus={setStatus}/>
    	<Formlist SetTodos={SetTodos} filteredTodos={filteredTodos} todos={todos}/>

    </div>
   
     

    
  );
}

export default App;
