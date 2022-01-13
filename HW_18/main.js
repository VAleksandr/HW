const submit_todo_btn = document.getElementById('submit_todo');
const todo_title_input = document.getElementById('todo_title');
const todo_description_text_area = document.getElementById('todo_description');
const todos_container = document.querySelector('.main-wrapper__todos');
const todos = [];


const initApplication = () => {
  if (!localStorage.getItem('todos')) {
    localStorage.setItem('todos', JSON.stringify([]));
  }

  outputOnPageTodos(JSON.parse(localStorage.getItem('todos')));
}

submit_todo_btn.onclick = () => {
  const dateTodo = new Date();
  const todo = {
    id: dateTodo.toLocaleString(),
    title: todo_title_input.value,
    description: todo_description_text_area.value
  };
  const existingTodos = JSON.parse(localStorage.getItem('todos')) || [];
  let outOneTodo;

  existingTodos.push(todo);
  localStorage.setItem('todos', JSON.stringify(existingTodos));
  outOneTodo = existingTodos.slice(existingTodos.length - 1, existingTodos.length);
  outputOnPageTodos(outOneTodo);
  todo_title_input.value = '';
  todo_description_text_area.value = '';
  getInputs();
}

const outputOnPageTodos = outTodos => {

  outTodos.forEach(todo => {
    const todo_container = document.createElement('div');
    const todo_title = document.createElement('h3');
    const todo_description = document.createElement('p');
    const deleteTodoBtn = document.createElement('button');
    
    todo_container.classList.add('main-wrapper__todos__container');
    deleteTodoBtn.classList.add('deleteTodoButton');
    todo_title.classList.add('todo_title_container');
    deleteTodoBtn.id = todo.id;
    deleteTodoBtn.innerText = 'Delete';
    todo_title.innerText = todo.title;
    todo_description.innerText = todo.description;
    todo_container.append(todo_title, todo_description, deleteTodoBtn);
    todos_container.append(todo_container); 
    deleteTodo(); 
  });
}

const deleteTodo = () => {
  todos_container.querySelectorAll('button').forEach(button => {
   
    button.onclick = () => {
      const deleteTodo = JSON.parse(localStorage.getItem('todos')).filter(item => item.id !== button.id);
      
      localStorage.setItem('todos', JSON.stringify(deleteTodo));

      button.closest('div').remove();
    }
  });
}

const getInputs = () => {
  if (todo_title_input.value !== '' && todo_description_text_area.value !== '') {
    submit_todo_btn.removeAttribute('disabled');
  } else {
    submit_todo_btn.setAttribute('disabled', true);
  }
}

todo_title_input.oninput = () => {
  getInputs();
}

todo_description_text_area.oninput = () => {
  getInputs();
}

initApplication();
