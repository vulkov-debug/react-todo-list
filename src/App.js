import React from 'react';
import uuid from 'uuid';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
  return (
    <div>
   <div className="container">
     <div className="row">
       <TodoInput/>
       <TodoList/>
    
     </div>
   </div>
    </div>
  );
}

export default App;
