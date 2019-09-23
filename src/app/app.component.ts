import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My ToDo List';
  todos = [
    {
      label: 'Bring Milk',
      done: false,
      priority:3
    },
    {
      label: 'Clean House',
      done: false,
      priority:4
    },
    {
      label: 'pay bill',
      done: true,
      priority:1
    },
    {
      label: 'Fix the bulb',
      done: false,
      priority:2
    }
  ];
  addTodo(newTodoLabel){
    var newTodo = {
      label: newTodoLabel,
      priority: 5,
      done:false
    };
    this.todos.push(newTodo)
    priority=priority+1;
  }
  deleteTodo(todo){
    this.todos = this.todos.filter( t => t.label !== todo.label );
  }
}
