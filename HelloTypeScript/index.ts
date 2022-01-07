import axios from "axios";

const url = "http://jsonplaceholder.typicode.com/todos/2";

interface ToDo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then((response) => {
  const todo = response.data as ToDo;

  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;

  logTodo(id, title, completed);
});

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
    The ToDo with ID: ${id}
    Has a title of: ${title}
    Is it finished? ${completed}
  `);
};
