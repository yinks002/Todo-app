import React from 'react';
import Todo from './Todo.js';
const Formlist = ({todos,SetTodos,filteredTodos})=>{
	const TodoList = ()=>{

	}
	return(
		 <div className="todo-container">
    	  <ul className="todo-list">
    	  {filteredTodos.map(todo =>(
    	  	<Todo SetTodos={SetTodos} todo={todo} todos={todos} key={todo.id} text={todo.text}/>

    	  	))}
    	  </ul>
	    </div>



		)


}
export default Formlist;